"use client";

// Hooks
import { useState } from "react";

// Assets
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

// Utils
import { cn } from "@/Utils/cn";
import Links from "./links";
import LocaleSwitcher from "./LocaleSwitcher";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="lg:hidden block">
      <CiMenuBurger
        size={24}
        className="cursor-pointer text-white"
        onClick={() => setIsOpen(true)}
      />
      <div
        className={cn(
          "fixed flex flex-col justify-center items-center bg-gray-700/80 gap-8 text-center overflow-y-auto duration-300 h-dvh top-0 left-0 text-lg !w-full",
          !isOpen && "max-h-0 hidden",
        )}
      >
        <IoClose
          size={24}
          className="absolute top-8 right-10 cursor-pointer text-white"
          onClick={() => setIsOpen(false)}
        />
        <Links />
        <LocaleSwitcher />
      </div>
    </div>
  );
}
