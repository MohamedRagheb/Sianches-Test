"use client";

// Assets
import { TbWorld } from "react-icons/tb";

// Hooks
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
  const { lang } = useParams();

  return (
    <div className="flex gap-1 text-white cursor-pointer items-center me-[17px]">
      <TbWorld size={24} /> <p>{lang.toString()}</p>
    </div>
  );
}
