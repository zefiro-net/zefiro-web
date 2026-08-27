"use client";

import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/i18n';

const locales: Locale[] = ['it', 'en'];

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLang = (newLang: Locale) => {
    // Sostituisce il segmento della lingua nell'URL corrente
    // es: /it/chi-siamo → /en/chi-siamo
    const segments = pathname.split('/');
    segments[1] = newLang; // il secondo segmento è sempre il [lang]
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-900/5 dark:bg-white/10 border border-gray-900/10 dark:border-white/20 p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLang(locale)}
          className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
            currentLang === locale
              ? 'bg-zefiro-cyan text-primary shadow-sm'
              : 'text-gray-700 dark:text-gray-300 hover:text-zefiro-cyan'
          }`}
          aria-label={`Cambia lingua: ${locale.toUpperCase()}`}
          aria-current={currentLang === locale ? 'true' : undefined}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
