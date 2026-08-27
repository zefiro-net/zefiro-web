import { getChiSiamo, getCertificazioni } from '@/data';
import { getDictionary } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { TiltCard } from '@/components/animations/TiltCard';
import type { Locale } from '@/i18n';

const PARTNER_IT = [
  { id: 1, nome: 'WINDTRE', descrizione: "Socio al 50%, porta nella joint venture la solidità e la capillarità di uno dei principali operatori italiani." },
  { id: 2, nome: 'Iliad Italia', descrizione: "Socio al 50%, contribuisce con la spinta innovativa che ha rivoluzionato il mercato mobile in Italia." },
];
const PARTNER_EN = [
  { id: 1, nome: 'WINDTRE', descrizione: "50% shareholder, bringing the solidity and reach of one of Italy's main operators to the joint venture." },
  { id: 2, nome: 'Iliad Italia', descrizione: "50% shareholder, contributing the innovative drive that revolutionised the mobile market in Italy." },
];

function CertIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'esg':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
      );
    case 'iso':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>
      );
    case 'law':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      );
  }
}

export default async function ChiSiamoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const page = getChiSiamo(lang);
  const certs = getCertificazioni(lang);
  const dict = await getDictionary(lang);

  const PARTNER = lang === 'en' ? PARTNER_EN : PARTNER_IT;
  const sottotitolo = page.acf?.sottotitolo || "";
  const missioneTitolo = page.acf?.sezione_missione_titolo || dict.chiSiamo.missioneTitolo;
  const missioneTesto = page.acf?.sezione_missione_testo || "";
  const wholesaleTitolo = page.acf?.sezione_wholesale_titolo || dict.chiSiamo.wholesaleTitolo;
  const wholesaleTesto = page.acf?.sezione_wholesale_testo || "";

  return (
    <main className="relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 tall:pt-44 xl:tall:pt-48 pb-6 sm:pb-8 tall:pb-10 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-gray-200/50 dark:border-white/10 mb-3 sm:mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-primary dark:text-gray-300">
                {dict.chiSiamo.etichetta}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl tall:text-5xl lg:tall:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {dict.chiSiamo.titolo}
              <span className="text-zefiro-cyan">{dict.chiSiamo.titoloAccento}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col items-center">
            <div className="w-12 tall:w-16 h-1.5 bg-zefiro-cyan rounded-full mb-4 sm:mb-5 tall:mb-7 mx-auto"></div>
            <div className="text-base sm:text-lg tall:text-xl md:tall:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: sottotitolo }} />
          </FadeIn>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-12 sm:pb-16 tall:pb-20">
        {/* Mission & Wholesale Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 tall:gap-8 mb-10 sm:mb-14 tall:mb-16">
          <FadeIn delay={0.4} direction="left">
            <div className="group h-full p-5 sm:p-7 tall:p-10 rounded-2xl sm:rounded-3xl tall:rounded-[36px] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 tall:w-16 tall:h-16 rounded-xl sm:rounded-2xl bg-zefiro-cyan/10 flex items-center justify-center text-zefiro-cyan mb-4 sm:mb-6 tall:mb-8 group-hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 tall:w-7 tall:h-7"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h2 className="text-xl sm:text-2xl tall:text-2xl lg:tall:text-3xl font-black mb-3 sm:mb-4 tall:mb-6 text-primary dark:text-white tracking-tight">{missioneTitolo}</h2>
              <div className="text-sm sm:text-base tall:text-base lg:tall:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-normal" dangerouslySetInnerHTML={{ __html: missioneTesto }} />
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="right">
            <div className="group h-full p-5 sm:p-7 tall:p-10 rounded-2xl sm:rounded-3xl tall:rounded-[36px] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 tall:w-16 tall:h-16 rounded-xl sm:rounded-2xl bg-zefiro-teal/10 flex items-center justify-center text-zefiro-teal dark:text-zefiro-cyan mb-4 sm:mb-6 tall:mb-8 group-hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 tall:w-7 tall:h-7"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><polyline points="16 16 12 12 8 16"/></svg>
              </div>
              <h2 className="text-xl sm:text-2xl tall:text-2xl lg:tall:text-3xl font-black mb-3 sm:mb-4 tall:mb-6 text-primary dark:text-white tracking-tight">{wholesaleTitolo}</h2>
              <div className="text-sm sm:text-base tall:text-base lg:tall:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-normal" dangerouslySetInnerHTML={{ __html: wholesaleTesto }} />
            </div>
          </FadeIn>
        </div>

        {/* Certificazioni Section */}
        <section id="certificazioni" className="mb-10 sm:mb-14 tall:mb-16 scroll-mt-24 sm:scroll-mt-28">
          <FadeIn delay={0.1}>
            <div className="mb-4 sm:mb-6 tall:mb-8">
              <h2 className="text-2xl sm:text-3xl tall:text-3xl lg:tall:text-4xl font-black text-primary dark:text-white tracking-tight mb-2">
                {lang === 'it' ? 'Certificazioni e Conformità' : 'Certifications & Compliance'}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-normal">
                {lang === 'it' ? 'I più elevati standard internazionali di qualità, ambiente, sicurezza e governance.' : 'The highest international standards for quality, environment, safety, and governance.'}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 tall:gap-8">
            {certs.map((cert) => (
              <StaggerItem key={cert.id}>
                <div className="h-full p-5 sm:p-6 tall:p-8 rounded-xl sm:rounded-2xl tall:rounded-[28px] bg-gray-50/70 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 hover:border-zefiro-cyan/50 hover:shadow-md transition-all duration-300 shadow-sm group">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 tall:w-12 tall:h-12 rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-zefiro-cyan shadow-sm mb-3 sm:mb-4 tall:mb-6 group-hover:scale-105 transition-transform">
                    <CertIcon icon={cert.icona} />
                  </div>
                  <h3 className="text-base sm:text-lg tall:text-xl font-bold text-primary dark:text-white mb-1.5 sm:mb-2 tall:mb-3">{cert.titolo}</h3>
                  <p className="text-xs sm:text-sm tall:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-normal">{cert.descrizione}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Partners Section */}
        <section>
          <FadeIn delay={0.2}>
            <h3 className="text-[11px] sm:text-xs tall:text-sm font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-4 sm:mb-6 tall:mb-8 text-center">{lang === 'it' ? 'I NOSTRI SOCI' : 'OUR SHAREHOLDERS'}</h3>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 tall:gap-8">
            {PARTNER.map((partner) => (
              <StaggerItem key={partner.id}>
                <TiltCard>
                  <div className="relative group h-full p-5 sm:p-7 tall:p-10 rounded-2xl sm:rounded-3xl tall:rounded-[36px] bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-white/10 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl tall:text-3xl lg:tall:text-4xl font-black mb-2 sm:mb-3 tall:mb-4 text-primary dark:text-white">{partner.nome}</h3>
                    <div className="w-10 tall:w-12 h-1.5 bg-zefiro-cyan rounded-full mb-3 sm:mb-4 tall:mb-6 group-hover:w-16 tall:group-hover:w-20 transition-all duration-300"></div>
                    <p className="text-sm sm:text-base tall:text-lg lg:tall:text-xl text-gray-800 dark:text-gray-300 leading-relaxed font-normal">
                      {partner.descrizione}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </main>
  );
}
