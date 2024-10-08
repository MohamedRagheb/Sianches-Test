import type { ComponentProps, PropsWithChildren } from "react";

export interface IButtonProps
  extends PropsWithChildren<ComponentProps<"button">> {
  isLoading?: boolean;
}
