import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function OurPartner({
  partnersData,
}: {
  partnersData: { logo: string; link: string }[];
}) {
  const tHome = await getTranslations("home");

  return (
    <div className="flex flex-col text-center">
      <h5 className="font-black text-[32px]">{tHome("our-partners")}</h5>
      <div className="md:px-[120px] px-[40px] flex justify-between flex-wrap">
        {partnersData.map((ele, index) => (
          <Link href={ele.link}>
            <Image
              src={ele.logo}
              alt={`ele-${ele.link}`}
              height={100}
              width={100}
              className={"h-full w-[150px]"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
