import { getManifesto } from '@/data';
import { getDictionary } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import type { Locale } from '@/i18n';

// Pillar icons for high-tech executive feel
const PILLAR_ICONS = [
  // 01 - Inclusione Digitale
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // 02 - Sostenibilità e Condivisione
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  // 03 - Eccellenza B2B
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // 04 - Innovazione Responsabile
  <svg key="4" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // 05 - Integrità e Trasparenza
  <svg key="5" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>,
];

export default async function ManifestoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { pagina, valori } = getManifesto(lang);
  const isIt = lang === 'it';
  const sottotitolo = dict.manifesto?.sottotitolo || pagina.acf.sottotitolo;

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-zefiro-cyan/10 blur-[140px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 -z-10 w-[500px] h-[500px] bg-zefiro-teal/15 blur-[120px] rounded-full -ml-40 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zefiro-cyan/10 border border-zefiro-cyan/25 text-zefiro-cyan text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse"></span>
              {isIt ? 'I Nostri Principi Guida' : 'Our Guiding Principles'}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-primary dark:text-white mb-4 leading-[1.1]">
              {dict.manifesto.titolo}
              <span className="text-zefiro-cyan">{dict.manifesto.titoloAccento}</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex flex-col items-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Manifesto Cards Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl relative z-10 pb-20 sm:pb-28">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {valori.map((valore, index) => {
            const formattedNumber = String(index + 1).padStart(2, '0');
            const icon = PILLAR_ICONS[index % PILLAR_ICONS.length];
            const isFullWidth = index === valori.length - 1 && valori.length % 2 !== 0;

            return (
              <StaggerItem
                key={valore.id}
                className={isFullWidth ? 'md:col-span-2' : ''}
              >
                <div className="group relative h-full rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-zefiro-cyan/40 dark:hover:border-zefiro-cyan/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  
                  {/* Subtle Top Gradient Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zefiro-cyan/0 to-transparent group-hover:via-zefiro-cyan transition-all duration-500"></div>

                  {/* Watermark Number in Background */}
                  <div className="absolute right-4 bottom-2 text-7xl sm:text-8xl font-black text-gray-100 dark:text-white/[0.03] select-none pointer-events-none font-mono tracking-tighter group-hover:text-zefiro-cyan/[0.07] transition-colors duration-300">
                    {formattedNumber}
                  </div>

                  <div>
                    {/* Header: Uniform Number Badge + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        {/* Uniform Monospaced High-Tech Number Badge */}
                        <div className="flex items-center justify-center h-9 px-3 rounded-xl bg-gradient-to-br from-zefiro-cyan/15 to-zefiro-teal/20 border border-zefiro-cyan/30 text-zefiro-cyan font-mono text-sm font-black tracking-wider shadow-sm">
                          {formattedNumber}
                        </div>
                        {/* Pillar Tag */}
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                          {isIt ? `Pilastro ${index + 1}` : `Pillar ${index + 1}`}
                        </span>
                      </div>

                      {/* Icon Pill */}
                      <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 text-primary dark:text-zefiro-cyan flex items-center justify-center group-hover:scale-110 group-hover:bg-zefiro-cyan/10 transition-all duration-300">
                        {icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-3 tracking-tight group-hover:text-zefiro-cyan transition-colors">
                      {valore.titolo}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal relative z-10">
                      {valore.descrizione}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                    <span className="font-semibold text-[11px] tracking-wide uppercase text-zefiro-cyan/80">
                      Zefiro Net • Core Value
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zefiro-cyan/40 group-hover:bg-zefiro-cyan group-hover:scale-125 transition-all"></span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Closing Callout */}
        <FadeIn delay={0.4} className="mt-12 sm:mt-16">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-primary/95 to-slate-900 text-white p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-zefiro-cyan/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-zefiro-teal/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-black mb-3 text-white">
                {isIt ? 'Un impegno concreto per il futuro digitale d\'Italia' : 'A tangible commitment to Italy\'s digital future'}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {isIt
                  ? 'Il nostro manifesto guida ogni decisione operativa, tecnica e strategica per costruire reti 5G resilienti, inclusive e all\'avanguardia.'
                  : 'Our manifesto guides every operational, technical, and strategic decision to build resilient, inclusive, and next-generation 5G networks.'}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
