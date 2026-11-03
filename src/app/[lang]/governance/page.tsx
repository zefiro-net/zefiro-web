import Link from 'next/link';
import type { Metadata } from 'next';
import { getGovernance } from '@/data';
import { getDictionary } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import type { Locale } from '@/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const isIt = lang === 'it';
  return {
    title: isIt
      ? 'Corporate Governance — Zefiro Net S.r.l.'
      : 'Corporate Governance — Zefiro Net S.r.l.',
    description: isIt
      ? 'Codice Etico, Modello di Organizzazione 231 e procedura Whistleblowing con piattaforma protetta Integrity Line di Zefiro Net S.r.l.'
      : 'Code of Ethics, Organizational Model 231, and Whistleblowing policy with encrypted Integrity Line platform of Zefiro Net S.r.l.',
  };
}

export default async function GovernancePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const data = getGovernance(lang);
  const isIt = lang === 'it';

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zefiro-cyan/10 text-zefiro-cyan text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse" />
              {data.hero.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {data.hero.titolo}
              <span className="text-zefiro-cyan">{data.hero.titoloAccento}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 h-1.5 bg-zefiro-cyan rounded-full mb-5 mx-auto" />
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
              {data.hero.sottotitolo}
            </p>

            {/* Quick Anchor Navigation Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <a
                href="#codice-etico"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-zefiro-cyan text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-zefiro-cyan transition-all shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zefiro-cyan" />
                {data.ancore.codiceEtico}
              </a>
              <a
                href="#modello-231"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-zefiro-cyan text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-zefiro-cyan transition-all shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {data.ancore.modello231}
              </a>
              <a
                href="#whistleblowing"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-zefiro-cyan text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-zefiro-cyan transition-all shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zefiro-teal" />
                {data.ancore.whistleblowing}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-20 sm:pb-28 space-y-20 sm:space-y-28">

        {/* 1. CODICE ETICO */}
        <section id="codice-etico" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {data.codiceEtico.badge}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight">
                  {data.codiceEtico.titolo}
                </h2>
                <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 self-start sm:self-auto">
                  {data.codiceEtico.delibera}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed">
                {data.codiceEtico.descrizione}
              </p>
            </div>

            {/* 6 Principi Grid */}
            <div className="mb-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
                {data.codiceEtico.sottotitoloPrincipi}
              </h3>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.codiceEtico.principi.map((p) => (
                  <StaggerItem key={p.numero}>
                    <div className="h-full p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-zefiro-cyan mb-3 block">
                          Principio {p.numero}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-primary dark:text-white mb-2 leading-snug">
                          {p.titolo}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                          {p.descrizione}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Download Box Codice Etico */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zefiro-teal/15 via-primary/5 to-transparent border border-zefiro-teal/30 dark:border-zefiro-teal/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-zefiro-teal/20 text-zefiro-teal dark:text-zefiro-cyan text-[11px] font-mono font-bold uppercase">
                    PDF • {data.codiceEtico.documento.dimensione}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {data.codiceEtico.documento.data}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-primary dark:text-white">
                  {data.codiceEtico.documento.titolo}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {data.codiceEtico.documento.descrizione}
                </p>
              </div>
              <a
                href={data.codiceEtico.documento.fileUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-zefiro-cyan text-white hover:text-primary dark:bg-zefiro-cyan dark:text-primary dark:hover:bg-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{dict.common?.scaricaPdf || 'Scarica PDF'}</span>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* 2. MODELLO 231 */}
        <section id="modello-231" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {data.modello231.badge}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight">
                  {data.modello231.titolo}
                </h2>
                <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
                  {data.modello231.edizioni}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed">
                {data.modello231.descrizione}
              </p>
            </div>

            {/* 4 Pilastri del Controllo */}
            <div className="mb-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
                {data.modello231.sottotitoloPilastri}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.modello231.pilastri.map((pilastro) => (
                  <div
                    key={pilastro.numero}
                    className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 mb-2 block">
                      Pilastro {pilastro.numero}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-primary dark:text-white mb-2 leading-snug">
                      {pilastro.titolo}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      {pilastro.descrizione}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* OdV Reporting Box & Download Modello 231 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* OdV Contacts Card */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-white/10 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {data.modello231.odv.titolo}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    {isIt ? 'Organo Monocratico di Vigilanza' : 'Monocratic Supervisory Body'}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    {data.modello231.odv.descrizione}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-gray-300">
                  <p>
                    <strong className="text-white">Email OdV:</strong>{' '}
                    <a href={`mailto:${data.modello231.odv.email}`} className="text-zefiro-cyan hover:underline font-mono">
                      {data.modello231.odv.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">{isIt ? 'Posta cartacea:' : 'Postal address:'}</strong>{' '}
                    <span className="text-gray-300">{data.modello231.odv.sede}</span>
                  </p>
                </div>
              </div>

              {/* Download Modello 231 */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase inline-block">
                    PDF • {data.modello231.documento.dimensione}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-primary dark:text-white">
                    {data.modello231.documento.titolo}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {data.modello231.documento.descrizione}
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    {isIt ? 'Approvazione:' : 'Approved:'} {data.modello231.documento.data}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={data.modello231.documento.fileUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>{dict.common?.scaricaPdf || 'Scarica PDF'}</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 3. WHISTLEBLOWING & INTEGRITY LINE */}
        <section id="whistleblowing" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {data.whistleblowing.badge}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight">
                  {data.whistleblowing.titolo}
                </h2>
                <span className="text-xs font-mono font-medium text-zefiro-cyan bg-zefiro-cyan/10 px-3 py-1 rounded-full border border-zefiro-cyan/20 self-start sm:self-auto">
                  {data.whistleblowing.normativa}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed">
                {data.whistleblowing.descrizione}
              </p>
            </div>

            {/* 3 Tutele Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {data.whistleblowing.tutele.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-2xl bg-zefiro-cyan/15 text-zefiro-cyan flex items-center justify-center mb-4 font-bold font-mono text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-primary dark:text-white mb-2">
                    {t.titolo}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {t.descrizione}
                  </p>
                </div>
              ))}
            </div>

            {/* Showcase Card Integrity Line (Primary Channel) */}
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-primary to-slate-950 text-white border border-white/15 shadow-2xl overflow-hidden mb-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-zefiro-cyan/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-zefiro-teal/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zefiro-cyan/20 text-zefiro-cyan text-xs font-bold uppercase tracking-wider border border-zefiro-cyan/30">
                    <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse" />
                    {data.whistleblowing.piattaforma.fornitore}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {data.whistleblowing.piattaforma.titolo}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                    {data.whistleblowing.piattaforma.descrizione}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {data.whistleblowing.piattaforma.caratteristiche.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                        <svg className="w-4 h-4 text-zefiro-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shrink-0 flex flex-col items-center gap-3 w-full sm:w-auto">
                  <a
                    href={data.whistleblowing.piattaforma.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-zefiro-cyan hover:bg-white text-primary font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
                  >
                    <span>{data.whistleblowing.piattaforma.ctaText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-[11px] text-gray-400 font-mono">
                    https://zefironet.integrityline.com/
                  </span>
                </div>
              </div>
            </div>

            {/* Canali Alternativi & Documenti Whistleblowing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Canali Alternativi OdV */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-primary dark:text-white mb-2">
                    {data.whistleblowing.canali.titolo}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {data.whistleblowing.canali.descrizione}
                  </p>
                  <div className="space-y-3 text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                    <p>
                      <strong className="text-primary dark:text-white">Email:</strong>{' '}
                      <a href={`mailto:${data.whistleblowing.canali.email}`} className="text-zefiro-cyan font-mono hover:underline">
                        {data.whistleblowing.canali.email}
                      </a>
                    </p>
                    <p>
                      <strong className="text-primary dark:text-white">{isIt ? 'Posta:' : 'Mail:'}</strong>{' '}
                      <span>{data.whistleblowing.canali.posta}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Due Documenti Scaricabili Whistleblowing */}
              <div className="lg:col-span-7 flex flex-col gap-4 justify-between">
                {data.whistleblowing.documenti.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-zefiro-cyan/15 text-zefiro-cyan text-[10px] font-mono font-bold uppercase">
                          PDF • {doc.dimensione}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {doc.data}
                        </span>
                      </div>
                      <h5 className="text-sm sm:text-base font-bold text-primary dark:text-white">
                        {doc.titolo}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                        {doc.descrizione}
                      </p>
                    </div>

                    <a
                      href={doc.fileUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-zefiro-cyan text-white hover:text-primary dark:bg-zefiro-cyan dark:text-primary dark:hover:bg-white font-bold text-xs shadow-sm transition-all shrink-0"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>{dict.common?.scaricaPdf || 'Scarica'}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 4. BOTTOM ARCHIVE STRIP */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zefiro-cyan">
              {isIt ? 'Archivio Documentale Unificato' : 'Unified Document Archive'}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-normal">
              {isIt
                ? 'Tutti i documenti societari, i bilanci, le certificazioni ISO e le politiche ESG sono raccolti nell\'Archivio.'
                : 'All corporate records, financial reports, ISO certifications, and ESG policies are accessible in the Archive.'}
            </p>
          </div>
          <Link
            href={`/${lang}/documenti`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-zefiro-cyan text-white hover:text-primary dark:bg-white dark:text-primary dark:hover:bg-zefiro-cyan text-xs sm:text-sm font-bold shadow-sm transition-all shrink-0"
          >
            <span>{isIt ? 'Accedi all\'Archivio' : 'Access Archive'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

      </div>
    </main>
  );
}
