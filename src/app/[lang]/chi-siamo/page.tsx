import { getChiSiamo, getSedi } from '@/data';
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

          {/* 2 Symmetric Pillars: Missione & Visione */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <FadeIn delay={0.3} direction="left">
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zefiro-cyan/15 text-zefiro-cyan flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="12" r="6"/>
                      <circle cx="12" cy="12" r="2"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zefiro-cyan block mb-1">
                    {lang === 'it' ? 'Il Nostro Scopo' : 'Our Purpose'}
                  </span>
                  <h3 className="text-2xl font-black text-primary dark:text-white mb-3 tracking-tight">
                    {page.acf?.sezione_missione_titolo}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                    {page.acf?.sezione_missione_testo}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="right">
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 block mb-1">
                    {lang === 'it' ? 'La Nostra Prospettiva' : 'Our Perspective'}
                  </span>
                  <h3 className="text-2xl font-black text-primary dark:text-white mb-3 tracking-tight">
                    {page.acf?.sezione_visione_titolo}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                    {page.acf?.sezione_visione_testo}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Panoramic Wholesale Banner */}
          <FadeIn delay={0.5}>
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-primary/95 text-white border border-white/10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zefiro-cyan">
                  {lang === 'it' ? 'MODELLO DI BUSINESS' : 'BUSINESS MODEL'}
                </span>
                <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {page.acf?.sezione_wholesale_titolo}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {page.acf?.sezione_wholesale_testo}
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href={`/${lang}/tecnologia`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zefiro-cyan hover:bg-white text-primary font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>{lang === 'it' ? 'Approfondisci il RAN Sharing' : 'Discover RAN Sharing'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 3. I NOSTRI VALORI & MANIFESTO (Struttura Editoriale Simmetrica - Non 5 card) */}
        <section id="valori" className="scroll-mt-24">
          <FadeIn delay={0.2}>
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-gray-50/80 dark:bg-slate-900/50 border border-gray-200/80 dark:border-white/10 shadow-lg">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Side: Statement & CTA */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan block">
                    {dict.chiSiamo.valoriTitolo}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-primary dark:text-white tracking-tight">
                    {lang === 'it' ? 'I Principi che Guidano Zefiro Net' : 'The Principles Guiding Zefiro Net'}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {lang === 'it'
                      ? 'L\'identità di Zefiro Net si fonda su sei pilastri valoriali che orientano ogni scelta tecnica, strategica e relazionale: inclusione dei territori, tutela ambientale, benessere delle persone, innovazione etica, trasparenza e massima affidabilità operativa.'
                      : 'Zefiro Net\'s identity is rooted in six core pillars steering every technological, strategic, and personal choice: territorial inclusion, ecological stewardship, people well-being, ethical innovation, transparency, and operational excellence.'}
                  </p>
                  
                  <div className="pt-2">
                    <Link
                      href={`/${lang}/manifesto`}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                      <span>{lang === 'it' ? 'Leggi il Nostro Manifesto' : 'Read Our Manifesto'}</span>
                      <svg className="w-4 h-4 text-zefiro-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Side: 2x2 Balanced Pillar Matrix */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm">
                    <span className="text-xs font-mono font-bold text-zefiro-cyan block mb-1">01 • TERRITORI</span>
                    <h4 className="text-base font-bold text-primary dark:text-white mb-1.5">
                      {lang === 'it' ? 'Inclusione Digitale' : 'Digital Inclusion'}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {lang === 'it'
                        ? 'Superamento del digital divide per 16 milioni di residenti nel 70% del Paese.'
                        : 'Bridging the digital divide for 16 million residents across 70% of Italy.'}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm">
                    <span className="text-xs font-mono font-bold text-emerald-500 block mb-1">02 • AMBIENTE</span>
                    <h4 className="text-base font-bold text-primary dark:text-white mb-1.5">
                      {lang === 'it' ? 'Decarbonizzazione' : 'Decarbonization'}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {lang === 'it'
                        ? 'RAN sharing per evitare torri duplicate, tagliare i consumi e mirare a Net Zero.'
                        : 'RAN sharing preventing tower duplication and advancing toward Net Zero.'}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm">
                    <span className="text-xs font-mono font-bold text-zefiro-teal dark:text-zefiro-cyan block mb-1">03 • PERSONE</span>
                    <h4 className="text-base font-bold text-primary dark:text-white mb-1.5">
                      {lang === 'it' ? 'Equità & Benessere' : 'Equity & Well-Being'}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {lang === 'it'
                        ? 'Sicurezza certificata ISO 45001, pari opportunità e percorsi di crescita continui.'
                        : 'ISO 45001 certified safety, equal opportunity, and continuous career growth.'}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm">
                    <span className="text-xs font-mono font-bold text-purple-400 block mb-1">04 • GOVERNANCE</span>
                    <h4 className="text-base font-bold text-primary dark:text-white mb-1.5">
                      {lang === 'it' ? 'Etica & Trasparenza' : 'Ethics & Transparency'}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {lang === 'it'
                        ? 'Modello 231, OdV autonomo, qualità certificata ISO 9001 e rating EcoVadis.'
                        : 'Model 231, autonomous OdV, ISO 9001 certification, and EcoVadis rating.'}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
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
