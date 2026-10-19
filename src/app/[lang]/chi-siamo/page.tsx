import { getChiSiamo, getValori, getSedi } from '@/data';
import { getDictionary } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { TiltCard } from '@/components/animations/TiltCard';
import Link from 'next/link';
import type { Locale } from '@/i18n';

const PARTNER_IT = [
  {
    id: 1,
    nome: 'WINDTRE',
    quota: '50%',
    descrizione:
      'Socio al 50%, porta nella joint venture la solidità, l\'esperienza ingegneristica e la capillare presenza sul territorio di uno dei principali operatori di telecomunicazioni in Italia.',
  },
  {
    id: 2,
    nome: 'Iliad Italia',
    quota: '50%',
    descrizione:
      'Socio al 50%, contribuisce con la spinta all\'innovazione, la dinamicità e la visione strategica che hanno rivoluzionato e accelerato il mercato delle telecomunicazioni in Italia.',
  },
];

const PARTNER_EN = [
  {
    id: 1,
    nome: 'WINDTRE',
    quota: '50%',
    descrizione:
      '50% shareholder, bringing industrial stability, engineering depth, and extensive territorial reach of a leading Italian telecom operator into the joint venture.',
  },
  {
    id: 2,
    nome: 'Iliad Italia',
    quota: '50%',
    descrizione:
      '50% shareholder, contributing the innovative drive, dynamism, and consumer-centric vision that revolutionized mobile telecommunications in Italy.',
  },
];

export default async function ChiSiamoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const page = getChiSiamo(lang);
  const valori = getValori(lang);
  const sedi = getSedi(lang);
  const dict = await getDictionary(lang);

  const PARTNER = lang === 'en' ? PARTNER_EN : PARTNER_IT;
  const sottotitolo = page.acf?.sottotitolo || "";

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
              {dict.chiSiamo.etichetta}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {dict.chiSiamo.titolo}
              <span className="text-zefiro-cyan">{dict.chiSiamo.titoloAccento}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 h-1.5 bg-zefiro-cyan rounded-full mb-5 mx-auto"></div>
            <div
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: sottotitolo }}
            />
          </FadeIn>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-20 sm:pb-28 space-y-16 sm:space-y-24">

        {/* 1. STORIA & DESCRIZIONE AZIENDALE (Da BROCHURE AZIENDALE) */}
        <section id="storia" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-lg">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {lang === 'it' ? 'LE ORIGINI E LA MISSIONE' : 'ORIGINS & MANDATE'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary dark:text-white tracking-tight mb-6">
                {dict.chiSiamo.storiaTitolo}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-slate-800/40 border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-zefiro-cyan/20 text-zefiro-cyan font-bold flex items-center justify-center mb-3 text-sm">
                    1
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: page.acf?.storia_testo_1 || '' }} />
                </div>
                <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-slate-800/40 border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-zefiro-cyan/20 text-zefiro-cyan font-bold flex items-center justify-center mb-3 text-sm">
                    2
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: page.acf?.storia_testo_2 || '' }} />
                </div>
                <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-slate-800/40 border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-zefiro-cyan/20 text-zefiro-cyan font-bold flex items-center justify-center mb-3 text-sm">
                    3
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: page.acf?.storia_testo_3 || '' }} />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 2. VISIONE E MISSIONE */}
        <section id="missione" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {dict.chiSiamo.missioneTitolo}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-2">
                {lang === 'it' ? 'Guida Strategica & Obiettivi' : 'Strategic Roadmap & Goals'}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 italic">
                {dict.chiSiamo.missioneNota}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.3} direction="left">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zefiro-cyan/15 text-zefiro-cyan flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="6"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {page.acf?.sezione_missione_titolo}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {page.acf?.sezione_missione_testo}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {page.acf?.sezione_visione_titolo}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {page.acf?.sezione_visione_testo}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="right" className="md:col-span-2 lg:col-span-1">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zefiro-teal/15 text-zefiro-teal dark:text-zefiro-cyan flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polyline points="16 16 12 12 8 16"/>
                      <line x1="12" y1="12" x2="12" y2="21"/>
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                      <polyline points="16 16 12 12 8 16"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                    {page.acf?.sezione_wholesale_titolo}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {page.acf?.sezione_wholesale_testo}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. I NOSTRI VALORI (Da Company Developer Program) */}
        <section id="valori" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {dict.chiSiamo.valoriTitolo}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight mb-2">
                {lang === 'it' ? 'I Principi che Guidano Zefiro Net' : 'The Principles Guiding Zefiro Net'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                {dict.chiSiamo.valoriSottotitolo}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {valori.map((v, idx) => {
              const isLast = idx === valori.length - 1 && valori.length % 3 !== 0;
              return (
                <StaggerItem key={v.id} className={isLast ? 'md:col-span-2 lg:col-span-1' : ''}>
                  <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800/60 border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-zefiro-cyan/50 hover:shadow-xl transition-all duration-300 group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-zefiro-cyan/15 text-zefiro-cyan">
                          {v.numero}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-zefiro-cyan/50 group-hover:bg-zefiro-cyan transition-colors"></span>
                      </div>
                      <h3 className="text-lg font-bold text-primary dark:text-white mb-2 leading-snug">
                        {v.titolo}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-4">
                        {v.descrizione}
                      </p>
                    </div>
                    {v.dettaglio && (
                      <div className="pt-3 border-t border-gray-100 dark:border-white/5 text-[11px] font-semibold text-zefiro-teal dark:text-zefiro-cyan/90 uppercase tracking-wider">
                        {v.dettaglio}
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        {/* 4. I SOCI PARITETICI (50% WINDTRE & 50% ILIAD) */}
        <section id="soci" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {dict.chiSiamo.sociTitolo}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight">
                {lang === 'it' ? 'La Forza di Due Grandi Operatori' : 'The Combined Strength of Two Leading Operators'}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNER.map((partner) => (
              <StaggerItem key={partner.id}>
                <TiltCard>
                  <div className="relative group h-full p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-slate-800/50 border border-gray-200/80 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-primary dark:text-white">
                        {partner.nome}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zefiro-cyan/15 text-zefiro-cyan border border-zefiro-cyan/30">
                        {partner.quota}
                      </span>
                    </div>
                    <div className="w-10 h-1 bg-zefiro-cyan rounded-full mb-5 group-hover:w-16 transition-all duration-300"></div>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                      {partner.descrizione}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* 5. LE NOSTRE SEDI (OK COME SONO ORA) */}
        <section id="sedi" className="scroll-mt-24 pt-4">
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                  {dict.chiSiamo.sediTitolo}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight">
                  {lang === 'it' ? 'Milano & Roma' : 'Milan & Rome'}
                </h2>
              </div>
              <Link
                href={`/${lang}/sedi`}
                className="inline-flex items-center gap-2 text-sm font-bold text-zefiro-cyan hover:underline group"
              >
                <span>{lang === 'it' ? 'Visualizza dettagli e mappe' : 'View office details & maps'}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {sedi.map((sede) => (
              <div
                key={sede.id}
                className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-zefiro-cyan/40 transition-all"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-zefiro-cyan/15 text-primary dark:text-zefiro-cyan text-[11px] font-bold uppercase tracking-wider mb-4">
                  {sede.tipo}
                </div>
                <h3 className="text-2xl font-black text-primary dark:text-white mb-2">
                  {sede.citta} — {sede.nome}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-normal">
                  {sede.indirizzo}{sede.cap ? `, ${sede.cap}` : ''}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {sede.descrizione}
                </p>
                <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                  <a
                    href={`mailto:${sede.emailContatto}`}
                    className="text-xs sm:text-sm font-mono font-bold text-zefiro-cyan hover:underline"
                  >
                    {sede.emailContatto}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
