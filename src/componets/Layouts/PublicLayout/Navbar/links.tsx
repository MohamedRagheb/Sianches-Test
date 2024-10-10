"use client";

// Components
import Link from "next/link";

// Hooks
import { useTranslations } from "next-intl";

export default function Links() {
  const links = [
    "home",
    "about-us",
    "services",
    "properties",
    "our-partners",
    "Contact-us",
  ];

  const t = useTranslations("home");

  return (
    <div className="flex lg:flex-row flex-col gap-6">
      {links.map((link, index) => (
        <Link
          className="text-white font-normal text-base"
          key={index}
          href={`/${link}`}
        >
          {t(link)}
        </Link>
      ))}
    </div>
  );
}
