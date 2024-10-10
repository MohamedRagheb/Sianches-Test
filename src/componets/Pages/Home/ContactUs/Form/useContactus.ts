// React Hook Form
import { useForm } from "react-hook-form";

// Yup
import { number, object, type ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Custom Hooks
import useApi from "@/Hooks/useApi";

// Utils
import genrateFormData from "@/Utils/formDataGenrator";
import { observer } from "@/Utils/observer";

interface IContactUsFormType {
  name: string;
  email: string;
  phone: number;
  message: string;
}

const defaultValues: IContactUsFormType = {
  name: "",
  email: "",
  phone: 0,
  message: "",
};

const schema: ObjectSchema<IContactUsFormType> = object({
  name: string().required(),
  email: string().required().email(),
  phone: number().required(),
  message: string().required(),
});

export default function useContactus() {
  const { control, handleSubmit, reset } = useForm<IContactUsFormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isLoading, serverRequest } = useApi();

  const onSubmit = async ({
    name,
    message,
    email,
    phone,
  }: IContactUsFormType) => {
    const generatedBody = genrateFormData({
      name,
      phone,
      email,
      content: message,
    });

    const { data } = await serverRequest({
      method: "POST",
      endpoint: "/contact",
      body: generatedBody as any,
    });

    reset();

    if (data)
      observer.fire("notify", {
        type: "success",
        message: data.message,
      });
  };

  return { control, isLoading, submit: handleSubmit(onSubmit) };
}
