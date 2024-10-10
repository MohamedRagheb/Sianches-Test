"use client";

// Hooks
import { useTranslations } from "next-intl";

// Inputs
import Input from "@/componets/ui/Feilds/Input";

// Container
import useSubscribeToNewSeltter from "./useSubscribeToNewSeltter";
import Button from "@/componets/ui/Button";

export default function SubscribeForNewSletter() {
  const tHome = useTranslations("home");
  const { control, isLoading, submit } = useSubscribeToNewSeltter();
  return (
    <div className="flex lg:flex-row flex-col py-16 lg:gap-0 gap-4 ">
      <span className="flex flex-col gap-2 lg:w-1/2">
        <h5 className="font-black text-[32px]">
          {tHome("subscribe_to_new_sletter")}
        </h5>
        <p className="text-lg">{tHome("sign_up_to_receive_the_latest_news")}</p>
      </span>
      <div className="flex items-end lg:w-1/2">
        <Input
          control={control}
          type="email"
          name="email"
          placeholder="username_placeholder"
          className="lg:w-[550px] h-[72px]"
        />
        <Button
          isLoading={isLoading}
          onClick={() => submit()}
          className="text-white w-[155px] h-[72px]"
        >
          {tHome("subscribe")}
        </Button>
      </div>
    </div>
  );
}
