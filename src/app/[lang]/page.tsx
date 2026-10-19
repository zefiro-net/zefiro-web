import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { TiltCard } from '@/components/animations/TiltCard';
import { DataBreath3D } from '@/components/animations/DataBreath3D';
import { Hero3DAntenna } from '@/components/animations/Hero3DAntenna';
import { Parallax } from '@/components/animations/Parallax';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { ScrollSectionReveal } from '@/components/animations/ScrollSectionReveal';
import { getHighlights } from '@/data';
import type { Highlight } from '@/data/types';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';
import { NetworkCoverageMap } from '@/components/NetworkCoverageMap';
import { ScrollDownButton } from '@/components/animations/ScrollDownButton';
import RanSharingDiagram from '@/components/RanSharingDiagram';

function HighlightIcon({ icona }: { icona: Highlight['icona'] }) {
  if (icona === 'shield') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 tall:w-7 tall:h-7 xl:tall:w-8 xl:tall:h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (icona === 'signal') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 tall:w-7 tall:h-7 xl:tall:w-8 xl:tall:h-8">
        <path d="m13 2-2 2.5h3L12 7" /><path d="m11 22 2-2.5h-3L12 17" />
        <path d="M2 13h2.5l-2-3L7 12" /><path d="M22 11h-2.5l2 3L17 12" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 tall:w-7 tall:h-7 xl:tall:w-8 xl:tall:h-8">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1 1.2c.6.6 1.3.9 2.1.9h3" />
      <path d="M14 21V11" />
    </svg>
  );
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  const highlights = getHighlights(lang);

  const heroTitolo = dict.hero.titolo;
  const heroSottotitolo = dict.hero.sottotitolo;
  const btn1 = dict.hero.ctaPrimaria;
  const btn2 = dict.hero.ctaSecondaria;
  const hp = (dict as any).homepage || {};

  return (
    <main className="flex flex-col min-h-screen">
      {/* Top Reading Scroll Indicator */}
      <ScrollProgress />

      {/* Main HERO Banner — Full Screen (100dvh) with Bold, Impactful Proportions (UNCHANGED) */}
      <section className="relative overflow-hidden bg-zefiro-teal text-white h-[100dvh] min-h-[100dvh] w-full flex flex-col justify-center items-center pt-20 sm:pt-24 lg:pt-0 pb-12 lg:pb-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-zefiro-teal z-10" />
          <Parallax offset={40} direction="up" className="absolute top-0 right-0 w-2/3 h-full z-10">
            <div className="w-full h-full bg-gradient-to-l from-zefiro-cyan/20 to-transparent blur-3xl"></div>
          </Parallax>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] z-10"></div>
        </div>

        <DataBreath3D />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-20 my-auto pointer-events-none w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-center justify-between">
            <div className="w-full lg:w-[60%] xl:w-[62%] max-w-3xl pointer-events-auto">
              <FadeIn delay={0.1}>
                <h1
                  className="text-4xl sm:text-6xl md:text-7xl xl:text-7xl 2xl:text-8xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.05] text-white drop-shadow-md"
                  dangerouslySetInnerHTML={{ __html: heroTitolo }}
                />
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="text-base sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-10 max-w-2xl xl:max-w-3xl leading-relaxed font-medium drop-shadow-sm">
                  {heroSottotitolo}
                </p>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
                  <Link href={`/${lang}/chi-siamo`} className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-base sm:text-lg font-bold rounded-full bg-zefiro-cyan text-primary hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-xl text-center">
                    {btn1}
                  </Link>
                  <Link href={`/${lang}/tecnologia`} className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-base sm:text-lg font-bold rounded-full bg-transparent text-white hover:bg-white/15 backdrop-blur-md transition-all border-2 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-zefiro-cyan text-center">
                    {btn2}
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* 3D Antenna Canvas with Full Height */}
            <div className="hidden lg:flex lg:w-[40%] xl:w-[38%] justify-center lg:justify-end items-center pointer-events-none lg:pointer-events-auto">
              <Parallax offset={25} direction="up" className="w-full">
                <FadeIn delay={0.4} className="w-full h-[55vh] lg:h-[62vh] xl:h-[68vh] max-h-[640px]">
                  <Hero3DAntenna />
                </FadeIn>
              </Parallax>
            </div>
          </div>
        </div>

        {/* Floating Smooth Scroll Down Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <ScrollDownButton label={dict.common.scopriDiPiu} targetId="copertura" />
        </div>
      </section>

      {/* 1. HIGH-TECH LIVE METRIC RIBBON (Seamless bridge from Hero) */}
      <section className="relative z-30 bg-slate-900 text-white border-y border-white/10 shadow-2xl overflow-hidden py-5 sm:py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-zefiro-teal/30 via-primary to-slate-900 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex items-center gap-3.5 pt-3 md:pt-0">
              <div className="w-10 h-10 rounded-2xl bg-zefiro-cyan/20 border border-zefiro-cyan/40 flex items-center justify-center shrink-0 text-zefiro-cyan font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white tracking-tight">{hp.ribbonKpi1 || '70% Territorio'}</p>
                <p className="text-xs text-gray-400 font-medium">{hp.ribbonSub1 || 'Aree Rurali e Montane'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6 lg:pl-8">
              <div className="w-10 h-10 rounded-2xl bg-zefiro-cyan/20 border border-zefiro-cyan/40 flex items-center justify-center shrink-0 text-zefiro-cyan font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" /></svg>
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white tracking-tight">{hp.ribbonKpi2 || '~7.000 Siti'}</p>
                <p className="text-xs text-gray-400 font-medium">{hp.ribbonSub2 || 'Torri 4G & 5G Attive'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6 lg:pl-8">
              <div className="w-10 h-10 rounded-2xl bg-zefiro-cyan/20 border border-zefiro-cyan/40 flex items-center justify-center shrink-0 text-zefiro-cyan font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white tracking-tight">{hp.ribbonKpi3 || '26,8% Popolazione'}</p>
                <p className="text-xs text-gray-400 font-medium">{hp.ribbonSub3 || '~16 Milioni di Residenti'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6 lg:pl-8">
              <div className="w-10 h-10 rounded-2xl bg-zefiro-cyan/20 border border-zefiro-cyan/40 flex items-center justify-center shrink-0 text-zefiro-cyan font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white tracking-tight">{hp.ribbonKpi4 || 'Joint Venture 50/50'}</p>
                <p className="text-xs text-gray-400 font-medium">{hp.ribbonSub4 || 'WINDTRE & Iliad Italia'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RURAL NETWORK COVERAGE & DIGITAL DIVIDE */}
      <section id="copertura" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden relative scroll-mt-20">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-zefiro-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-20">
            {/* Left Column: Interactive Italy Network Map */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <ScrollSectionReveal direction="right" delay={0.1} className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] xl:max-w-[420px]">
                <div className="relative p-2 rounded-3xl bg-slate-50/60 dark:bg-slate-900/60 border border-gray-200/80 dark:border-white/10 shadow-xl backdrop-blur-sm">
                  <NetworkCoverageMap dict={hp} />
                </div>
              </ScrollSectionReveal>
            </div>

            {/* Right Column: Narrative & Key Metrics */}
            <div className="w-full lg:w-7/12">
              <ScrollSectionReveal direction="left" delay={0.2}>
                <div className="space-y-5 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zefiro-cyan/10 text-zefiro-cyan text-xs font-bold uppercase tracking-widest border border-zefiro-cyan/20">
                    <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse"></span>
                    {hp.badgeCopertura || dict.nav.chiSiamo}
                  </div>
                  <h2 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-primary dark:text-white leading-[1.12] tracking-tight">
                    {hp.chiSiamoTitolo}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {hp.chiSiamoSottotitolo}
                  </p>

                  {/* 3 Key Stats Grid with Enhanced Micro-Interactions */}
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                    <StaggerItem className="h-full">
                      <div className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-white/10 hover:border-zefiro-cyan/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-3xl lg:text-4xl font-black text-primary dark:text-zefiro-cyan tracking-tight">
                              {hp.stat1Valore || '70%'}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-zefiro-cyan/40 group-hover:bg-zefiro-cyan transition-colors" />
                          </div>
                          <div className="w-8 h-1 bg-zefiro-cyan/40 group-hover:w-12 group-hover:bg-zefiro-cyan transition-all duration-300 rounded-full mb-2"></div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-semibold leading-snug">
                          {hp.stat1Label || 'Territorio nazionale coperto'}
                        </p>
                      </div>
                    </StaggerItem>

                    <StaggerItem className="h-full">
                      <div className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-white/10 hover:border-zefiro-cyan/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-3xl lg:text-4xl font-black text-primary dark:text-zefiro-cyan tracking-tight">
                              {hp.stat2Valore || '~7.000'}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-zefiro-cyan/40 group-hover:bg-zefiro-cyan transition-colors" />
                          </div>
                          <div className="w-8 h-1 bg-zefiro-cyan/40 group-hover:w-12 group-hover:bg-zefiro-cyan transition-all duration-300 rounded-full mb-2"></div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-semibold leading-snug">
                          {hp.stat2Label || 'Siti e torri radiomobili attive'}
                        </p>
                      </div>
                    </StaggerItem>

                    <StaggerItem className="h-full">
                      <div className="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-white/10 hover:border-zefiro-cyan/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-3xl lg:text-4xl font-black text-primary dark:text-zefiro-cyan tracking-tight">
                              {hp.stat3Valore || '26,8%'}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-zefiro-cyan/40 group-hover:bg-zefiro-cyan transition-colors" />
                          </div>
                          <div className="w-8 h-1 bg-zefiro-cyan/40 group-hover:w-12 group-hover:bg-zefiro-cyan transition-all duration-300 rounded-full mb-2"></div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-semibold leading-snug">
                          {hp.stat3Label || 'Popolazione residente servita'}
                        </p>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/${lang}/tecnologia`}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 dark:bg-zefiro-cyan dark:text-primary dark:hover:bg-white text-white font-bold text-sm shadow-md transition-all group"
                    >
                      <span>{hp.chiSiamoBottone || 'Scopri la nostra Tecnologia'}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link
                      href={`/${lang}/manifesto`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 hover:border-zefiro-cyan hover:text-zefiro-cyan text-sm font-semibold transition-colors"
                    >
                      <span>{lang === 'it' ? 'Il Nostro Manifesto' : 'Our Manifesto'}</span>
                    </Link>
                  </div>
                </div>
              </ScrollSectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RAN SHARING BREAKTHROUGH — VISUAL ARCHITECTURAL SHOWCASE */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-primary to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-zefiro-cyan/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -left-24 w-96 h-96 bg-zefiro-teal/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <ScrollSectionReveal direction="up" delay={0.1}>
            <div className="max-w-3xl mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-zefiro-cyan text-xs font-bold uppercase tracking-widest border border-white/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-zefiro-cyan" />
                {hp.ranSharingBadge || 'Innovazione Wholesale'}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {hp.ranSharingTitolo}
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                {hp.ranSharingDesc}
              </p>
            </div>
          </ScrollSectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 3 Strategic Benefit Pillars */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <ScrollSectionReveal direction="right" delay={0.2}>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-zefiro-cyan/50 transition-all group">
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zefiro-cyan transition-colors">
                      {hp.ranPillar1Titolo || 'Sostenibilità Ambientale'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-12">
                    {hp.ranPillar1Desc}
                  </p>
                </div>
              </ScrollSectionReveal>

              <ScrollSectionReveal direction="right" delay={0.3}>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-zefiro-cyan/50 transition-all group">
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-zefiro-cyan/20 text-zefiro-cyan flex items-center justify-center font-bold text-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zefiro-cyan transition-colors">
                      {hp.ranPillar2Titolo || 'Accelerazione 5G nei Borghi'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-12">
                    {hp.ranPillar2Desc}
                  </p>
                </div>
              </ScrollSectionReveal>

              <ScrollSectionReveal direction="right" delay={0.4}>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-zefiro-cyan/50 transition-all group">
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zefiro-cyan transition-colors">
                      {hp.ranPillar3Titolo || 'Separazione Logica & Sicurezza'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-12">
                    {hp.ranPillar3Desc}
                  </p>
                </div>
              </ScrollSectionReveal>

              <div className="pt-2 pl-2">
                <Link
                  href={`/${lang}/tecnologia`}
                  className="inline-flex items-center gap-3 text-sm font-bold text-zefiro-cyan hover:text-white transition-colors"
                >
                  <span>{hp.ranSharingBottone || 'Esplora la nostra Rete'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Architecture Graphic */}
            <div className="lg:col-span-7">
              <ScrollSectionReveal direction="left" delay={0.3}>
                <RanSharingDiagram lang={lang} />
              </ScrollSectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODERN BENTO GRID — THE 4 PILLARS OF ZEFIRO NET */}
      <section className="py-20 sm:py-28 bg-gray-50/70 dark:bg-slate-900/60 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <ScrollSectionReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {hp.bentoBadge || "L'Ecosistema Zefiro Net"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary dark:text-white tracking-tight mb-4">
                {hp.bentoTitolo}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {hp.bentoSottotitolo}
              </p>
            </div>
          </ScrollSectionReveal>

          {/* Asymmetric 12-Column Bento Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Bento Card 1 (7 cols) — IL NOSTRO MANIFESTO */}
            <div className="lg:col-span-7">
              <ScrollSectionReveal direction="up" delay={0.1} className="h-full">
                <div className="h-full relative overflow-hidden p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-primary via-slate-900 to-slate-950 text-white border border-white/10 shadow-xl flex flex-col justify-between group hover:border-zefiro-cyan/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-zefiro-cyan/15 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

                  <div className="relative z-10 space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-zefiro-cyan text-xs font-bold uppercase tracking-wider border border-white/10">
                      {hp.bentoManifestoBadge || 'Carta dei Valori'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {hp.bentoManifestoTitolo}
                    </h3>
                    <p className="text-lg sm:text-xl font-serif italic text-zefiro-cyan leading-snug">
                      {hp.bentoManifestoQuote}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {hp.bentoManifestoDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">Inclusione Territoriale</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">Decarbonizzazione</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">Trasparenza Etica</span>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 border-t border-white/10 mt-6 flex items-center justify-between">
                    <Link
                      href={`/${lang}/manifesto`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-zefiro-cyan group-hover:translate-x-1 transition-all"
                    >
                      <span>{hp.bentoManifestoBottone || 'Leggi il Manifesto'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <span className="text-xs font-mono text-gray-400">01 / MANIFESTO</span>
                  </div>
                </div>
              </ScrollSectionReveal>
            </div>

            {/* Bento Card 2 (5 cols) — SOSTENIBILITÀ & CERTIFICAZIONI */}
            <div className="lg:col-span-5">
              <ScrollSectionReveal direction="up" delay={0.2} className="h-full">
                <div className="h-full relative overflow-hidden p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 shadow-xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                      {hp.bentoEsgBadge || 'Responsabilità ESG'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight">
                      {hp.bentoEsgTitolo}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      {hp.bentoEsgDesc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-bold text-gray-700 dark:text-gray-200">
                      <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 text-center">
                        EcoVadis Rating
                      </div>
                      <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 text-center">
                        ISO 9001 / 14001 / 45001
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 dark:border-white/10 mt-6 flex items-center justify-between">
                    <Link
                      href={`/${lang}/sostenibilita`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group-hover:translate-x-1 transition-all"
                    >
                      <span>{hp.bentoEsgBottone || 'Certificazioni & Bilancio'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <span className="text-xs font-mono text-gray-400">02 / ESG</span>
                  </div>
                </div>
              </ScrollSectionReveal>
            </div>

            {/* Bento Card 3 (5 cols) — LA JOINT VENTURE PARITETICA */}
            <div className="lg:col-span-5">
              <ScrollSectionReveal direction="up" delay={0.3} className="h-full">
                <div className="h-full relative overflow-hidden p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 shadow-xl flex flex-col justify-between group hover:border-zefiro-cyan/50 transition-all duration-300">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zefiro-cyan/10 text-zefiro-cyan text-xs font-bold uppercase tracking-wider border border-zefiro-cyan/20">
                      {hp.bentoSociBadge || 'Sinergia Industriale'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight">
                      {hp.bentoSociTitolo}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      {hp.bentoSociDesc}
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                      <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-black text-xs">
                        WINDTRE 50%
                      </div>
                      <span className="text-xs font-bold text-gray-400">+</span>
                      <div className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-black text-xs">
                        Iliad Italia 50%
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 dark:border-white/10 mt-6 flex items-center justify-between">
                    <Link
                      href={`/${lang}/chi-siamo`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-zefiro-cyan hover:underline group-hover:translate-x-1 transition-all"
                    >
                      <span>{hp.bentoSociBottone || 'Chi Siamo & Soci'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <span className="text-xs font-mono text-gray-400">03 / PARTNERS</span>
                  </div>
                </div>
              </ScrollSectionReveal>
            </div>

            {/* Bento Card 4 (7 cols) — PEOPLE & TALENTO */}
            <div className="lg:col-span-7">
              <ScrollSectionReveal direction="up" delay={0.4} className="h-full">
                <div className="h-full relative overflow-hidden p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white border border-white/10 shadow-xl flex flex-col justify-between group hover:border-zefiro-cyan/50 transition-all duration-300">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-zefiro-cyan text-xs font-bold uppercase tracking-wider border border-white/10">
                      {hp.bentoPeopleBadge || 'People & Cultura'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {hp.bentoPeopleTitolo}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {hp.bentoPeopleDesc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="font-bold text-white mb-0.5">Innovazione 5G</p>
                        <p className="text-gray-400 text-[11px]">Tecnologie di rete radio d&apos;avanguardia</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="font-bold text-white mb-0.5">Welfare Integrato</p>
                        <p className="text-gray-400 text-[11px]">Salute, previdenza e work-life balance</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="font-bold text-white mb-0.5">Pari Opportunità</p>
                        <p className="text-gray-400 text-[11px]">Certificazione UNI/PdR 125 in corso</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 mt-6 flex items-center justify-between">
                    <Link
                      href={`/${lang}/lavora-con-noi`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-zefiro-cyan group-hover:translate-x-1 transition-all"
                    >
                      <span>{hp.bentoPeopleBottone || 'Lavora con Noi'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                    <span className="text-xs font-mono text-gray-400">04 / CAREERS</span>
                  </div>
                </div>
              </ScrollSectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC HIGHLIGHTS CARDS (Refined & Elevated) */}
      <section className="py-14 sm:py-20 bg-white dark:bg-slate-950 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <ScrollSectionReveal direction="up">
            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">{dict.missione.titolo}</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary dark:text-white leading-tight">{dict.missione.sottotitolo}</h3>
            </div>
          </ScrollSectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((h) => (
              <StaggerItem key={h.id}>
                <TiltCard>
                  <div className="group h-full flex flex-col p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 shadow-md hover:shadow-2xl border border-gray-200 dark:border-white/10 hover:border-zefiro-cyan/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-primary dark:bg-zefiro-cyan flex items-center justify-center mb-5 text-white dark:text-primary shadow-lg group-hover:scale-110 transition-all duration-300">
                      <HighlightIcon icona={h.icona} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-zefiro-cyan transition-colors">{h.titolo}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">{h.descrizione}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. INSTITUTIONAL CALLOUT & ARCHIVE STRIP (Before Footer) */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-zefiro-teal/30 via-primary/95 to-slate-950 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zefiro-cyan/20 text-zefiro-cyan text-xs font-bold uppercase tracking-wider border border-zefiro-cyan/30">
                {hp.ctaArchivioBadge || 'Conformità & Trasparenza'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {hp.ctaArchivioTitolo}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {hp.ctaArchivioDesc}
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href={`/${lang}/documenti`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-zefiro-cyan hover:bg-white text-primary font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
              >
                {hp.ctaArchivioBottone || "Accedi all'Archivio"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
