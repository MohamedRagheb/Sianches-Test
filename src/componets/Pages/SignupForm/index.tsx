"use client";

// Assets
import { FaRegIdCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GoArrowUpRight, GoKey } from "react-icons/go";

// Components
import Button from "@/componets/ui/Button";
import Input from "@/componets/ui/Feilds/Input";
import PasswordInput from "@/componets/ui/Feilds/Input/PasswordInput";

// Hooks
import { useTranslations } from "next-intl";

// Container
import useSignup from "./useSignup";
import Checkbox from "@/componets/ui/Feilds/Checkbox";
import Link from "next/link";
import ImageUpload from "@/componets/ui/Feilds/ImageUpload";

export default function SignupForm() {
  const tSignup = useTranslations("signup");
  const { control, submit, isLoading, watch } = useSignup();
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
        <ImageUpload
          control={control}
          name="nationalImage"
          label="national_image"
          placeholder="national_image_placeholder"
          labelIcon={<FaRegIdCard />}
        />
        <Checkbox
          control={control}
          name="terms"
          label={
            tSignup.rich("agree_with_terms_and_conditions", {
              termsAndConditionsLink: (chunk) => (
                <Link className="text-black-500 font-bold inline" href="/">
                  {chunk}
                </Link>
              ),
            }) as any
          }
        />
      </div>
      <Button
        isDisabled={!watch("terms")}
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
