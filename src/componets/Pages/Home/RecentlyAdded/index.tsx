"use client";
// Components
import Image from "next/image";

// Assets
import { FaHouse } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { RiHomeOfficeFill } from "react-icons/ri";

// Hooks
import { useTranslations } from "next-intl";

type TRecentlyAddedItem = {
  id: number;
  title: string;
  image: string;
  slug: string;
  address: string;
  type: string;
  price: number;
  monthly: number;
  is_favorite: boolean;
  is_sold: boolean;
};

interface IRecentlyAddedProps {
  recentlyAddedItems: TRecentlyAddedItem[];
}

export default function RecentlyAdded({
  recentlyAddedItems,
}: IRecentlyAddedProps) {
  const tHome = useTranslations("home");

  let defaultTransform = 0;

  function goPrev() {
    var slider = document.getElementById("recently_add_slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }

  function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("recently_add_slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
      defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }

  return (
    <section className="flex flex-col text-center justify-center items-center">
      <h5 className="font-black text-[32px]">{tHome("recently_add")}</h5>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        <div className="w-full relative flex items-center justify-center">
          <button
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            onClick={() => goPrev()}
          >
            <svg
              className="dark:text-gray-900"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div
              id="recently_add_slider"
              className="h-full flex lg:gap-8 md:gap-6 gap-[30px] transition ease-out duration-700"
            >
              {recentlyAddedItems.map((item) => (
                <Item key={item.slug} {...item} />
              ))}
            </div>
          </div>
          <button
            aria-label="slide forward"
            className="absolute z-30  right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            onClick={() => goNext()}
          >
            <svg
              className="dark:text-gray-900"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

const Item: React.FC<TRecentlyAddedItem> = ({
  slug,
  image,
  type,
  address,
  title,
  price,
  monthly,
}) => {
  const typeIcon = {
    office: <RiHomeOfficeFill size={12} />,
    apartment: <FaHouse size={12} />,
  };

  return (
    <div className="flex flex-col flex-shrink-0 relative max:w-[308px]">
      <div className="relative">
        <Image
          src={image}
          alt={slug}
          height={370}
          width={308}
          className="h-[307px] w-[308px]"
        />
        <p className="absolute bottom-4 right-4 bg-[#FBFBFD] p-[6px] text-xs font-bold capitalize  flex gap-1">
          {typeIcon[type]} {type}
        </p>
      </div>
      <div className="flex flex-col items-start px-6 py-5">
        <span className="flex flex-col gap-3">
          <h6 className="text-xl !font-normal">{title}</h6>
          <p className="text-gray-400 flex gap-1">
            <IoIosPin />
            {address}
          </p>
        </span>
        <div className="border-t-[1px] border-gary-500 py-4 w-full flex justify-between">
          <span className="flex flex-col  items-start">
            <p className="font-bold text-base">{price}</p>
            <p className="text-xs text-gray-400">{monthly}</p>
          </span>
          <GoArrowUpRight size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
