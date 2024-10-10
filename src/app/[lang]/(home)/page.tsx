// Environments
import { BASE_URL } from "@/Utils/enviroment";

// Components
import ContactUs from "@/componets/Pages/Home/ContactUs";
import WeHelpYou from "@/componets/Pages/Home/WeHelpYou";
import Properties from "@/componets/Pages/Home/Properties";
import HeroSection from "@/componets/Pages/Home/HeroSection";
import BecomePartner from "@/componets/Pages/Home/BecomePartner";
import RecentlyAdded from "@/componets/Pages/Home/RecentlyAdded";
import SellYourProperty from "@/componets/Pages/Home/SellYourProperty";
import OurPartner from "@/componets/Pages/Home/OurPartner";

export default async function Home() {
  const pageDataReq = await fetch(BASE_URL + "/home");
  const { data } = await pageDataReq.json();

  console.log(data);
  return (
    <div className="flex flex-col gap-[120px]">
      <HeroSection sliders={data.sliders} />
      <WeHelpYou {...data.we_help_you} />
      <Properties properties={data.properties} />
      <SellYourProperty />
      <RecentlyAdded recentlyAddedItems={data.recently_added} />
      <BecomePartner />
      <OurPartner partnersData={data.partners} />
      <ContactUs {...data.contact_info} />
    </div>
  );
}
