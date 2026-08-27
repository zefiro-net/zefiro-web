import { NextRequest, NextResponse } from 'next/server';

const locales = ['it', 'en'];
const defaultLocale = 'it';

function getLocale(request: NextRequest): string {
  // Controlla l'header Accept-Language del browser
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase();
  
  if (preferred && locales.includes(preferred)) {
    return preferred;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignora file statici, API, screensaver e percorsi che iniziano già con un locale
  const shouldIgnore =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/screensaver') ||
    pathname.includes('.') || // file statici
    locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (shouldIgnore) {
    return NextResponse.next();
  }

  // Redirect: /chi-siamo → /it/chi-siamo (o /en/chi-siamo per utenti anglofoni)
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
