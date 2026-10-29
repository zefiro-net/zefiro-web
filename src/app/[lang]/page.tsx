import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { DataBreath3D } from '@/components/animations/DataBreath3D';
import { Hero3DAntenna } from '@/components/animations/Hero3DAntenna';
import { Parallax } from '@/components/animations/Parallax';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { ScrollSectionReveal } from '@/components/animations/ScrollSectionReveal';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';
import { NetworkCoverageMap } from '@/components/NetworkCoverageMap';
import { ScrollDownButton } from '@/components/animations/ScrollDownButton';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isIt = lang === 'it';

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

      {/* 1. SEZIONE COPERTURA — EDITORIALE, SPAZIOSA E MINIMALE */}
      <section id="copertura" className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden relative scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
            {/* Left: Mappa d'Italia Minimale */}
            <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1">
              <ScrollSectionReveal direction="right" delay={0.1} className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
                <NetworkCoverageMap dict={hp} />
              </ScrollSectionReveal>
            </div>

            {/* Right: Tipografia & Metriche Essenziali */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <ScrollSectionReveal direction="left" delay={0.15}>
                <div className="space-y-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zefiro-cyan block">
                    {hp.badgeCopertura || (isIt ? 'Infrastruttura Radiomobile' : 'Mobile Infrastructure')}
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary dark:text-white leading-[1.12] tracking-tight">
                    {hp.chiSiamoTitolo}
                  </h2>
                  
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {hp.chiSiamoSottotitolo}
                  </p>

                  {/* Metriche pure tipografiche senza card pesanti */}
                  <div className="grid grid-cols-3 gap-6 pt-4 pb-6 border-y border-gray-100 dark:border-white/10">
                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-primary dark:text-white block">
                        {hp.stat1Valore || '70%'}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1.5 block leading-snug">
                        {hp.stat1Label || (isIt ? 'Territorio nazionale coperto' : 'National territory covered')}
                      </span>
                    </div>

                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-primary dark:text-white block">
                        {hp.stat2Valore || '~7.000'}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1.5 block leading-snug">
                        {hp.stat2Label || (isIt ? 'Siti e torri radiomobili' : 'Mobile sites & towers')}
                      </span>
                    </div>

                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-primary dark:text-white block">
                        {hp.stat3Valore || '26,8%'}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1.5 block leading-snug">
                        {hp.stat3Label || (isIt ? 'Popolazione residente' : 'Resident population')}
                      </span>
                    </div>
                  </div>

                  {/* Azione pulita con link testuale */}
                  <div className="pt-2">
                    <Link
                      href={`/${lang}/tecnologia`}
                      className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-primary dark:text-zefiro-cyan hover:gap-4 transition-all group"
                    >
                      <span>{hp.chiSiamoBottone || (isIt ? 'Scopri la nostra Tecnologia' : 'Discover Our Technology')}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* 2. SEZIONE RAN SHARING — ESSENZA TECNOLOGICA A 3 PILASTRI */}
      <section className="py-20 sm:py-28 bg-gray-50/80 dark:bg-slate-900/40 border-y border-gray-100 dark:border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <ScrollSectionReveal direction="up" delay={0.1}>
            <div className="max-w-3xl mb-14 sm:mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zefiro-cyan block mb-3">
                {hp.ranSharingBadge || (isIt ? 'Modello Tecnologico' : 'Technology Model')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary dark:text-white tracking-tight leading-tight mb-4">
                {hp.ranSharingTitolo || (isIt ? 'RAN Sharing: tecnologia condivisa, impatto dimezzato' : 'RAN Sharing: shared technology, halved footprint')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {hp.ranSharingDesc || (isIt
                  ? 'Il modello Radio Access Network Sharing consente di condividere l’infrastruttura passiva e attiva di trasmissione, garantendo la totale indipendenza delle rispettive Core Network e azzerando la duplicazione degli impianti.'
                  : 'The Radio Access Network Sharing model shares passive and active transmission assets while maintaining autonomous Core Networks, eliminating redundant equipment.')}
              </p>
            </div>
          </ScrollSectionReveal>

          {/* 3 Colonne Editoriali Minimali */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-2">
            <ScrollSectionReveal direction="up" delay={0.15}>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-zefiro-cyan tracking-wider">01</span>
                <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white">
                  {hp.ranPillar1Titolo || (isIt ? 'Sostenibilità Ambientale' : 'Environmental Sustainability')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {hp.ranPillar1Desc || (isIt
                    ? 'Dimezzamento dei tralicci e apparati radio per ridurre l’impatto paesaggistico, i consumi energetici e l’impatto elettromagnetico.'
                    : 'Halving towers and equipment to minimize landscape footprint, power consumption, and electromagnetic impact.')}
                </p>
              </div>
            </ScrollSectionReveal>

            <ScrollSectionReveal direction="up" delay={0.25}>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-zefiro-cyan tracking-wider">02</span>
                <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white">
                  {hp.ranPillar2Titolo || (isIt ? 'Accelerazione 5G nei Borghi' : 'Fast 5G in Rural Towns')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {hp.ranPillar2Desc || (isIt
                    ? 'Accesso immediato alle frequenze ultra-broadband per comunità e imprese locali che altrimenti resterebbero escluse.'
                    : 'Immediate access to ultra-broadband frequencies for rural communities and local businesses.')}
                </p>
              </div>
            </ScrollSectionReveal>

            <ScrollSectionReveal direction="up" delay={0.35}>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-zefiro-cyan tracking-wider">03</span>
                <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white">
                  {hp.ranPillar3Titolo || (isIt ? 'Separazione Logica & Sicurezza' : 'Logical Separation & Security')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {hp.ranPillar3Desc || (isIt
                    ? 'I dati degli utenti e i sistemi di fatturazione dei soci partner rimangono rigorosamente isolati e protetti.'
                    : 'Subscriber traffic and billing systems of partner operators remain strictly isolated and protected.')}
                </p>
              </div>
            </ScrollSectionReveal>
          </div>

          <div className="pt-10 sm:pt-12">
            <Link
              href={`/${lang}/tecnologia`}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-zefiro-cyan hover:gap-3 transition-all group"
            >
              <span>{hp.ranSharingBottone || (isIt ? 'Approfondisci l’architettura di rete' : 'Explore network architecture')}</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE I TRE PILASTRI STRATEGICI — GRIGLIA EDITORIALE PULITA */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <ScrollSectionReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 pb-6 border-b border-gray-100 dark:border-white/10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zefiro-cyan block mb-2">
                  {isIt ? 'Visione & Impegno' : 'Vision & Commitment'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-primary dark:text-white tracking-tight">
                  {isIt ? 'I Valori Fondamentali di Zefiro Net' : 'The Core Pillars of Zefiro Net'}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-md font-normal leading-relaxed">
                {isIt
                  ? 'Un’infrastruttura condivisa guidata da integrità etica, responsabilità ambientale e centralità delle persone.'
                  : 'A shared infrastructure steered by ethical integrity, environmental responsibility, and human development.'}
              </p>
            </div>
          </ScrollSectionReveal>

          {/* 3 Colonne Editoriali con Link Diretto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Pilastro 1: Manifesto */}
            <ScrollSectionReveal direction="up" delay={0.1}>
              <div className="h-full flex flex-col justify-between group">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-500">
                    01 / {isIt ? 'VALORI' : 'VALUES'}
                  </span>
                  <h3 className="text-xl font-bold text-primary dark:text-white group-hover:text-zefiro-cyan transition-colors">
                    {hp.bentoManifestoTitolo || (isIt ? 'Il Nostro Manifesto' : 'Our Manifesto')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {hp.bentoManifestoDesc || (isIt
                      ? 'I 6 principi guida per uno sviluppo digitale inclusivo, etico e rispettoso delle persone e dei territori.'
                      : '6 guiding principles for equitable, ethical, and community-centered digital development.')}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5">
                  <Link
                    href={`/${lang}/manifesto`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-white hover:text-zefiro-cyan group-hover:gap-2.5 transition-all"
                  >
                    <span>{hp.bentoManifestoBottone || (isIt ? 'Leggi il Manifesto' : 'Read the Manifesto')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </ScrollSectionReveal>

            {/* Pilastro 2: Sostenibilità */}
            <ScrollSectionReveal direction="up" delay={0.2}>
              <div className="h-full flex flex-col justify-between group">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-500">
                    02 / {isIt ? 'SOSTENIBILITÀ' : 'SUSTAINABILITY'}
                  </span>
                  <h3 className="text-xl font-bold text-primary dark:text-white group-hover:text-emerald-500 transition-colors">
                    {hp.bentoEsgTitolo || (isIt ? 'Sostenibilità & Rating' : 'Sustainability & Ratings')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {hp.bentoEsgDesc || (isIt
                      ? 'Certificazioni ISO 9001, 14001, 45001, rating indipendente EcoVadis e Bilancio di Sostenibilità 2025 ufficiale.'
                      : 'ISO 9001, 14001, 45001 certificates, independent EcoVadis scorecard, and official 2025 Report.')}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5">
                  <Link
                    href={`/${lang}/sostenibilita`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-white hover:text-emerald-500 group-hover:gap-2.5 transition-all"
                  >
                    <span>{hp.bentoEsgBottone || (isIt ? 'Certificazioni & Bilancio' : 'Certifications & Report')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </ScrollSectionReveal>

            {/* Pilastro 3: Persone & Soci */}
            <ScrollSectionReveal direction="up" delay={0.3}>
              <div className="h-full flex flex-col justify-between group">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-500">
                    03 / {isIt ? 'PERSONE & SOCI' : 'PEOPLE & PARTNERS'}
                  </span>
                  <h3 className="text-xl font-bold text-primary dark:text-white group-hover:text-zefiro-cyan transition-colors">
                    {hp.bentoPeopleTitolo || (isIt ? 'Talento & Innovazione' : 'Talent & Innovation')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {hp.bentoPeopleDesc || (isIt
                      ? 'La joint venture paritetica al 50% tra WINDTRE e Iliad e il team ingegneristico che costruisce la rete del futuro.'
                      : 'The 50/50 joint venture between WINDTRE and Iliad, powered by an engineering team bridging the digital divide.')}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5">
                  <Link
                    href={`/${lang}/lavora-con-noi`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-white hover:text-zefiro-cyan group-hover:gap-2.5 transition-all"
                  >
                    <span>{hp.bentoPeopleBottone || (isIt ? 'Lavora con Noi' : 'Work with Us')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </ScrollSectionReveal>
          </div>
        </div>
      </section>

      {/* 4. SEZIONE ARCHIVIO & TRASPARENZA — LINEA MINIMALE PRIMA DEL FOOTER */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-zefiro-cyan">
                {isIt ? 'Trasparenza Societaria' : 'Corporate Transparency'}
              </p>
              <p className="text-sm sm:text-base text-gray-300 font-normal">
                {isIt
                  ? 'Certificazioni ufficiali, politiche ESG e relazioni societarie consultabili nell’Archivio.'
                  : 'Official certificates, ESG policies, and corporate records available in the Archive.'}
              </p>
            </div>
            <Link
              href={`/${lang}/documenti`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary border border-white/15 text-xs sm:text-sm font-bold transition-all shrink-0"
            >
              <span>{isIt ? 'Consulta l’Archivio' : 'View Archive'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
