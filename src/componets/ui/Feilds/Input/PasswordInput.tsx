"use client";

// Types
import { IInputProps } from "./types";

// Components
import Input from "./index";

// Assets
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

// Hooks
import { useState } from "react";

const PasswordInput: React.FC<IInputProps> = ({ ...props }) => {
  const [isPlain, setIsPlain] = useState(props.type !== "password");

  const iconProps = {
    className: "absolute right-5 top-5",
    size: 20,
    onClick: () => setIsPlain((prevState) => !prevState),
  };
  const icon = isPlain ? (
    <IoEyeOffOutline {...iconProps} />
  ) : (
    <IoEyeOutline {...iconProps} />
  );
  return (
    <Input {...props} type={isPlain ? "text" : "password"} endSuffix={icon} />
  );
};

export default PasswordInput;
