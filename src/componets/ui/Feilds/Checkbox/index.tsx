"use client";

// React
import { type ComponentProps, memo, ReactElement } from "react";

// React Hook Form
import { Controller, type Path } from "react-hook-form";

// Utils
import { cn } from "@/Utils/cn";

interface ICheckboxProps extends ComponentProps<"input"> {
  control: any;
  label: string | ReactElement | undefined;
  name: Path<any>;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  name,
  control,
  className,
  label,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            value={0}
            {...props}
            className={cn(
              " h-4 w-4 rounded-[8px] accent-black-500",
              !!className && className,
            )}
            {...field}
            onChange={(e) => field.onChange(e?.target?.checked ? 1 : 0)}
          />
          <p className="text-gray-400">{label}</p>
        </div>
      )}
    />
  );
};

export default memo(Checkbox);
