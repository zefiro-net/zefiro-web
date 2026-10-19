"use client";

import { useState, useEffect, useRef } from 'react';
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
    tecnologia?: string;
    governance?: string;
    sostenibilita?: string;
    lavoraConNoi: string;
    sedi?: string;
    areaPubblica: string;
    apriMenu: string;
    governanceNotice?: string;
    sub?: {
      storia: string;
      missione: string;
      valori: string;
      sedi: string;
      ranSharing: string;
      copertura: string;
      certificazioni: string;
      politiche: string;
      pianoEsg: string;
      bilancio: string;
    };
  };
};

export default function Header({ dict, lang }: { dict: HeaderDict; lang: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showGovernanceModal, setShowGovernanceModal] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
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

  const n = dict.nav;
  const sub = n.sub || {
    storia: 'Storia e Identità',
    missione: 'Visione e Missione',
    valori: 'I Nostri Valori',
    sedi: 'Le Nostre Sedi',
    ranSharing: 'RAN Sharing',
    copertura: 'Copertura Territoriale',
    certificazioni: 'Certificazioni',
    politiche: 'Politiche ESG',
    pianoEsg: 'Piano ESG',
    bilancio: 'Bilancio di Sostenibilità 2025',
  };

  const MENU_STRUCTURE = [
    {
      id: 'chi-siamo',
      label: n.chiSiamo,
      href: `/${lang}/chi-siamo`,
      subItems: [
        { label: sub.storia, href: `/${lang}/chi-siamo#storia` },
        { label: sub.missione, href: `/${lang}/chi-siamo#missione` },
        { label: sub.valori, href: `/${lang}/chi-siamo#valori` },
        { label: sub.sedi, href: `/${lang}/sedi` },
      ],
    },
    {
      id: 'tecnologia',
      label: n.tecnologia || 'Tecnologia',
      href: `/${lang}/tecnologia`,
      subItems: [
        { label: sub.ranSharing, href: `/${lang}/tecnologia#ran-sharing` },
        { label: sub.copertura, href: `/${lang}/tecnologia#copertura` },
      ],
    },
    {
      id: 'governance',
      label: n.governance || 'Governance',
      href: '#',
      isPlaceholder: true,
      subItems: [
        { label: lang === 'it' ? 'Documenti di Governance (Doc Cristina)' : 'Governance Reports', href: '#', isPlaceholder: true },
        { label: lang === 'it' ? 'Bilanci Societari (Bilanci Marchini)' : 'Financial Statements', href: '#', isPlaceholder: true },
      ],
    },
    {
      id: 'sostenibilita',
      label: n.sostenibilita || 'Sostenibilità',
      href: `/${lang}/sostenibilita`,
      subItems: [
        { label: sub.certificazioni, href: `/${lang}/sostenibilita#certificazioni` },
        { label: sub.politiche, href: `/${lang}/sostenibilita#politiche` },
        { label: sub.pianoEsg, href: `/${lang}/sostenibilita#piano-esg` },
        { label: sub.bilancio, href: `/${lang}/sostenibilita#bilancio` },
      ],
    },
    {
      id: 'lavora-con-noi',
      label: n.lavoraConNoi,
      href: `/${lang}/lavora-con-noi`,
    },
  ];

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <nav
          className="w-full max-w-6xl pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/85 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all"
          aria-label="Navigazione principale"
        >
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center transition-transform hover:scale-105 active:scale-95 shrink-0 mr-3">
            <Image src={logoLight} alt="Zefiro Net Logo" className="h-6 sm:h-7 w-auto dark:hidden" priority />
            <Image src={logoDark} alt="Zefiro Net Logo" className="h-6 sm:h-7 w-auto hidden dark:block" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MENU_STRUCTURE.map((item) => {
              const isActive = pathname.startsWith(item.href) && item.href !== '#';
              const hasSub = item.subItems && item.subItems.length > 0;

              if (item.isPlaceholder) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setShowGovernanceModal(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-all cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                        {lang === 'it' ? 'in arrivo' : 'soon'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl p-3 z-50"
                        >
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed mb-2 px-2">
                            {n.governanceNotice || 'Sezione in fase di pubblicazione.'}
                          </p>
                          <div className="space-y-1">
                            {item.subItems.map((subItem, idx) => (
                              <button
                                key={idx}
                                onClick={() => setShowGovernanceModal(true)}
                                className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                              >
                                • {subItem.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => hasSub && handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-zefiro-cyan/15 text-zefiro-cyan dark:text-zefiro-cyan'
                        : 'text-gray-800 dark:text-gray-200 hover:text-zefiro-cyan dark:hover:text-zefiro-cyan hover:bg-gray-100/50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <svg className="w-3 h-3 opacity-60 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSub && (
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl p-2 z-50"
                        >
                          <div className="space-y-1">
                            {item.subItems!.map((subItem, idx) => (
                              <Link
                                key={idx}
                                href={subItem.href}
                                onClick={() => setOpenDropdown(null)}
                                className="block px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-zefiro-cyan/10 hover:text-zefiro-cyan transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden sm:block">
              <LanguageSwitcher currentLang={lang} />
            </div>

            <Link
              href={`/${lang}/documenti`}
              className="hidden xl:inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 dark:bg-white/10 hover:bg-primary/10 dark:hover:bg-white/20 text-primary dark:text-white text-xs font-bold border border-primary/10 dark:border-white/15 transition-all active:scale-95"
            >
              {n.areaPubblica}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zefiro-cyan"
              aria-label={n.apriMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Governance Modal Notice */}
      <AnimatePresence>
        {showGovernanceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-white/10 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-zefiro-cyan/20 text-zefiro-cyan flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-primary dark:text-white mb-2">
                {lang === 'it' ? 'Governance & Bilanci' : 'Governance & Financials'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {lang === 'it'
                  ? 'La sezione Governance è attualmente in fase di finalizzazione. A breve saranno resi consultabili i documenti di Governance (Relazioni societarie e Modello 231) e i Bilanci d\'esercizio.'
                  : 'The Governance section is currently being finalized. Corporate Governance records and annual financial statements will be published here shortly.'}
              </p>
              <button
                onClick={() => setShowGovernanceModal(false)}
                className="w-full px-6 py-3 rounded-full bg-zefiro-cyan text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-md"
              >
                {lang === 'it' ? 'Ho capito' : 'Understood'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 pt-24 overflow-y-auto pointer-events-auto"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[11px] font-black uppercase tracking-widest text-zefiro-cyan px-2">
                Menu di Navigazione
              </span>
              <div className="flex flex-col space-y-2">
                {MENU_STRUCTURE.map((item) => {
                  const isActive = pathname.startsWith(item.href) && item.href !== '#';
                  if (item.isPlaceholder) {
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setShowGovernanceModal(true);
                          setIsOpen(false);
                        }}
                        className="flex items-center justify-between text-left text-lg font-bold py-2.5 px-4 rounded-xl text-gray-400 hover:bg-white/5 active:bg-white/10"
                      >
                        <span>{item.label}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                          {lang === 'it' ? 'in allestimento' : 'soon'}
                        </span>
                      </button>
                    );
                  }

                  return (
                    <div key={item.id} className="space-y-1">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-lg font-bold py-2.5 px-4 rounded-xl transition-all ${
                          isActive
                            ? 'bg-zefiro-cyan/20 text-zefiro-cyan border border-zefiro-cyan/30'
                            : 'text-white/90 hover:bg-white/5 active:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <div className="pl-6 space-y-1 border-l-2 border-white/10 ml-4 py-1">
                          {item.subItems.map((subItem, sIdx) => (
                            <Link
                              key={sIdx}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-1 px-2 text-xs font-medium text-gray-300 hover:text-zefiro-cyan transition-colors"
                            >
                              • {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <Link
                  href={`/${lang}/documenti`}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-bold py-2.5 px-4 rounded-xl text-white/70 hover:bg-white/5"
                >
                  {n.areaPubblica}
                </Link>
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50">Zefiro Net S.r.l.</span>
              <LanguageSwitcher currentLang={lang} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
