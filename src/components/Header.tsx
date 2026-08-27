"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import logoLight from '../media/logo-zefironet.svg';
import logoDark from '../media/logo-zefironet-white.svg';
import type { Locale } from '@/i18n';

type HeaderDict = {
  nav: {
    chiSiamo: string;
    sedi: string;
    manifesto: string;
    lavoraConNoi: string;
    areaPubblica: string;
    apriMenu: string;
  };
};

export default function Header({ dict, lang }: { dict: HeaderDict; lang: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const NAV_LINKS = [
    { href: `/${lang}/chi-siamo`, label: dict.nav.chiSiamo },
    { href: `/${lang}/sedi`, label: dict.nav.sedi },
    { href: `/${lang}/manifesto`, label: dict.nav.manifesto },
    { href: `/${lang}/lavora-con-noi`, label: dict.nav.lavoraConNoi },
  ];

  return (
    <>
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <nav
          className="w-full max-w-6xl pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-gray-200/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all"
          aria-label="Navigazione principale"
        >
          <Link href={`/${lang}`} className="flex items-center transition-transform hover:scale-105 active:scale-95">
            <Image src={logoLight} alt="Zefiro Net Logo" className="h-7 sm:h-8 w-auto dark:hidden" priority />
            <Image src={logoDark} alt="Zefiro Net Logo" className="h-7 sm:h-8 w-auto hidden dark:block" priority />
          </Link>

          {/* Desktop Navigation with Fluid Spacing */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all hover:text-zefiro-cyan ${
                    isActive ? 'text-zefiro-cyan' : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions Desktop */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden sm:block">
              <LanguageSwitcher currentLang={lang} />
            </div>
            <Link
              href={`/${lang}/documenti`}
              className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-gray-900/5 dark:bg-white/10 hover:bg-gray-900/10 dark:hover:bg-white/20 text-gray-900 dark:text-white text-sm font-bold border border-gray-900/10 dark:border-white/20 transition-all active:scale-95"
            >
              {dict.nav.areaPubblica}
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zefiro-cyan"
              aria-label={dict.nav.apriMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-28 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-zefiro-cyan px-2">Menu di Navigazione</span>
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-bold py-3 px-4 rounded-2xl transition-all ${
                        isActive
                          ? 'bg-zefiro-cyan/20 text-zefiro-cyan border border-zefiro-cyan/30'
                          : 'text-white/90 hover:bg-white/5 active:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href={`/${lang}/documenti`}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold py-3 px-4 rounded-2xl transition-all ${
                    pathname === `/${lang}/documenti`
                      ? 'bg-zefiro-cyan/20 text-zefiro-cyan border border-zefiro-cyan/30'
                      : 'text-white/90 hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  {dict.nav.areaPubblica}
                </Link>
              </div>
            </div>

            {/* Mobile Drawer Footer Actions */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LanguageSwitcher currentLang={lang} />
              </div>
              <p className="text-xs text-gray-400 font-medium">
                Zefiro Net SRL &copy; {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
