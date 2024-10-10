// Types
import type { Metadata } from "next";

// Components
import Link from "next/link";
import Image from "next/image";
import SignupForm from "@/componets/Pages/SignupForm";

// Assets
import LogoIcon from "/public/icons/logoicon.svg";

// Hooks
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Signup",
};

export default async function Signup() {
  const t = await getTranslations("signup");
  return (
    <div className="w-full flex flex-col gap-16 items-center">
      <SignupForm />
      <span>
        {t.rich("i_have_account", {
          loginLink: (chunks) => (
            <Link href="/auth/login" className="inline-block">
              <p className="font-bold">{chunks}</p>
            </Link>
          ),
        })}
      </span>
    </div>
  );
}
