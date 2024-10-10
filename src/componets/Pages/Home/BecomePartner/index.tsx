// Hooks
import { getTranslations } from "next-intl/server";

// Components
import Image from "next/image";
import Button from "@/componets/ui/Button";

// Assets
import { GoArrowUpRight } from "react-icons/go";
import KeysImage from "/public/images/Keys.png";

export default async function BecomePartner() {
  const tHome = await getTranslations("home");

  return (
    <section className="relative flex md:flex-row flex-col  md:px-[120px] px-[40px]  bg-[#F8F8F7]  items-center  justify-evenly h-[310px]">
      <Image
        src={KeysImage.src}
        alt="property"
        height={351}
        width={500}
        className="h-[351px] md:max-w-[250px] lg:max-w-none left-0"
      />
      <div className="flex flex-col gap-5">
        <h5 className="font-black text-[32px]">{tHome("become_partner")}</h5>
        <Button className="lg:w-[176px] w-full flex items-center justify-center gap-2 text-white">
          {tHome("register_now")}
          <GoArrowUpRight size={12} />
        </Button>
      </div>
    </section>
  );
}
