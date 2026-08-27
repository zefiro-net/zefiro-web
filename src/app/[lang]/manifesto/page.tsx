import { getManifesto } from '@/data';
import { getDictionary } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import type { ValoreManifesto } from '@/data/types';
import type { Locale } from '@/i18n';

const COLORE_MAP: Record<ValoreManifesto['coloreIcona'], string> = {
  cyan: 'bg-zefiro-cyan/10 text-zefiro-cyan',
  teal: 'bg-zefiro-teal/10 text-zefiro-teal',
  gray: 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200',
};

export default async function ManifestoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { pagina, valori } = getManifesto(lang);
  const sottotitolo = dict.manifesto?.sottotitolo || pagina.acf.sottotitolo;

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
              {dict.manifesto.titolo}
              <span className="text-zefiro-cyan">{dict.manifesto.titoloAccento}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col items-center">
            <div className="w-12 tall:w-16 h-1.5 bg-zefiro-cyan rounded-full mb-4 sm:mb-5 tall:mb-7 mx-auto"></div>
            <p className="text-base sm:text-lg tall:text-xl md:tall:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              {sottotitolo}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Manifesto Items */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 pb-16 sm:pb-24 tall:pb-32">
        <StaggerContainer className="space-y-3.5 sm:space-y-4 tall:space-y-5">
          {valori.map((valore) => (
            <StaggerItem key={valore.id}>
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 tall:gap-6 items-start p-4 sm:p-5 tall:p-6 rounded-xl sm:rounded-2xl tall:rounded-3xl bg-white dark:bg-slate-800/40 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 tall:w-14 tall:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg tall:text-xl ${COLORE_MAP[valore.coloreIcona]}`}>
                  {valore.numero}
                </div>
                <div>
                  <h2 className="text-base sm:text-lg tall:text-xl font-bold text-primary dark:text-white mb-1">{valore.titolo}</h2>
                  <p className="text-xs sm:text-sm tall:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal">{valore.descrizione}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
