// Types
import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";

// Global Styles
import "@/Styles/globals.css";

// Next-intl
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

// Components
import ToastComponent from "@/componets/Layouts/ToastComponent";

export const metadata: Metadata = {
  title: {
    template: "%s | Sianches",
    default: "Sianches",
  },
  description: "Sianches Project Generated With Mohamed Ragheb ",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          {children}
          <ToastComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
