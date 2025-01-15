import NextAuth from "next-auth";
/* 
import { i18nRouter } from "next-i18n-router"; */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

 
function getLocale(request: NextRequest): string | undefined {
 /*  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale; */
  const defaultLocale = 'fr';
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const matchedLocale = i18n.locales.find((locale) =>
      acceptLanguage.includes(locale),
    );
    return matchedLocale || defaultLocale;
  }
  return defaultLocale;
}

const { auth } = NextAuth(authConfig);

export default auth((request) => {
  const pathname = request.nextUrl.pathname;
  const { nextUrl } = request;
/*   const isLoggedIn = !!request.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Define paths that should be excluded from internationalization
  const excludedPaths = [
    '/api', 
    '/static', 
    '/_next', 
    '/favicon.ico', 
    '/dashboard', 
    '/site', 
    '/hub', 
    '/main', 
    '/404', 
    '/500', 
    "/auth",
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password", 
  ]; */

 /*   // Check if the pathname starts with any of the excluded paths
   const isExcludedPath = excludedPaths.some((path) => pathname.startsWith(path));

   // Skip internationalization for excluded paths
   if (isExcludedPath) {
    if (isApiAuthRoute) {
      return NextResponse.next();
    }

    if (isAuthRoute) {
      if (isLoggedIn) {
        const callbackUrl = nextUrl.searchParams.get('callbackUrl');
        if (callbackUrl) {
          const decodedUrl = decodeURIComponent(callbackUrl);
          return NextResponse.rewrite(new URL(decodedUrl, request.url));
        }
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
      }
      return NextResponse.next();
    }

    if (!isLoggedIn && !isPublicRoute) {
      let callbackUrl = nextUrl.pathname;
      if (nextUrl.search) {
        callbackUrl += nextUrl.search;
      }
  
      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, request.url));
    }
    
     return NextResponse.next();
   }
 */
    // Set Accept-Language header based on the NEXT_LOCALE cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE');
  if (localeCookie) {
    request.headers.set('Accept-Language', localeCookie);
  }


   // Check if there is any supported locale in the pathname
   const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
