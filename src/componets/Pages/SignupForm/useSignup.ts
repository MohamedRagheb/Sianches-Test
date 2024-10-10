// Types
import type { ISignUpFormType } from "./types";

// React Hook Form
import { useForm } from "react-hook-form";

// Yup
import { mixed, number, object, type ObjectSchema, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Custom Hooks
import useApi from "@/Hooks/useApi";

// Utils
import genrateFormData from "@/Utils/formDataGenrator";
import { observer } from "@/Utils/observer";

// Hooks
import { useRouter } from "next/navigation";

const defaultValues: ISignUpFormType = {
  email: "",
  fullName: "",
  nationalImage: null,
  password: "",
  passwordConfirmation: "",
  terms: 0,
};

const schema: ObjectSchema<ISignUpFormType> = object({
  fullName: string().required(),
  email: string().email().required(),
  nationalImage: mixed().required(),
  password: string().required().min(8),
  passwordConfirmation: string()
    .oneOf([ref("password"), null] as any)
    .required(),
  terms: number().oneOf([0, 1]).required(),
});

const useSignup = () => {
  const { control, watch, handleSubmit } = useForm<ISignUpFormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isLoading, serverRequest } = useApi();

  const router = useRouter();

  const onSubmit = async (formValues: ISignUpFormType) => {
    console.log(formValues?.nationalImage);
    const formattedBody = genrateFormData({
      full_name: formValues?.fullName,
      email: formValues?.email,
      national_image: formValues?.nationalImage,
      password: formValues?.password,
      password_confirmation: formValues?.passwordConfirmation,
      terms: formValues?.terms,
    });

    const { data } = await serverRequest({
      endpoint: "/register",
      method: "POST",
      body: formattedBody as any,
    });
    if (data) {
      observer.fire("notify", {
        type: "success",
        message: data?.message,
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

  return { control, submit: handleSubmit(onSubmit), isLoading, watch };
};

export default useSignup;
