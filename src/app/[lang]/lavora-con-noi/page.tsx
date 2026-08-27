import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';

export default async function LavoraConNoiPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.lavoraConNoi;

  const values = [
    {
      title: d.valore1Titolo,
      description: d.valore1Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: d.valore2Titolo,
      description: d.valore2Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: d.valore3Titolo,
      description: d.valore3Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 tall:pt-44 xl:tall:pt-48 pb-6 sm:pb-8 tall:pb-10 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl tall:text-5xl lg:tall:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {d.titolo}<span className="text-zefiro-cyan">{d.titoloAccento}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 tall:w-16 h-1.5 bg-zefiro-cyan rounded-full mb-4 sm:mb-5 tall:mb-7 mx-auto"></div>
            <p className="text-base sm:text-lg tall:text-xl md:tall:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {d.sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-16 sm:pb-24 tall:pb-32">
        <div className="mb-12 sm:mb-16 tall:mb-24">
          <FadeIn delay={0.3}>
            <h2 className="text-[11px] sm:text-xs tall:text-sm font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-6 sm:mb-8 tall:mb-10 text-center">{d.valoriTitolo}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 tall:gap-8">
            {values.map((val, i) => (
              <StaggerItem key={i}>
                <div className="h-full p-5 sm:p-6 tall:p-8 rounded-xl sm:rounded-2xl tall:rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 hover:border-zefiro-cyan/50 transition-all group shadow-md">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 tall:w-14 tall:h-14 rounded-xl sm:rounded-2xl bg-zefiro-cyan/20 flex items-center justify-center text-zefiro-cyan mb-4 sm:mb-5 tall:mb-6 group-hover:scale-105 transition-transform">
                    {val.icon}
                  </div>
                  <h3 className="text-base sm:text-lg tall:text-xl font-bold text-primary dark:text-white mb-1.5 sm:mb-2 tall:mb-3">{val.title}</h3>
                  <p className="text-xs sm:text-sm tall:text-base text-gray-600 dark:text-white/70 leading-relaxed font-normal">{val.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="relative rounded-2xl sm:rounded-3xl tall:rounded-[36px] overflow-hidden bg-gray-50/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-6 sm:p-10 tall:p-14 text-center max-w-3xl tall:max-w-4xl mx-auto shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zefiro-cyan to-transparent"></div>
            <h2 className="text-2xl sm:text-3xl tall:text-3xl lg:tall:text-4xl font-black text-primary dark:text-white mb-2 sm:mb-3 tall:mb-4 tracking-tight">
              {d.candidaturaTitolo}
            </h2>
            <p className="text-sm sm:text-base tall:text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
              {d.candidaturaDesc}
            </p>
            <a
              href="mailto:candidatura@zefironet.it"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-zefiro-cyan text-primary text-sm sm:text-base font-bold hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-lg group"
            >
              <span>candidatura@zefironet.it</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
