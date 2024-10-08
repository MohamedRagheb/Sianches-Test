// Types
import type { IButtonProps } from "./types";

// Utils
import { cn } from "@/Utils/cn";

// Assets
import { AiOutlineLoading } from "react-icons/ai";

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-black-500 h-14 w-full hover:opacity-90 transition-opacity duration-150",
        !!className && className,
      )}
      {...props}
    >
      {!isLoading ? (
        children
      ) : (
        <AiOutlineLoading size={20} className="animate-spin m-auto" />
      )}
    </button>
  );
};

export default Button;
