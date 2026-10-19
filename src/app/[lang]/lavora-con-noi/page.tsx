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
      ),
    },
    {
      title: d.valore2Titolo,
      description: d.valore2Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: d.valore3Titolo,
      description: d.valore3Desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const hrPrograms = [
    {
      titolo: lang === 'it' ? 'Company Development Program & Feedback 360°' : 'Company Development Program & 360° Feedback',
      descrizione:
        lang === 'it'
          ? 'Un sistema di crescita strutturato che unisce autovalutazione sui valori aziendali, feedback incrociato tra colleghi e piani di incentivazione a breve termine (STIP) orientati a obiettivi di squadra.'
          : 'A structured talent growth system combining self-assessment on company values, peer-to-peer 360° feedback, and Short Term Incentive Plans (STIP) tied to collective milestones.',
      icona: '🎯',
    },
    {
      titolo: lang === 'it' ? 'Buddy Program per l\'Onboarding' : 'Buddy Onboarding Program',
      descrizione:
        lang === 'it'
          ? 'Ogni neoassunto viene affiancato da un collega esperto di un\'altra area che fa da mentore e guida per facilitare l\'orientamento, le relazioni e l\'integrazione nella cultura aziendale fin dalla prima settimana.'
          : 'Every new joiner is paired with an experienced colleague from another department who serves as a mentor, guiding orientation, networking, and cultural integration from day one.',
      icona: '🤝',
    },
    {
      titolo: lang === 'it' ? 'Welfare & Work-Life Balance' : 'Corporate Welfare & Wellbeing',
      descrizione:
        lang === 'it'
          ? 'Contributo welfare flessibile, buoni pasto, fondo previdenziale Telemaco, assistenza sanitaria integrativa Assidim e Unisalute, convenzioni dedicate e attenzione all\'equilibrio tra vita privata e lavoro.'
          : 'Flexible welfare allowances, meal vouchers, Telemaco pension funds, comprehensive supplementary healthcare (Assidim, Unisalute), and an ongoing focus on work-life harmony.',
      icona: '🌿',
    },
  ];

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
              {lang === 'it' ? 'CARRIERE & PERSONE' : 'CAREERS & PEOPLE'}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
              {d.titolo}
              <span className="text-zefiro-cyan">{d.titoloAccento}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 h-1.5 bg-zefiro-cyan rounded-full mb-5 mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {d.sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 pb-20 sm:pb-28 space-y-16 sm:space-y-20">
        
        {/* I 3 Valori People */}
        <div>
          <FadeIn delay={0.3}>
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-8 text-center">
              {d.valoriTitolo}
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {values.map((val, i) => (
              <StaggerItem key={i}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200/60 dark:border-white/10 hover:border-zefiro-cyan/50 transition-all group shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-zefiro-cyan/20 flex items-center justify-center text-zefiro-cyan mb-5 group-hover:scale-105 transition-transform">
                    {val.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-white mb-2 leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Company Development Program & Onboarding */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gray-50/80 dark:bg-slate-900/60 border border-gray-200/80 dark:border-white/10 shadow-sm">
          <FadeIn delay={0.2}>
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-zefiro-cyan mb-2 block">
                {lang === 'it' ? 'CRESCITA PROFESSIONALE' : 'PROFESSIONAL GROWTH'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tight mb-2">
                {d.peopleProgramTitolo}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {d.peopleProgramDesc}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {hrPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200/60 dark:border-white/5 shadow-sm"
              >
                <div className="text-2xl mb-3">{prog.icona}</div>
                <h3 className="text-base font-bold text-primary dark:text-white mb-2">
                  {prog.titolo}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {prog.descrizione}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Candidatura Spontanea */}
        <FadeIn direction="up" delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800/80 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zefiro-cyan to-transparent"></div>
            <h2 className="text-2xl sm:text-3xl font-black text-primary dark:text-white mb-3 tracking-tight">
              {d.candidaturaTitolo}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed font-normal">
              {d.candidaturaDesc}
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href="mailto:recruiting@zefironet.it"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-zefiro-cyan text-primary text-base font-black hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95 shadow-lg group"
              >
                <span>recruiting@zefironet.it</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <span className="text-xs text-gray-500 italic">
                {d.candidaturaNote}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
