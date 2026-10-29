import Link from 'next/link';
import { getManifesto } from '@/data';
import { getDictionary } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import type { Locale } from '@/i18n';

// Distinct SVG icons for each of the 6 Manifesto Pillars
const PILLAR_ICONS = [
  // 01 - Inclusione Digitale per i Territori (Globe / Map / Network)
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // 02 - Sostenibilità Ambientale & Decarbonizzazione (Leaf / Planet / Recycle)
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  // 03 - Centralità della Persona, Equità & Crescita (Users / Heart)
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // 04 - Innovazione Responsabile & Sinergie 5G (Lightning / Chip)
  <svg key="4" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // 05 - Integrità, Trasparenza & Governance Etica (Shield / Scale)
  <svg key="5" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // 06 - Eccellenza Wholesale & Resilienza di Rete (Antenna / Tower / Signal)
  <svg key="6" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.393 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>,
];

export default async function ManifestoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { pagina, valori } = getManifesto(lang);
  const isIt = lang === 'it';
  const sottotitolo = dict.manifesto?.sottotitolo || pagina.acf.sottotitolo;
  const preambolo = pagina.acf?.preambolo || (
    isIt
      ? 'Crediamo in un\'Italia connessa, senza barriere geografiche né divari tecnologici. Operiamo come abilitatore invisibile ma indispensabile: attraverso la condivisione virtuosa delle infrastrutture radiomobili, trasformiamo l\'accesso alla connettività ultra-broadband in un diritto concreto e condiviso per tutte le comunità.'
      : 'We believe in a seamlessly connected Italy, free from geographical barriers and technological divides. We act as an invisible yet vital enabler: through responsible mobile network sharing, we turn ultra-broadband access into an equitable, tangible reality for every community.'
  );

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-zefiro-cyan/10 blur-[140px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 -z-10 w-[500px] h-[500px] bg-zefiro-teal/15 blur-[120px] rounded-full -ml-40 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-6 sm:pb-8 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zefiro-cyan/10 text-zefiro-cyan text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse"></span>
              {isIt ? 'Carta dei Valori & Principi Guida' : 'Core Value Charter & Principles'}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {dict.manifesto.titolo}
              <span className="text-zefiro-cyan">{dict.manifesto.titoloAccento || (isIt ? 'Manifesto' : 'Manifesto')}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 h-1.5 bg-zefiro-cyan rounded-full mb-5 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-20 sm:pb-28 space-y-16 sm:space-y-20">

        {/* 1. DICHIARAZIONE FONDATIVA (Preambolo Editoriale - Non card) */}
        <section>
          <FadeIn delay={0.25}>
            <div className="relative p-7 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-primary/95 to-slate-950 text-white border border-white/15 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-zefiro-cyan/15 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-zefiro-teal/20 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24"></div>

              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-zefiro-cyan">
                  {isIt ? 'DICHIARAZIONE DI MANDATO' : 'STATEMENT OF PURPOSE'}
                </span>
                <p className="text-lg sm:text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-100 tracking-tight">
                  &ldquo;{preambolo}&rdquo;
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-300 font-medium">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-zefiro-cyan"></span>
                    {isIt ? '70% Territorio Coperto' : '70% National Territory'}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {isIt ? 'RAN Sharing Ecosostenibile' : 'Eco-Sustainable RAN Sharing'}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-zefiro-teal"></span>
                    {isIt ? 'Joint Venture Paritetica 50/50' : '50/50 Equal Joint Venture'}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 2. I 6 PRINCIPI GUIDA DEL MANIFESTO (Struttura Simmetrica 2x3 o 3x2) */}
        <section>
          <FadeIn delay={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {isIt ? 'I PILASTRI VALORIALI' : 'THE VALUE PILLARS'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-3">
                {isIt ? 'I Sei Principi di Zefiro Net' : 'The Six Principles of Zefiro Net'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {isIt
                  ? 'Ogni principio riflette la cultura aziendale, la visione industriale e il senso di responsabilità con cui operiamo ogni giorno.'
                  : 'Each principle reflects the corporate culture, industrial mandate, and sense of duty driving our everyday operations.'}
              </p>
            </div>
          </FadeIn>

          {/* Symmetrical Grid: 2 columns on tablet/desktop, 3 on xl */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {valori.map((valore, index) => {
              const formattedNumber = String(index + 1).padStart(2, '0');
              const icon = PILLAR_ICONS[index % PILLAR_ICONS.length];

              return (
                <StaggerItem key={valore.id}>
                  <div className="group relative h-full rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:border-zefiro-cyan/50 dark:hover:border-zefiro-cyan/50 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                    
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zefiro-cyan/0 to-transparent group-hover:via-zefiro-cyan transition-all duration-500"></div>

                    {/* Watermark Number in Background */}
                    <div className="absolute right-3 bottom-1 text-7xl font-black text-gray-100 dark:text-white/[0.03] select-none pointer-events-none font-mono tracking-tighter group-hover:text-zefiro-cyan/[0.08] transition-colors duration-300">
                      {formattedNumber}
                    </div>

                    <div>
                      {/* Badge Header: Number + Ambito + Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center h-8 px-2.5 rounded-lg bg-zefiro-cyan/15 text-zefiro-cyan font-mono text-xs font-black tracking-wider border border-zefiro-cyan/30">
                            {formattedNumber}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            {valore.ambito}
                          </span>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-primary dark:text-zefiro-cyan flex items-center justify-center group-hover:scale-110 group-hover:bg-zefiro-cyan/10 transition-all duration-300">
                          {icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-primary dark:text-white mb-3 tracking-tight group-hover:text-zefiro-cyan transition-colors leading-snug">
                        {valore.titolo}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-5 relative z-10">
                        {valore.descrizione}
                      </p>
                    </div>

                    {/* Impegno Concreto Banner */}
                    <div className="pt-4 border-t border-gray-100 dark:border-white/5 relative z-10">
                      <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-[11px] leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="font-bold text-zefiro-teal dark:text-zefiro-cyan uppercase tracking-wider block mb-1">
                          {isIt ? 'L\'Impegno Concreto:' : 'Tangible Commitment:'}
                        </span>
                        {valore.impegno}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        {/* 3. PATTO PER I TERRITORI (Struttura Editoriale a Due Colonne - Non card) */}
        <section className="pt-4">
          <FadeIn delay={0.3}>
            <div className="p-8 sm:p-12 rounded-3xl bg-gray-50/80 dark:bg-slate-900/40 border border-gray-200/80 dark:border-white/10">
              <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                
                {/* Left Column: Narrative */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan block">
                    {isIt ? 'LA NOSTRA RESPONSABILITÀ' : 'OUR CORPORATE RESPONSIBILITY'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight">
                    {isIt
                      ? 'Connettere l\'Italia senza lasciare indietro nessuno'
                      : 'Connecting Italy Leaving No Community Behind'}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {isIt
                      ? 'Zefiro Net opera in un territorio vasto e strategico: le aree a fallimento di mercato o a bassa densità demografica. In questi contesti, la duplicazione delle reti concorrenti sarebbe insostenibile dal punto di vista economico ed ecologico. Attraverso il RAN sharing paritetico, trasformiamo una sfida infrastrutturale complessa in un modello sostenibile e resiliente a beneficio di tutti.'
                      : 'Zefiro Net operates across a vast and strategic territory: rural and lower-density regions. In these areas, duplicate competing networks would be economically and ecologically unsustainable. Through shared RAN infrastructure, we turn a complex challenge into a sustainable, resilient model serving society.'}
                  </p>
                  
                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap gap-4">
                    <Link
                      href={`/${lang}/chi-siamo`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>{isIt ? 'Scopri Chi Siamo' : 'About Us'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </Link>
                    <Link
                      href={`/${lang}/tecnologia`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 text-primary dark:text-white border border-gray-200 dark:border-white/10 font-bold text-xs sm:text-sm transition-all"
                    >
                      <span>{isIt ? 'Come funziona il RAN Sharing' : 'How RAN Sharing Works'}</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: 3 Pillars Metrics (Non-card vertical stack) */}
                <div className="lg:col-span-5 space-y-3.5">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl sm:text-2xl font-black text-primary dark:text-zefiro-cyan font-mono">100%</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-zefiro-teal dark:text-zefiro-cyan">Wholesale B2B</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {isIt
                        ? 'Modello di business virtuoso, dedicato esclusivamente a fornire infrastrutture radiomobili ai soci operatori.'
                        : 'Dedicated wholesale business model providing shared mobile infrastructure to shareholder operators.'}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl sm:text-2xl font-black text-primary dark:text-zefiro-cyan font-mono">70%</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-zefiro-teal dark:text-zefiro-cyan">Territorio Italiano</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {isIt
                        ? 'Copertura capillare delle zone rurali con circa 7.000 torri e siti radiomobili attivi.'
                        : 'Widespread rural coverage powered by approximately 7,000 active transmission sites.'}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl sm:text-2xl font-black text-primary dark:text-zefiro-cyan font-mono">Net Zero</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-zefiro-teal dark:text-zefiro-cyan">Target 2030</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {isIt
                        ? 'Piano strategico di decarbonizzazione e abbattimento dei consumi energetici su tutti i siti.'
                        : 'Decarbonization strategy and energy efficiency roadmap across all active sites.'}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </section>

      </div>
    </main>
  );
}
