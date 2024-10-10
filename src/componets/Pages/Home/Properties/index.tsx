"use client";

// Hooks
import { useTranslations } from "next-intl";

// Components
import Image from "next/image";

// Assets
import { IoArrowDown } from "react-icons/io5";

interface IPropertiesProps {
  properties: { id: number; image: string; name: string }[];
}
export default function Properties({ properties }: IPropertiesProps) {
  const tHome = useTranslations("home");

  let defaultTransform = 0;

  function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }

  function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
      defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }
  return (
    <section className="flex flex-col text-center justify-center items-center">
      <h5 className="font-black text-[32px]">{tHome("properties")}</h5>
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
              id="slider"
              className="h-full flex lg:gap-8 md:gap-6 gap-[30px] items-center justify-center transition ease-out duration-700"
            >
              {properties.map(({ id, image, name }) => (
                <div
                  key={id}
                  className="flex flex-col flex-shrink-0 relative w-full sm:w-auto"
                >
                  <Image
                    src={image}
                    alt={name}
                    objectFit="cover"
                    width={370}
                    height={270}
                    className="h-[270px] w-[370px]"
                  />
                  <div className="w-full p-6 flex justify-between">
                    <h6 className="text-xl">{name}</h6>
                    <IoArrowDown />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
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
