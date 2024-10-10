// Hooks
import { getTranslations } from "next-intl/server";

// Assets
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import PropertyWithHand from "/public/images/PropertyWithHand.png";

// Components
import Image from "next/image";

export interface IContactUsInfo {
  phone: string;
  email: string;
}
export default async function ContactUsInfo({ phone, email }: IContactUsInfo) {
  const tHome = await getTranslations("home");

  return (
    <div className="flex flex-col gap-24 mt-[64px]">
      <div className="flex flex-col gap-14">
        <h5 className="font-black text-[32px] ">
          {tHome("we_will_help_you_to_find")}
        </h5>
        <span className="flex flex-col gap-8">
          <div className="flex  gap-4">
            <FiPhoneCall size={24} />
            <span className="flex flex-col">
              <p>{tHome("phone")}</p>
              <p>{phone}</p>
            </span>
          </div>
          <div className="flex gap-4">
            <MdOutlineEmail size={24} />
            <span className="flex flex-col">
              <p>{tHome("email")}</p>
              <p>{email}</p>
            </span>
          </div>
        </span>
      </div>
      <Image
        src={PropertyWithHand.src}
        alt={"hands-with-property "}
        width={595}
        height={412}
        objectFit={"cover"}
        className="md:mx-[-120px] mx-[-40px] h-[412px] w-[595px]"
      />
    </div>
  );
}
