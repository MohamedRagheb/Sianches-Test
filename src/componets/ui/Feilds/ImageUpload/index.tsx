"use client";

// Types
import type { IImageUploadProps } from "./types";

// React Hook Form
import { Controller } from "react-hook-form";

// Utils
import { cn } from "@/Utils/cn";

// Hooks
import { useTranslations } from "next-intl";

// React
import { memo, useRef, useState, type ChangeEvent } from "react";
import Image from "next/image";

const ImageUpload: React.FC<IImageUploadProps> = ({
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

  const ImageInputRef = useRef<HTMLInputElement | null>(null);

  const [currentImageLink, setCurrentImageLink] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (...event: any[]) => void,
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setCurrentImageLink(imageUrl);
      onChange(file);
    }
  };

  return (
    <div className="space-y-2">
      <span className="flex items-center gap-2">
        {!!labelIcon && labelIcon} <p>{tLabel(label)}</p>
      </span>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState, formState }) => (
          <div
            onClick={() => ImageInputRef?.current?.click()}
            className={cn(
              "w-full h-fit outline-0 bg-gray-50 relative space-y-1",
              !!fieldState?.error && "border border-red-400",
              !!className && className,
            )}
            aria-invalid={fieldState?.invalid}
          >
            {!!currentImageLink ? (
              <Image
                src={currentImageLink}
                alt={"image"}
                height={120}
                width={100}
                className="w-full  max-h-[300px]"
              />
            ) : (
              <p className="p-5 text-center text-gray-400  text-sm border border-dotted border-black-500">
                {tLabel(placeholder)}
              </p>
            )}
            <input
              hidden
              accept="images/*"
              {...props}
              type="file"
              {...field}
              value=""
              ref={ImageInputRef}
              onChange={(e) => {
                handleChange(e, field.onChange);
              }}
            />
            {!!endSuffix && endSuffix}
          </div>
        )}
      />
    </div>
  );
};

export default memo(ImageUpload);
