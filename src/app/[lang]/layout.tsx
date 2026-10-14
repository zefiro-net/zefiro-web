import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { getDictionary, locales, defaultLocale } from "@/i18n";
import type { Locale } from "@/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Prevent on-demand rendering of arbitrary unmapped locales (hardening against soft-404 / DoS)
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) {
    notFound();
  }
  const locale: Locale = lang as Locale;
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://zefironet.it'),
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: {
      icon: [
        { url: '/favicon.ico?v=2' },
        { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
        { url: '/icon.png?v=2', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
      ],
    },
    openGraph: {
      title: 'Zefiro Net — Connettere in un soffio.',
      description: dict.metadata.description,
      url: 'https://zefironet.it',
      siteName: 'Zefiro Net',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Zefiro Net 5G Wholesale Infrastructure',
        },
      ],
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Zefiro Net — Connettere in un soffio.',
      description: dict.metadata.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) {
    notFound();
  }
  const locale: Locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} lang={locale} />
      <div className="flex-grow flex flex-col">
        {children}
      </div>
      <Footer dict={dict} lang={locale} />
      <CookieBanner lang={locale} />
    </>
  );
}
