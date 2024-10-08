"use client";

// Assets
import { MdOutlineEmail } from "react-icons/md";
import { GoArrowUpRight, GoKey } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

// Components
import Button from "@/componets/ui/Button";
import Input from "@/componets/ui/Feilds/Input";
import PasswordInput from "@/componets/ui/Feilds/Input/PasswordInput";

// Hooks
import { useTranslations } from "next-intl";

// Container
import useSignup from "./useSignup";

export default function SignupForm() {
  const tSignup = useTranslations("signup");
  const { control, submit, isLoading } = useSignup();
  return (
    <div className="space-y-14 w-full">
      <div className="flex flex-col gap-8 ">
        <Input
          control={control}
          name="fullName"
          label="name"
          placeholder="full_name_placeholder"
          labelIcon={<IoPersonOutline />}
        />
        <Input
          control={control}
          name="email"
          label="username"
          placeholder="username_placeholder"
          labelIcon={<MdOutlineEmail />}
        />
        <PasswordInput
          type="password"
          control={control}
          name="password"
          label="password"
          placeholder="password_placeholder"
          labelIcon={<GoKey />}
        />
        <PasswordInput
          type="password"
          control={control}
          name="passwordConfirmation"
          label="password_confirmation"
          placeholder="password_confirmation_placeholder"
          labelIcon={<GoKey />}
        />
      </div>
      <Button
        isLoading={isLoading}
        onClick={() => submit()}
        className="flex justify-center items-center gap-2 text-white "
      >
        <p className="font-bold">{tSignup("create_account")}</p>
        <GoArrowUpRight size={12} />
      </Button>
    </div>
  );
}
