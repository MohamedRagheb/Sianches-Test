// Environments
import { BASE_URL } from "@/Utils/enviroment";

// Components
import Link from "next/link";
import Image from "next/image";

// Hooks
import { getTranslations } from "next-intl/server";

export default async function FooterMainSection() {
  const footerDataReq = await fetch(BASE_URL + "/footer");
  const { data } = await footerDataReq.json();

  const tHome = await getTranslations("home");

  return (
    <div className="py-16 flex flex-row justify-between flex-wrap border-y-[1px] border-y-[#3E453E] gap-4">
      <div className="flex flex-col gap-8">
        <span className="flex flex-col gap-4">
          <Image src={data?.logo} alt={"logo"} height={50} width={200} />
          <p>{data?.short_description}</p>
        </span>
        <span className="flex gap-4">
          <p className="text-gray-400">{tHome("follow_us")}</p>
          {data?.socials.length > 0 &&
            data?.socials.map((link, index) => (
              <Link href={link.link} className="text-black-500">
                <Image
                  src={link.icon}
                  alt={link.link}
                  height={20}
                  width={20}
                  className="h-5 w-5"
                />
              </Link>
            ))}
        </span>
      </div>
      <span className="flex lg:justify-between justify-start gap-8 lg:w-1/3 w-full">
        <div className="flex flex-col gap-7">
          <p>{tHome("main_links")}</p>
          <span className="flex flex-col gap-5">
            {["home", "our-projects", "services", "Contact-us"].map((ele) => (
              <Link href={`/${ele}`} key={ele}>
                {tHome(ele)}
              </Link>
            ))}
          </span>
        </div>
        <div className="flex flex-col gap-7">
          <p>{tHome("quick_links")}</p>
          <span className="flex flex-col gap-5">
            {["privacy-policy", "terms-of-use"].map((ele) => (
              <Link href={`/${ele}`} key={ele}>
                {tHome(ele)}
              </Link>
            ))}
          </span>
        </div>
      </span>
    </div>
  );
}
