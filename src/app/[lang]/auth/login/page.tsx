// Types
import type { Metadata } from "next";

// Components
import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/componets/Pages/LoginForm";

// Assets
import LogoIcon from "/public/icons/logoicon.svg";

// Hooks
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Login() {
  const t = await getTranslations("login");
  return (
    <div className="flex items-center flex-col gap-[4.5rem]">
      <Image src={LogoIcon.src} alt={"logo-icon"} height={67} width={225} />
      <div className="w-full flex flex-col gap-16 items-center">
        <LoginForm />
        <span>
          {t.rich("dont_have_account", {
            signInLink: (chunks) => (
              <Link href="/auth/signup" className="inline-block">
                <p className="font-bold">{chunks}</p>
              </Link>
            ),
          })}
        </span>
      </div>
    </div>
  );
}
