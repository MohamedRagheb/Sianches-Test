// Components
import SubscribeForNewSletter from "./SubscribeForNewSletter";
import FooterMainSection from "./FooterMainSection";

// Hooks
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const tHome = await getTranslations("home");
  return (
    <div className="bg-[#F3F3F1] flex flex-col lg:px-40 md:px-20 px-10">
      <SubscribeForNewSletter />
      <FooterMainSection />
      <div className="flex justify-center items-center pt-6 pb-[15px]">
        {tHome("all_rights_reserved")}
      </div>
    </div>
  );
}
