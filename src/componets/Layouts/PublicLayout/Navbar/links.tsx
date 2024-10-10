// Components
import Link from "next/link";

// Hooks
import { getTranslations } from "next-intl/server";

// fonts
import {} from "next/font/google";

export default async function Links() {
  const links = [
    "home",
    "about-us",
    "services",
    "properties",
    "our-partners",
    "Contact-us",
  ];

  const t = await getTranslations("home");

  return (
    <div className="flex gap-6 ">
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
