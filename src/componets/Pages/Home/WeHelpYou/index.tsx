// Components
import Image from "next/image";
import Button from "@/componets/ui/Button";

// Hooks
import { getTranslations } from "next-intl/server";

// Assets
import { GoArrowUpRight } from "react-icons/go";

// React
import React, { memo } from "react";

type TIcon = {
  text: string;
  icon: string;
};
interface IWeHelpYouProps {
  main: { title: string; content: string; image: string };
  icons: {
    icon_1: TIcon;
    icon_2: TIcon;
    icon_3: TIcon;
    icon_4: TIcon;
  };
}

export default async function WeHelpYou({ main, icons }: IWeHelpYouProps) {
  const tHome = await getTranslations("home");
  return (
    <section className="flex flex-col gap-14 items-center  md:px-[120px] px-[40px] w-full">
      {/* main */}
      <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center gap-16 lg:h-[680px]">
        <Image
          src={main.image}
          width={200}
          height={100}
          alt={`main-image-${main.title}}`}
          className="lg:h-full lg:w-1/2 w-full"
        />
        <div className="flex flex-col gap-10">
          <span className="flex flex-col gap-[22px]">
            <h4 className="font-black text-4xl text-black-500">{main.title}</h4>
            <p>{main.content}</p>
          </span>
          <Button className="lg:w-[176px] w-full  flex items-center justify-center gap-2 text-white">
            {tHome("read_more")}
            <GoArrowUpRight size={12} />
          </Button>
        </div>
      </div>
      {/* icons */}
      <div className="flex md:flex-row  flex-wrap justify-evenly gap-10 ">
        <Icon iconData={icons.icon_1} />
        <Icon iconData={icons.icon_2} />
        <Icon iconData={icons.icon_3} />
        <Icon iconData={icons.icon_4} />
      </div>
    </section>
  );
}

const Icon = memo(({ iconData }: { iconData: TIcon }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 text-center ">
      <Image
        src={iconData.icon}
        alt={iconData.text}
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <p>{iconData.text}</p>
    </div>
  );
});
