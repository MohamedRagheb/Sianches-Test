// Hooks
import { getTranslations } from "next-intl/server";

// Components
import Image from "next/image";
import Button from "@/componets/ui/Button";

// Assets
import { GoArrowUpRight } from "react-icons/go";
import PropertyImage from "/public/images/property.png";

export default async function SellYourProperty() {
  const tHome = await getTranslations("home");

  return (
    <section className="relative flex md:flex-row flex-col-reverse  md:px-[120px] px-[40px]  bg-[#F8F8F7] gap-[34px] items-center  justify-center h-[310px]">
      <div className="flex flex-col gap-5">
        <h5 className="font-black text-[32px]">
          {tHome("sell_your_property_with_us")}
        </h5>
        <Button className="lg:w-[176px] w-full flex items-center justify-center gap-2 text-white">
          {tHome("sell_your_property")}
          <GoArrowUpRight size={12} />
        </Button>
      </div>
      <Image
        src={PropertyImage.src}
        alt="property"
        height={408}
        width={656}
        className=" h-[408px] right-0 lg:max-w-none md:max-w-[250px]"
      />
    </section>
  );
}
