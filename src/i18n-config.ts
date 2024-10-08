// Next Fnctions
import { notFound } from "next/navigation";

// Next-Intl
import { getRequestConfig } from "next-intl/server";

// Environment
import { DefaultLocale, Locales } from "@/Utils/enviroment";

export const i18n = {
  defaultLocale: DefaultLocale,
  locales: Locales,
} as const;

export default getRequestConfig(async ({ locale }) => {
  if (!i18n.locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});

export type Locale = (typeof i18n)["locales"][number];
