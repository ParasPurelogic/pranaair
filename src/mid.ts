import { NextRequest, NextResponse } from 'next/server'
import { conventions, defaultLanguage, supportedLanguagesId, domainName, getCurrentTime, isInProduction } from '@/config/misc';
import { coordsRequiredRoutes, nonUserInfoRoutes } from '@/config/routes';
import { SupportedLanguage, TypeUserInfo } from '@/types/misc';
import decodeUserPayloadCookie from './utility/decodeUserPayloadCookie';
import getUserGeoDetailsViaIP from './utility/getUserGeoDetailsViaIP';

// Routes that require coordinates
const coordsRequiredRoutesSet = new Set(coordsRequiredRoutes);

export async function middleware(request: NextRequest) {
    // URL
    const { pathname, origin } = request.nextUrl;
    let fullURL = request.nextUrl;

    // Redirect to lowercase if pathname has uppercase
    if (/[A-Z]/.test(pathname)) {
        fullURL.pathname = pathname.toLowerCase();
        return NextResponse.redirect(fullURL, 308);
    }

    // pathSegments
    const pathSegments = pathname?.split?.("/")?.filter((d) => d);

    // ======================= REDIRECTIONs ===========================//
    // If "/blog"
    if (pathname == "/blog") {
        return NextResponse.redirect(`${fullURL.href}`?.replace("/blog", "/blog/"), 308);
    }
    // 404 if /en includes in url
    else if (pathSegments?.includes(defaultLanguage)) {
        return new NextResponse("Not Found", { status: 404 });
    }

    // If air-quality-monitor/sensible-monitor path
    else if (pathname?.endsWith?.("air-quality-monitor/sensible-monitor")) {
        return fetch(`${domainName}/media/pages/monitor/sensible-monitor.html`)
    }

    // If air-quality-monitor/squair-monitor path
    else if (pathname?.endsWith?.("air-quality-monitor/squair-monitor")) {
        return fetch(`${domainName}/media/pages/monitor/squair-monitor.html`)
    }


    // Extract locale from the pathname
    const locale = pathSegments.find(segment => supportedLanguagesId.has(segment as SupportedLanguage));

    // Handle locale redirection if missing
    const response = locale
        ? NextResponse.next()
        : NextResponse.rewrite(
            `${origin}/${defaultLanguage}${pathname}${fullURL.search}`
                .replace(`${defaultLanguage}/weather`, `weather/${defaultLanguage}`)
        );

    // Set locale cookies
    response.cookies.set(conventions.cookie.locale, locale || defaultLanguage);
    response.headers.set(conventions.header.locale, locale || defaultLanguage);
    response.headers.set(conventions.header.requestURL, fullURL.href);

    // If a non UserInfo Route
    if (nonUserInfoRoutes?.some?.(r => pathname?.includes?.(r.replace("/", "")))) {
        // Return response
        return response
    }

    // Remove locale from the path if it exists, ensuring no double slashes
    const path = (pathname?.split?.("/")?.filter(d => d) || [])?.pop() || "";

    // If path requires user lat/lon
    if (
        // For known required path
        coordsRequiredRoutesSet.has(`/${path}`) ||
        // For language specific home pages
        supportedLanguagesId.has(path as SupportedLanguage)
    ) {

        // Get user info from cookie
        let userInfo: TypeUserInfo = decodeUserPayloadCookie(request.cookies.get(conventions.cookie.userInfo)?.value ?? "") ?? ({} as TypeUserInfo);

        // Add lat/lon if not present
        if (!userInfo?.lat || !userInfo?.lon) {
            // Fetch and update coordinates
            const IPInfo = await getUserGeoDetailsViaIP(request.headers.get('x-forwarded-for') ?? request.headers.get("x-real-ip") ?? "");

            userInfo.lat = IPInfo.lat;
            userInfo.lon = IPInfo.lon;

            // Add coordinates to response headers
            response.headers.set(conventions.header.userLat, IPInfo.lat?.toString() ?? "");
            response.headers.set(conventions.header.userLon, IPInfo.lon?.toString() ?? "");

            // set info in cookie
            if (userInfo.lat && userInfo.lon) {
                response.cookies.set(
                    conventions.cookie.userInfo,
                    btoa(JSON.stringify(userInfo)),
                    {
                        httpOnly: true,
                        expires: conventions.cookie.getCookieLife(),
                        sameSite: "strict",
                        secure: isInProduction,
                    }
                );
            }
        }
    }

    // Logs
    if (isInProduction) {
        console.log({
            ip: request?.headers?.get?.('x-forwarded-for') ?? request?.headers?.get?.("x-real-ip") ?? "N/A",
            url: request.url,
            referer: request.headers.get("Referer"),
            userAgent: request.headers.get("User-Agent"),
            time: getCurrentTime(),
        })
    }

    // Return result
    return response
}

// Middleware config
export const config = {
    matcher: '/((?!api|og*|robots.txt|404-page|sitemap.xml|school/*|widget?|images|assets|scripts|_next/*|media|favicon.ico|favicons|sw.*\\.js|workbox-.*\\.js|manifest.json|favicon.*|sw.*|google.*|work.*|aqi-air-quality-index\\.jpg).*)',
}