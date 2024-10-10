// Yup
import { yupResolver } from "@hookform/resolvers/yup";
import { object, type ObjectSchema, string } from "yup";

// React Hook Form
import { useForm } from "react-hook-form";

// Custom Hook
import useApi from "@/Hooks/useApi";

// Utils
import { observer } from "@/Utils/observer";
import genrateFormData from "@/Utils/formDataGenrator";

interface ISubscribeToNewSeltterFormType {
  email: string;
}

const defaultValues: ISubscribeToNewSeltterFormType = {
  email: "",
};

const schema: ObjectSchema<ISubscribeToNewSeltterFormType> = object({
  email: string().email().required(),
});

export default function useSubscribeToNewSeltter() {
  const { control, handleSubmit, reset } =
    useForm<ISubscribeToNewSeltterFormType>({
      defaultValues,
      resolver: yupResolver(schema),
    });

  const { isLoading, serverRequest } = useApi();

  const onSubmit = async (formValues: ISubscribeToNewSeltterFormType) => {
    const generatedBody = genrateFormData(formValues);

    const { data } = await serverRequest({
      method: "POST",
      endpoint: "/newsletter",
      body: generatedBody as any,
    });
    reset();
    if (data)
      observer.fire("notify", {
        type: "success",
        message: data.message,
      });
  };
  return { isLoading, control, submit: handleSubmit(onSubmit) };
}
