// Types
import type { ISignUpFormType } from "./types";

// React Hook Form
import { useForm } from "react-hook-form";

// Yup
import { mixed, number, object, type ObjectSchema, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Custom Hooks
import useApi from "@/Hooks/useApi";

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
  password: string().min(8).required(),
  passwordConfirmation: string()
    .oneOf([ref("password"), null] as any)
    .required(),
  terms: number().oneOf([0, 1]).required(),
});

const useSignup = () => {
  const { control, handleSubmit } = useForm<ISignUpFormType>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isLoading } = useApi();

  const onSubmit = async (formValues: ISignUpFormType) => {
    console.log(formValues);
  };

  return { control, submit: handleSubmit(onSubmit), isLoading };
};

export default useSignup;
