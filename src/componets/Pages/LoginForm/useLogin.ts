// React Hook Form
import { useForm } from "react-hook-form";

// Types
import type { ILoginFomType } from "./types";

// Yup
import { object, type ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Custom Hooks
import useApi from "@/Hooks/useApi";

// Utils
import genrateFormData from "@/Utils/formDataGenrator";

// Next
import { useRouter } from "next/navigation";

const defaultValues: ILoginFomType = {
  email: "",
  password: "",
};

// Schema
const LoginFormSchema: ObjectSchema<ILoginFomType> = object({
  email: string().email().required(),
  password: string().required().min(6),
});

export default function useLogin() {
  const { control, handleSubmit } = useForm<ILoginFomType>({
    defaultValues,
    resolver: yupResolver(LoginFormSchema),
  });

  const { isLoading, serverRequest } = useApi();

  const router = useRouter();

  const onSubmit = async (body: ILoginFomType) => {
    const generatedFormData = genrateFormData(body);

    const { data } = await serverRequest({
      endpoint: "/login",
      body: generatedFormData as any,
      method: "POST",
    });

    if (data) router.push("/");
  };

  return {
    control,
    submit: handleSubmit(onSubmit),
    isLoading,
  };
}
