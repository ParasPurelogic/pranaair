import { NextResponse } from "next/server"
import { languages, fallbackLng } from "./i18n/settings";

export function middleware(request) {
  // URL
  const { pathname, origin } = request.nextUrl;
  let fullURL = request.nextUrl;

  // pathSegments
  const pathSegments = pathname?.split?.("/")?.filter((d) => d);

  // Return 404 if accessed /en
  if (pathSegments?.includes(fallbackLng)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Extract locale from the pathname
  const locale = pathSegments.find(segment => languages.includes(segment));

  // Handle locale redirection if missing
  const response = locale
    ? NextResponse.next()
    : NextResponse.rewrite(
      `${origin}/${fallbackLng}${pathname}${fullURL.search}`);


  // Set locale cookies
  response.cookies.set("i18next", locale || fallbackLng);
  response.headers.set("i18next", locale || fallbackLng);

  console.log({ pathname, pathSegments, locale })

  // Return result
  return response



  // Rewrite the root path to /en
  // if (pathname === "/") {
  //   return NextResponse.rewrite(new URL("/en", request.url))
  // }

  // // Check if the pathname starts with a supported language
  // const pathnameHasLanguage = supportedLanguages.some(
  //   (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  // )

  // // Get the language from cookie or Accept-Language header
  // let language = "en"
  // if (request.cookies.has("i18next")) {
  //   language = request.cookies.get("i18next").value
  // } else {
  //   const acceptLanguage = request.headers.get("accept-language")
  //   if (acceptLanguage && acceptLanguage.includes("hi")) {
  //     language = "hi"
  //   }
  // }

  // // Rewrite other paths if missing language
  // if (!pathnameHasLanguage) {
  //   return NextResponse.rewrite(new URL(`/${language}${pathname}`, request.url))
  // }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
