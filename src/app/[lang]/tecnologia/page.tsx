import { getTecnologia } from '@/data';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { TiltCard } from '@/components/animations/TiltCard';
import { NetworkCoverageMap } from '@/components/NetworkCoverageMap';
import Link from 'next/link';

function FeatureIcon({ icona }: { icona: string }) {
  switch (icona) {
    case 'cost':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      );
    case 'leaf':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      );
    case 'speed':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m13 2-2 2.5h3L12 7"/>
          <path d="m11 22 2-2.5h-3L12 17"/>
          <path d="M2 13h2.5l-2-3L7 12"/>
          <path d="M22 11h-2.5l2 3L17 12"/>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
        </svg>
      );
    case 'resilience':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/>
        </svg>
      );
  }
}

export default async function TecnologiaPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const data = getTecnologia(lang);

  return (
    <main className="relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zefiro-cyan/10 text-zefiro-cyan text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse"></span>
              {data.hero.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {data.hero.titolo}
              <span className="text-zefiro-cyan">{data.hero.titoloAccento}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 h-1.5 bg-zefiro-cyan rounded-full mb-5 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {data.hero.sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 1: RAN SHARING */}
      <section id="ran-sharing" className="py-12 sm:py-16 border-t border-gray-100 dark:border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mb-10 sm:mb-12">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {data.ranSharing.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-4">
                {data.ranSharing.titolo}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {data.ranSharing.descrizione1}
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {data.ranSharing.descrizione2}
              </p>
            </div>
          </FadeIn>

          {/* Architecture 3-Step Pillar Box */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
            {data.ranSharing.architetturaPunti.map((punto, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/60 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-zefiro-cyan/15 text-zefiro-cyan font-mono font-bold flex items-center justify-center text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">
                    {punto.titolo}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {punto.descrizione}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* WHY RAN SHARING: 4 Key Advantages */}
          <div className="pt-6">
            <FadeIn delay={0.2}>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight mb-2">
                  {data.vantaggi.titolo}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {data.vantaggi.sottotitolo}
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {data.vantaggi.items.map((item) => (
                <StaggerItem key={item.id}>
                  <TiltCard>
                    <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-zefiro-cyan/50 hover:shadow-xl transition-all duration-300 group">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-primary dark:bg-slate-700 flex items-center justify-center text-zefiro-cyan mb-5 shadow-sm group-hover:scale-105 group-hover:bg-zefiro-cyan group-hover:text-primary transition-all duration-300">
                          <FeatureIcon icona={item.icona} />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-primary dark:text-white mb-2 leading-snug">
                          {item.titolo}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                          {item.descrizione}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* SECTION 2: COPERTURA (70% TERRITORIO) */}
      <section id="copertura" className="py-16 sm:py-20 bg-gray-50/80 dark:bg-slate-900/60 border-t border-gray-200/60 dark:border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Interactive Italy Network Map */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <FadeIn direction="right" delay={0.2} className="w-full max-w-[340px] sm:max-w-[400px]">
                <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-xl">
                  <NetworkCoverageMap dict={dict.homepage} />
                </div>
              </FadeIn>
            </div>

            {/* Narrative & Statistics */}
            <div className="w-full lg:w-7/12">
              <FadeIn direction="left" delay={0.3}>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                  {data.copertura.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-4">
                  {data.copertura.titolo}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-normal">
                  {data.copertura.descrizione}
                </p>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {data.copertura.statistiche.map((stat, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-zefiro-cyan/50 transition-all"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-primary dark:text-zefiro-cyan mb-1">
                        {stat.valore}
                      </div>
                      <div className="text-xs font-bold text-gray-800 dark:text-white mb-1 leading-tight">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                        {stat.dettaglio}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    href={`/${lang}/sostenibilita`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zefiro-cyan text-primary font-bold text-sm hover:bg-white hover:shadow-lg transition-all"
                  >
                    <span>{lang === 'it' ? 'Scopri il nostro impegno ESG' : 'Explore our ESG commitment'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </Link>
                  <Link
                    href={`/${lang}/chi-siamo`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white font-bold text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                  >
                    <span>{lang === 'it' ? 'Approfondisci Chi Siamo' : 'About the Joint Venture'}</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
