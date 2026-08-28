import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '@/media/logo-zefironet-white.svg';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden selection:bg-zefiro-cyan selection:text-slate-950 font-sans">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zefiro-cyan/15 rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zefiro-teal/25 rounded-full blur-[140px] pointer-events-none -ml-20 -mb-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* Header with Logo */}
      <header className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/it" className="inline-block transition-transform hover:scale-105">
          <Image src={logoWhite} alt="Zefiro Net" className="h-8 w-auto" priority />
        </Link>
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
          <span>Status: 404 Not Found</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col items-center text-center my-auto py-12">
        {/* Animated Radar / No-Signal Visual */}
        <div className="relative mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-zefiro-cyan/20 relative">
            <svg
              className="w-12 h-12 text-zefiro-cyan animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.828-2.828m2.828 2.828L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.828-2.828m-4.243 4.243a5 5 0 01-1.414-3.536m0 0l2.828-2.828M5.636 5.636a9 9 0 000 12.728M3 3l18 18"
              />
            </svg>
          </div>
          {/* Subtle Outer Echo Rings */}
          <div className="absolute -inset-3 rounded-full border border-zefiro-cyan/20 animate-ping pointer-events-none opacity-40"></div>
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zefiro-cyan/15 border border-zefiro-cyan/30 text-zefiro-cyan text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <span>CODICE ERRORE: 404</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-white leading-[1.15]">
          Nessun segnale su questa <span className="text-zefiro-cyan">frequenza.</span>
        </h1>

        {/* Telecom Themed Text */}
        <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mb-8">
          Sembra che questo pacchetto dati abbia perso la rotta o che la pagina che stai cercando sia momentaneamente fuori dalla nostra area di copertura.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/it"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-zefiro-cyan to-zefiro-teal text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-zefiro-cyan/25 hover:shadow-xl hover:shadow-zefiro-cyan/40 hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Ristabilisci Connessione (Home)</span>
          </Link>
          <Link
            href="/it/chi-siamo"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/15 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Scopri Chi Siamo</span>
          </Link>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="relative z-10 container mx-auto px-4 py-6 text-center text-xs text-gray-500 border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Zefiro Net S.r.l. — Connettere in un soffio.</p>
      </footer>
    </div>
  );
}
