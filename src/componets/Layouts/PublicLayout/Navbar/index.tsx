// Assets
import LogoText from "/public/icons/logoText.svg";
import { CiHeart } from "react-icons/ci";

// Components
import Links from "./links";
import Link from "next/link";
import Image from "next/image";
import Button from "@/componets/ui/Button";
import LocaleSwitcher from "./LocaleSwitcher";

// Hooks
import { getTranslations } from "next-intl/server";
import { GoArrowUpRight } from "react-icons/go";

export default async function Navbar() {
  const tHome = await getTranslations("home");

  return (
    <div className="w-full bg-transparent py-8 px-40 flex justify-between content-center items-center absolute z-20">
      <Image
        src={LogoText.src}
        alt={"logo"}
        height={40}
        width={266}
        className="w-[266px]"
      />
      <div className="lg:flex gap-5 items-center  hidden">
        <Links />
        <div className="flex divide-x divide-gray-500 ">
          <LocaleSwitcher />
          <Link href={"/favorites"} className="text-white inline ps-[17px] ">
            <CiHeart size={31} />
          </Link>
        </div>
        <Button className="flex justify-evenly items-center bg-[#F8F8F7] w-[218px]">
          {tHome("Become_an_ambassador")}
          <GoArrowUpRight size={20} />
        </Button>
      </div>
    </div>
  );
}
