"use client";

// Hooks
import { useTranslations } from "next-intl";

// Container
import useContactus from "./useContactus";

// Components
import Input from "@/componets/ui/Feilds/Input";
import Button from "@/componets/ui/Button";
import { GoArrowUpRight } from "react-icons/go";

export default function ContactusForm() {
  const tHome = useTranslations("home");
  const { control, isLoading, submit } = useContactus();
  return (
    <div className="flex flex-col gap-8 lg:w-1/2 h-full md:p-12 p-5">
      <span className="flex flex-col gap-1">
        <h6 className="font-black text-[32px]">{tHome("Contact-us")}</h6>
        <p>{tHome("we_will_response_as_soon")}</p>
      </span>
      <div className="flex flex-col gap-6">
        <Input
          control={control}
          name="name"
          label="name"
          placeholder="full_name_placeholder"
        />
        <Input
          control={control}
          type="email"
          name="email"
          label="username"
          placeholder="username_placeholder"
        />
        <Input
          control={control}
          type="number"
          name="phone"
          label="phone"
          placeholder="phone_placeholder"
        />
        <Input
          control={control}
          name="message"
          label="message"
          placeholder="message_placeholder"
        />
        <Button
          isLoading={isLoading}
          onClick={() => submit()}
          className="lg:w-[176px] w-full flex items-center justify-center gap-2 text-white self-end"
        >
          {tHome("send_message")}
          <GoArrowUpRight size={12} />
        </Button>
      </div>
    </div>
  );
}
