import { getSostenibilita } from '@/data';
import { getDictionary } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import type { Locale } from '@/i18n';

export default async function SostenibilitaPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const data = getSostenibilita(lang);

  // Divide certifications into 3 ISO certificates and 2 ESG ratings for perfect symmetry
  const isoCerts = data.certificazioni.items.filter(
    (c) => c.id.startsWith('iso')
  );
  const esgRatings = data.certificazioni.items.filter(
    (c) => !c.id.startsWith('iso')
  );

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {data.hero.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {data.hero.titolo}
              <span className="text-emerald-500">{data.hero.titoloAccento}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 h-1.5 bg-emerald-500 rounded-full mb-5 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {data.hero.sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-20 sm:pb-28 space-y-20 sm:space-y-28">

        {/* 1. BILANCIO DI SOSTENIBILITÀ 2025 (Banner Ufficiale) */}
        <section id="bilancio" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="relative p-7 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-primary/95 to-slate-950 text-white border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-zefiro-cyan/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-3xl space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-white/10">
                    <span>{data.bilancio.badge}</span>
                    <span className="text-white/40">•</span>
                    <span>{data.bilancio.anno}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {data.bilancio.titolo}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    {data.bilancio.descrizione}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a
                    href={data.bilancio.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <span>{dict.common.scaricaPdf} ({data.bilancio.dimensione})</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 2. CERTIFICAZIONI AZIENDALI (Divise in Gruppi Simmetrici: 3 ISO + 2 ESG) */}
        <section id="certificazioni" className="scroll-mt-24 space-y-12">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {data.certificazioni.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-3">
                {data.certificazioni.titolo}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {data.certificazioni.sottotitolo}
              </p>
            </div>
          </FadeIn>

          {/* Sottosezione A: Sistema di Gestione Integrato (3 Norme ISO - 3 Colonne Simmetriche) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-zefiro-cyan"></div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {lang === 'it' ? 'Sistema di Gestione Integrato (Norme ISO)' : 'Integrated Management System (ISO Standards)'}
              </h3>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {isoCerts.map((cert) => (
                <StaggerItem key={cert.id}>
                  <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/60 border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-zefiro-cyan/50 hover:shadow-xl transition-all duration-300">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zefiro-teal dark:text-zefiro-cyan mb-2 block">
                        {cert.categoria}
                      </span>
                      <h4 className="text-lg font-bold text-primary dark:text-white mb-1.5 leading-snug">
                        {cert.titolo}
                      </h4>
                      {cert.codice && (
                        <p className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 mb-3">
                          {cert.codice}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-6">
                        {cert.descrizione}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                      {cert.fileUrl && (
                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-zefiro-cyan/15 hover:text-primary dark:bg-white/5 dark:hover:bg-zefiro-cyan/20 text-primary dark:text-white font-bold text-xs sm:text-sm transition-all group"
                        >
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-zefiro-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                            <span>{dict.common.scaricaPdf}</span>
                          </span>
                          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                            {cert.dimensione}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Sottosezione B: Rating ESG & Riconoscimenti di Sostenibilità (2 Colonne Simmetriche) */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {lang === 'it' ? 'Rating ESG & Responsabilità Sociale' : 'ESG Ratings & Social Accountability'}
              </h3>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {esgRatings.map((cert) => (
                <StaggerItem key={cert.id}>
                  <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/60 border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {cert.categoria}
                        </span>
                        {cert.inArrivo && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                            {dict.common.inArrivo}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-1.5 leading-snug">
                        {cert.titolo}
                      </h4>
                      {cert.codice && (
                        <p className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 mb-3">
                          {cert.codice}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-6">
                        {cert.descrizione}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                      {cert.fileUrl ? (
                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-emerald-500/15 hover:text-primary dark:bg-white/5 dark:hover:bg-emerald-500/20 text-primary dark:text-white font-bold text-xs sm:text-sm transition-all group"
                        >
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                            <span>{dict.common.scaricaPdf}</span>
                          </span>
                          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                            {cert.dimensione}
                          </span>
                        </a>
                      ) : (
                        <div className="text-xs text-gray-500 italic py-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>{lang === 'it' ? 'In corso di rilascio da ente certificatore accreditato' : 'Under formal release by accredited audit body'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 3. POLITICHE ESG (3 Card Simmetriche) */}
        <section id="politiche" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {data.politiche.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-3">
                {data.politiche.titolo}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {data.politiche.sottotitolo}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {data.politiche.items.map((pol) => (
              <StaggerItem key={pol.id}>
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/60 border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-zefiro-cyan/50 hover:shadow-xl transition-all duration-300">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zefiro-teal dark:text-zefiro-cyan mb-2 block">
                      {pol.categoria}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-3 leading-snug">
                      {pol.titolo}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-6">
                      {pol.descrizione}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                    {pol.fileUrl && (
                      <a
                        href={pol.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-zefiro-cyan/15 hover:text-primary dark:bg-white/5 dark:hover:bg-zefiro-cyan/20 text-primary dark:text-white font-bold text-xs sm:text-sm transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-zefiro-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                          </svg>
                          <span>{dict.common.scaricaPdf}</span>
                        </span>
                        <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                          {pol.dimensione}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* 4. PIANO ESG (Struttura Roadmap Editoriale - Non card asimmetriche) */}
        <section id="piano-esg" className="scroll-mt-24 pt-4">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {data.pianoEsg.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-3">
                {data.pianoEsg.titolo}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-4">
                {data.pianoEsg.sottotitolo}
              </p>
            </div>

            {/* Note box regarding approval with Ezio */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-3 mb-10">
              <svg className="w-5 h-5 shrink-0 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <span className="font-bold">{lang === 'it' ? 'Nota di Validazione:' : 'Validation Note:'}</span>{' '}
                {data.pianoEsg.statoRevisione}
              </div>
            </div>
          </FadeIn>

          {/* Connected Strategic Roadmap Process Flow */}
          <div className="space-y-4">
            {data.pianoEsg.pilastri.map((pilastro, index) => (
              <FadeIn key={pilastro.numero} delay={0.1 * index}>
                <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-all group">
                  <div className="grid lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Step Number + Pillar Title & Scope */}
                    <div className="lg:col-span-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zefiro-cyan/20 to-emerald-500/20 border border-zefiro-cyan/30 text-zefiro-cyan dark:text-white font-mono font-black flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                        {pilastro.numero}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-1">
                          {lang === 'it' ? `Direttrice Strategica ${index + 1}` : `Strategic Axis ${index + 1}`}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white leading-snug group-hover:text-zefiro-cyan transition-colors">
                          {pilastro.titolo}
                        </h3>
                      </div>
                    </div>

                    {/* Middle: Narrative Description */}
                    <div className="lg:col-span-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pilastro.descrizione}
                    </div>

                    {/* Right: Concrete Targets List */}
                    <div className="lg:col-span-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-white/5 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zefiro-teal dark:text-zefiro-cyan block">
                        {lang === 'it' ? 'Obiettivi & Azioni Chiave' : 'Key Targets & Milestones'}
                      </span>
                      <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                        {pilastro.obiettivi.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
