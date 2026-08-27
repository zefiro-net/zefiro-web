import Image from 'next/image';
import { getSedi } from '@/data';
import { FadeIn } from '@/components/animations/FadeIn';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';
import type { Sede } from '@/data/types';

import fotoMilano from '@/media/sede_milano.jpg';
import fotoRoma from '@/media/sede_roma.jpeg';

function SectionSede({ sede, index }: { sede: Sede, index: number }) {
  const isEven = index % 2 === 0;
  const testoRicerca = `${sede.citta} ${sede.nome}`.toLowerCase();
  const fotoLocale = (sede.id === 201 || testoRicerca.includes('milan'))
    ? fotoMilano
    : (sede.id === 202 || testoRicerca.includes('rom'))
    ? fotoRoma
    : fotoMilano;
  const hasWpImage = sede.immagine && typeof sede.immagine === 'string' && sede.immagine.startsWith('http');
  const fotoSrc = hasWpImage ? sede.immagine : fotoLocale;

  return (
    <section className="relative w-full py-6 sm:py-8 tall:py-12 overflow-hidden">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16`}>
        <div className="w-full lg:w-3/5">
          <FadeIn direction={isEven ? "left" : "right"}>
            <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl tall:rounded-[36px] overflow-hidden shadow-xl border border-white/10 group">
              {fotoSrc && (
                <Image
                  src={fotoSrc}
                  alt={`Sede di ${sede.citta}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zefiro-teal/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-zefiro-cyan/90 backdrop-blur-md text-primary text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
                  {sede.tipo.replace(/_/g, ' ')}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="w-full lg:w-2/5 text-gray-900 dark:text-white">
          <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
            <div className="space-y-3 sm:space-y-4 tall:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl tall:text-3xl lg:tall:text-4xl font-black tracking-tight mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-white dark:to-white/70">
                  {sede.citta}
                </h2>
              </div>
              <div className="p-5 sm:p-6 tall:p-8 rounded-xl sm:rounded-2xl tall:rounded-[28px] bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-md space-y-3.5 sm:space-y-4 tall:space-y-5">
                {sede.indirizzo && (
                  <address className="not-italic space-y-0.5">
                    <p className="text-gray-900 dark:text-white text-sm sm:text-base tall:text-lg font-bold">{sede.indirizzo}</p>
                    <p className="text-gray-600 dark:text-white/80 text-xs sm:text-sm tall:text-base font-normal">{sede.nome}{sede.cap ? ` — ${sede.cap} ${sede.citta} (${sede.provincia})` : ''}</p>
                  </address>
                )}
                {sede.descrizione && (
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm tall:text-base leading-relaxed font-normal">
                    {sede.descrizione}
                  </p>
                )}
                <div className="pt-3 sm:pt-4 tall:pt-5 border-t border-gray-100 dark:border-white/10">
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-zefiro-cyan mb-1">{sede.labelEmail || 'CONTATTI'}</p>
                  <a href={`mailto:${sede.emailContatto}`} className="text-sm sm:text-base tall:text-lg font-medium text-primary dark:text-white hover:text-zefiro-cyan transition-colors break-all flex items-center gap-2 group">
                    <span>{sede.emailContatto}</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default async function SediPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sedi = getSedi(lang);

  return (
    <main className="relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-zefiro-cyan/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-zefiro-teal/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 tall:pt-44 xl:tall:pt-48 pb-6 sm:pb-8 tall:pb-10 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <FadeIn direction="none" delay={0.1}>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl tall:text-5xl lg:tall:text-6xl font-black tracking-tight text-primary dark:text-white mb-3 sm:mb-4 leading-[1.1]">
                {dict.sedi.titolo}
                <span className="text-zefiro-cyan">{dict.sedi.titoloAccento}</span>
              </h1>
              <div className="w-12 tall:w-16 h-1.5 bg-zefiro-cyan rounded-full mb-4 sm:mb-5 tall:mb-7 mx-auto"></div>
              <p className="text-base sm:text-lg tall:text-xl md:tall:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
                {dict.sedi.sottotitolo}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="relative z-10 pb-12 sm:pb-16 tall:pb-24">
        {sedi.map((sede, index) => (
          <SectionSede key={sede.id} sede={sede} index={index} />
        ))}
      </div>
    </main>
  );
}
