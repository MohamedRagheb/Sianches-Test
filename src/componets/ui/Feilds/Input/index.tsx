"use client";

// Types
import type { IInputProps } from "./types";

// React Hook Form
import { Controller } from "react-hook-form";

// Utils
import { cn } from "@/Utils/cn";

// Hooks
import { useTranslations } from "next-intl";

// Components
import FieldError from "../FieldError";

const Input: React.FC<IInputProps> = ({
  name,
  label,
  control,
  placeholder,
  className,
  labelIcon,
  endSuffix,
  ...props
}) => {
  const tLabel = useTranslations("label");
  return (
    <div className="space-y-2">
      {!!label && (
        <span className="flex items-center gap-2">
          {!!labelIcon && labelIcon} <p>{tLabel(label)}</p>
        </span>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <div
            className="relative space-y-1"
            aria-invalid={fieldState?.invalid}
          >
            <input
              {...props}
              placeholder={tLabel(placeholder)}
              className={cn(
                "min-h-16 w-full px-5 outline-0 bg-gray-50",
                !!fieldState?.error && "border border-red-400",
                !!className && className,
              )}
              {...field}
            />
            {fieldState.invalid && fieldState.error?.type !== "required" && (
              <FieldError error={fieldState.error} />
            )}
            {!!endSuffix && endSuffix}
          </div>
        )}
      />
    </div>
  );
};

export default Input;
