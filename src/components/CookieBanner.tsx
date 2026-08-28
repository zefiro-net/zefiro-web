'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Locale } from '@/i18n';

interface CookieBannerProps {
  lang: Locale;
}

export default function CookieBanner({ lang }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isIt = lang === 'it';

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('zefiro_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entrance after page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('zefiro_cookie_consent', JSON.stringify({ technical: true, analytics: true, date: new Date().toISOString() }));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('zefiro_cookie_consent', JSON.stringify({ technical: true, analytics: false, date: new Date().toISOString() }));
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md md:max-w-lg z-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200/80 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-gray-800 dark:text-gray-200"
          role="dialog"
          aria-live="polite"
          aria-label={isIt ? 'Gestione Consenso Cookie' : 'Cookie Consent Management'}
        >
          {/* Header with Icon */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-zefiro-cyan/15 text-zefiro-cyan flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-primary dark:text-white">
                {isIt ? 'Informativa Cookie & Privacy' : 'Cookie & Privacy Information'}
              </h3>
              <span className="text-[11px] font-semibold text-zefiro-cyan uppercase tracking-wider block">
                {isIt ? 'Conformità GDPR & Garante Privacy' : 'GDPR & Privacy Compliant'}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {isIt ? (
              <>
                Questo sito web utilizza <strong>esclusivamente cookie tecnici</strong> necessari per garantire il corretto funzionamento delle pagine e memorizzare le tue preferenze (es. lingua e tema). Non utilizziamo cookie di profilazione o tracciamento pubblicitario.
              </>
            ) : (
              <>
                This website uses <strong>strictly technical cookies</strong> essential for core functionality and saving your preferences (such as theme and language). We do not use advertising or profiling cookies.
              </>
            )}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 text-xs mb-5 pt-1 border-t border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400">
            <Link href={`/${lang}/cookie-policy`} className="underline hover:text-zefiro-cyan transition-colors">
              {isIt ? 'Cookie Policy dettagliata' : 'Detailed Cookie Policy'}
            </Link>
            <span>•</span>
            <Link href={`/${lang}/privacy-policy`} className="underline hover:text-zefiro-cyan transition-colors">
              {isIt ? 'Informativa Privacy' : 'Privacy Policy'}
            </Link>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={handleAcceptAll}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-zefiro-cyan to-zefiro-teal text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all text-center cursor-pointer active:scale-98"
            >
              {isIt ? 'Accetta tutti' : 'Accept all'}
            </button>
            <button
              onClick={handleAcceptNecessary}
              className="w-full py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-800 dark:text-white font-semibold text-xs sm:text-sm border border-gray-200 dark:border-white/10 transition-all text-center cursor-pointer active:scale-98"
            >
              {isIt ? 'Solo necessari' : 'Necessary only'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
