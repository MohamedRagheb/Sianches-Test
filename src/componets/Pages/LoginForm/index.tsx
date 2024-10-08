"use client";

// Components
import Link from "next/link";
import Button from "@/componets/ui/Button";
import Input from "@/componets/ui/Feilds/Input";
import PasswordInput from "@/componets/ui/Feilds/Input/PasswordInput";

// Containers
import useLogin from "./useLogin";

// Assets
import { GoKey } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

// Hooks
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const tLogin = useTranslations("login");
  const { control, submit, isLoading } = useLogin();

  return (
    <div className="space-y-14 w-full">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-8 ">
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
        </div>
        <Link href={"/forget-password"}>{tLogin("forget_password")}</Link>
      </div>
      <Button
        isLoading={isLoading}
        onClick={() => submit()}
        className="flex justify-center items-center gap-2 text-white "
      >
        <p className="font-bold">{tLogin("login")}</p>
        <GoArrowUpRight size={12} />
      </Button>
    </div>
  );
}
