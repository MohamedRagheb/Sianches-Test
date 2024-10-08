"use client";

// Third parties
import { Toaster, toast } from "sonner";

// Utils
import { observer } from "@/Utils/observer";

export interface IToast {
  message: string;
  description?: string;
  icon?: React.ReactNode;
  type: "error" | "success" | "message" | "warning" | "info";
}

export default function ToastComponent() {
  //TODO:integrate_isRTL_With_I118n_Current_Locale
  const isRtl = false;
  const notify = ({
    message,
    description,
    type = "info",
    icon,
    ...rest
  }: IToast) =>
    toast[type](message, {
      icon,
      duration: 5000,
      description: description,
      ...rest,
    });

  observer.subscribe("notify", notify);

  return (
    <Toaster
      closeButton
      richColors
      position={isRtl ? "top-left" : "top-right"}
      toastOptions={{
        className: "bg-red-300",
        classNames: {
          closeButton: "bg-transparent dark:hover:bg-gray-200/20",
        },
      }}
    />
  );
}
