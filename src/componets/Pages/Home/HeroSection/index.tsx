// Components
import Button from "@/componets/ui/Button";

// React
import { memo } from "react";
import { getTranslations } from "next-intl/server";
import { GoArrowUpRight } from "react-icons/go";

type TSlider = {
  id: number;
  image: string;
  ordering: number;
  title: string;
  alt: string;
};
interface IHeroSectionProps {
  sliders: TSlider[];
}

const HeroSection = async ({ sliders }: IHeroSectionProps) => {
  const slider = sliders[0];

  const tHome = await getTranslations("home");
  return (
    <section
      style={{ backgroundImage: `url(${slider.image})` }}
      id="/"
      className=" h-screen w-full relative top-0 z-10 flex items-center justify-center text-center"
    >
      <div className="flex flex-col gap-12 items-center text-center ">
        <h3 className="text-7xl font-black text-white max-w-[870px] italic text-center !leading-[90px]">
          {slider.title}
        </h3>
        <Button className="w-[236px] bg-[#F8F8F7] flex items-center justify-center gap-2">
          {tHome("explore_properties")}
          <GoArrowUpRight size={12} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
