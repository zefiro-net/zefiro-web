/* eslint-disable @next/next/no-img-element */
"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { useState, useMemo } from 'react';
import type { Document } from '@/data/types';

type DocumentiDict = {
  titolo?: string;
  titoloAccento?: string;
  filtroTutti: string;
  filtroFinanza: string;
  filtroGovernance: string;
  filtroSicurezza: string;
  filtroSostenibilita?: string;
  titoloSezione: string;
  sottotitolo: string;
  colonnaTitolo: string;
  colonnaCategoria: string;
  colonnaData: string;
  colonnaDownload: string;
  nessunDocumento: string;
  tornaTutti: string;
};

export function DocumentiClient({ documents, dict }: { documents: Document[]; dict: DocumentiDict }) {
  const CATEGORIES = [
    { key: dict.filtroTutti, value: 'Tutti' },
    { key: dict.filtroSostenibilita || 'Sostenibilità', value: 'Sostenibilità' },
    { key: dict.filtroGovernance, value: 'Governance' },
    { key: dict.filtroFinanza, value: 'Finanza' },
    { key: dict.filtroSicurezza, value: 'Sicurezza' },
  ];

  const [activeCategory, setActiveCategory] = useState('Tutti');

  const filtered = useMemo(() => {
    const originalDocs = Array.isArray(documents) ? [...documents] : [];
    if (activeCategory === 'Tutti') return originalDocs;
    const target = activeCategory.toLowerCase().trim();
    return originalDocs.filter(d => d.category?.toLowerCase().trim() === target);
  }, [activeCategory, documents]);

  return (
    <main className="relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 tall:pt-44 xl:tall:pt-48 pb-6 sm:pb-8 tall:pb-10 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl tall:text-5xl lg:tall:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {dict.titolo || 'Documenti '}<span className="text-zefiro-cyan">{dict.titoloAccento || 'pubblici'}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 tall:w-16 h-1.5 bg-zefiro-cyan rounded-full mb-4 sm:mb-5 tall:mb-7 mx-auto"></div>
            <p className="text-base sm:text-lg tall:text-xl md:tall:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {dict.sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-16 sm:pb-24 tall:pb-32">
        <FadeIn delay={0.25}>
          <div className="flex justify-center sm:justify-end mb-6 sm:mb-8">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 ${
                    activeCategory === cat.value
                      ? 'bg-primary text-white border-primary dark:bg-zefiro-cyan dark:border-zefiro-cyan dark:text-primary shadow-sm scale-105'
                      : 'bg-white text-primary border-gray-200 hover:border-primary dark:bg-slate-800 dark:text-white dark:border-white/10 dark:hover:border-white/40'
                  }`}
                >
                  {cat.key}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl border border-gray-200/80 dark:border-slate-700 overflow-hidden shadow-md">
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 sm:p-5 bg-gray-50 dark:bg-slate-900/50 border-b border-gray-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            <div className="col-span-6">{dict.colonnaTitolo}</div>
            <div className="col-span-2">{dict.colonnaCategoria}</div>
            <div className="col-span-2">{dict.colonnaData}</div>
            <div className="col-span-2 text-right">{dict.colonnaDownload}</div>
          </div>

          <div key={activeCategory} className="min-h-[250px]">
            {filtered.length === 0 ? (
              <div className="p-12 sm:p-20 text-center text-gray-500 dark:text-gray-400">
                <p className="text-lg font-medium">{dict.nessunDocumento}</p>
                <button
                  onClick={() => setActiveCategory('Tutti')}
                  className="mt-4 text-sm text-zefiro-cyan font-bold hover:underline"
                >
                  {dict.tornaTutti}
                </button>
              </div>
            ) : (
              <StaggerContainer className="divide-y divide-gray-100 dark:divide-slate-700">
                {filtered.map((doc) => (
                  <StaggerItem key={doc.id}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-4 sm:p-5 items-center hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors group">
                      <div className="col-span-1 md:col-span-6 flex items-start gap-3 sm:gap-4">
                        <div className="text-primary dark:text-white mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">{doc.title}</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 md:hidden mt-0.5">{doc.category} • {doc.date} • {doc.size}</p>
                        </div>
                      </div>
                      <div className="hidden md:block col-span-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="inline-flex px-2.5 py-1 rounded bg-gray-100 border border-gray-200 dark:bg-slate-700 dark:border-slate-600 uppercase text-[10px] font-bold tracking-wider">{doc.category}</span>
                      </div>
                      <div className="hidden md:block col-span-2 text-sm text-gray-600 dark:text-gray-300">{doc.date}</div>
                      <div className="col-span-1 md:col-span-2 text-right flex justify-end mt-1 md:mt-0">
                        <a
                          href={doc.fileUrl !== '#' ? doc.fileUrl : undefined}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary dark:text-zefiro-cyan hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-3 py-1.5 bg-gray-100 dark:bg-white/10 md:bg-transparent md:dark:bg-transparent transition-all"
                          aria-label={`${dict.colonnaDownload} ${doc.title}`}
                          download={doc.fileUrl !== '#'}
                        >
                          <span className="md:hidden">Scarica ({doc.size})</span>
                          <span className="hidden md:inline">{doc.size}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        </a>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        </div>
      </FadeIn>
      </div>
    </main>
  );
}
