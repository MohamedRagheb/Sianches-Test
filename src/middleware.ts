import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";
import createIntlMiddleware from "next-intl/middleware";

const handleI18nRouting = createIntlMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
});

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = handleI18nRouting(request);

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  const locale = i18n.defaultLocale;

  let redirectTo;

  if (redirectTo) {
    const newResponse = NextResponse.redirect(
      new URL(
        !!pathnameHasLocale ? redirectTo : `${locale}${redirectTo}`,
        request.url,
      ),
    );

    newResponse.headers.set("x-pathname", pathname);
    return newResponse;
  }

  if (!pathnameHasLocale) {
    const newUrl = new URL(
      `/${locale}${pathname}${request.nextUrl.search}`,
      request.url,
    );

    return NextResponse.redirect(newUrl);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
