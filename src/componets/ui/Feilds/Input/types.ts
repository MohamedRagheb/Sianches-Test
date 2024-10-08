// Types
import type { ComponentProps, ReactNode } from "react";

export interface IInputProps extends ComponentProps<"input"> {
  control: any;
  name: string;
  label: string;
  labelIcon?: ReactNode;
  endSuffix?: ReactNode;
}
