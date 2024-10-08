"use client";

// Types
import type { FieldError } from "react-hook-form";
import type { ComponentProps } from "react";
import { cn } from "@/Utils/cn";

interface IFieldErrorProps extends ComponentProps<"p"> {
  error: FieldError;
}

const FieldError: React.FC<IFieldErrorProps> = ({
  error,
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(
        "text-red-400 text-xs font-medium ps-2",
        !!className && className,
      )}
      aria-label={error["message"]}
    >
      {error["message"]}
    </p>
  );
};

export default FieldError;
