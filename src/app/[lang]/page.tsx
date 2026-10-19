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
  const missioneTitolo = dict.missione.titolo;
  const missioneSottotitolo = dict.missione.sottotitolo;

  return (
    <main className="flex flex-col min-h-screen">
      {/* Top Reading Scroll Indicator */}
      <ScrollProgress />

      {/* Main HERO Banner — Full Screen (100dvh) with Bold, Impactful Proportions */}
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

      {/* Rural Network Coverage Section — Full Viewport Fit */}
      <section id="copertura" className="min-h-[100dvh] w-full flex flex-col justify-center py-6 sm:py-8 tall:py-16 xl:tall:py-20 bg-white dark:bg-slate-950 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10 tall:gap-12 xl:tall:gap-16">
            {/* Left Column: Interactive Italy Network Map */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <ScrollSectionReveal direction="right" delay={0.1} className="w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[320px] tall:lg:max-w-[380px] xl:tall:max-w-[420px]">
                <NetworkCoverageMap dict={dict.homepage} />
              </ScrollSectionReveal>
            </div>

            {/* Right Column: Narrative & Key Metrics */}
            <div className="w-full lg:w-7/12">
              <ScrollSectionReveal direction="left" delay={0.2}>
                <div className="space-y-3.5 sm:space-y-4 tall:space-y-6 xl:tall:space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 tall:px-4 tall:py-1.5 rounded-full bg-zefiro-cyan/10 text-zefiro-cyan text-xs font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse"></span>
                    {(dict as any).homepage.badgeCopertura || dict.nav.chiSiamo}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl tall:text-4xl tall:lg:text-5xl xl:tall:text-6xl font-black text-primary dark:text-white leading-[1.15] tall:leading-[1.1] tracking-tight">
                    {(dict as any).homepage.chiSiamoTitolo}
                  </h2>
                  <p className="text-sm sm:text-base tall:text-lg xl:tall:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {(dict as any).homepage.chiSiamoSottotitolo}
                  </p>

                  {/* 3 Key Stats Grid — Balanced & Elevated */}
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 tall:gap-3.5 pt-1">
                    <StaggerItem className="h-full">
                      <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 tall:p-4.5 rounded-xl sm:rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-gray-200/80 dark:border-white/10 hover:border-zefiro-cyan/50 hover:shadow-md hover:-translate-y-0.5 tall:hover:-translate-y-1 transition-all duration-300 group">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xl sm:text-2xl tall:text-3xl xl:tall:text-4xl font-black text-primary dark:text-zefiro-cyan tracking-tight">
                              {(dict as any).homepage.stat1Valore || '70%'}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zefiro-cyan/50 group-hover:bg-zefiro-cyan transition-colors"></span>
                          </div>
                          <div className="w-5 h-0.5 bg-zefiro-cyan/30 group-hover:w-8 group-hover:bg-zefiro-cyan transition-all duration-300 rounded-full mb-1.5"></div>
                        </div>
                        <p className="text-[11px] sm:text-xs tall:text-sm text-gray-700 dark:text-gray-300 font-semibold leading-snug">
                          {(dict as any).homepage.stat1Label || 'Territorio nazionale coperto (zone rurali)'}
                        </p>
                      </div>
                    </StaggerItem>

                    <StaggerItem className="h-full">
                      <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 tall:p-4.5 rounded-xl sm:rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-gray-200/80 dark:border-white/10 hover:border-zefiro-cyan/50 hover:shadow-md hover:-translate-y-0.5 tall:hover:-translate-y-1 transition-all duration-300 group">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xl sm:text-2xl tall:text-3xl xl:tall:text-4xl font-black text-primary dark:text-zefiro-cyan tracking-tight">
                              {(dict as any).homepage.stat2Valore || '~7.000'}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zefiro-cyan/50 group-hover:bg-zefiro-cyan transition-colors"></span>
                          </div>
                          <div className="w-5 h-0.5 bg-zefiro-cyan/30 group-hover:w-8 group-hover:bg-zefiro-cyan transition-all duration-300 rounded-full mb-1.5"></div>
                        </div>
                        <p className="text-[11px] sm:text-xs tall:text-sm text-gray-700 dark:text-gray-300 font-semibold leading-snug">
                          {(dict as any).homepage.stat2Label || 'Siti e torri radiomobili attive'}
                        </p>
                      </div>
                    </StaggerItem>

                    <StaggerItem className="h-full">
                      <div className="h-full flex flex-col justify-between p-3 sm:p-3.5 tall:p-4.5 rounded-xl sm:rounded-2xl bg-slate-50/90 dark:bg-slate-900/90 border border-gray-200/80 dark:border-white/10 hover:border-zefiro-cyan/50 hover:shadow-md hover:-translate-y-0.5 tall:hover:-translate-y-1 transition-all duration-300 group">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xl sm:text-2xl tall:text-3xl xl:tall:text-4xl font-black text-primary dark:text-zefiro-cyan tracking-tight">
                              {(dict as any).homepage.stat3Valore || '100%'}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-zefiro-cyan/50 group-hover:bg-zefiro-cyan transition-colors"></span>
                          </div>
                          <div className="w-5 h-0.5 bg-zefiro-cyan/30 group-hover:w-8 group-hover:bg-zefiro-cyan transition-all duration-300 rounded-full mb-1.5"></div>
                        </div>
                        <p className="text-[11px] sm:text-xs tall:text-sm text-gray-700 dark:text-gray-300 font-semibold leading-snug">
                          {(dict as any).homepage.stat3Label || 'Wholesale-Only condiviso'}
                        </p>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  <div className="pt-1 tall:pt-2">
                    <Link href={`/${lang}/tecnologia`} className="inline-flex items-center gap-2 tall:gap-3 text-sm sm:text-base tall:text-lg font-bold text-primary dark:text-zefiro-cyan hover:gap-3.5 tall:hover:gap-5 transition-all group">
                      <span>{(dict as any).homepage.chiSiamoBottone}</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollSectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-10 sm:py-14 tall:py-24 xl:tall:py-32 bg-gray-50 dark:bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <ScrollSectionReveal direction="up">
            <div className="text-center mb-8 sm:mb-10 tall:mb-16 xl:tall:mb-20 max-w-3xl xl:max-w-4xl mx-auto">
              <h2 className="text-xs sm:text-xs tall:text-sm xl:tall:text-base font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 tall:mb-4">{missioneTitolo}</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl tall:text-4xl lg:tall:text-5xl xl:tall:text-6xl font-extrabold text-primary dark:text-white leading-tight">{missioneSottotitolo}</h3>
            </div>
          </ScrollSectionReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 tall:gap-8 lg:tall:gap-10">
            {highlights.map((h) => (
              <StaggerItem key={h.id}>
                <TiltCard>
                  <div className="group h-full flex flex-col p-5 sm:p-6 tall:p-8 lg:tall:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl border border-gray-200 dark:border-slate-700 hover:border-zefiro-cyan/50 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 tall:w-14 tall:h-14 lg:tall:w-16 lg:tall:h-16 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center mb-4 sm:mb-5 tall:mb-7 text-white shadow-lg group-hover:scale-110 group-hover:bg-zefiro-cyan group-hover:text-primary transition-all duration-300">
                      <HighlightIcon icona={h.icona} />
                    </div>
                    <h4 className="text-lg sm:text-xl tall:text-2xl lg:tall:text-3xl font-bold mb-2 sm:mb-2.5 tall:mb-4 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-zefiro-cyan transition-colors">{h.titolo}</h4>
                    <p className="text-xs sm:text-sm tall:text-base lg:tall:text-lg text-gray-800 dark:text-gray-300 leading-relaxed font-medium">{h.descrizione}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
