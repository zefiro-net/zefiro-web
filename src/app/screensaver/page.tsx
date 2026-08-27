"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScreensaverItalyMap } from "@/components/screensaver/ScreensaverItalyMap";
import { DataBreath3D } from "@/components/animations/DataBreath3D";
import logoWhite from "@/media/logo-zefironet-white.svg";

export default function ScreensaverPage() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setDateStr(
        now.toLocaleDateString("it-IT", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100dvh] max-h-[100dvh] w-[100dvw] max-w-[100dvw] bg-zefiro-teal text-white overflow-hidden relative select-none flex flex-col justify-between p-4 sm:p-6 lg:p-8 xl:p-10 font-sans box-border">
      {/* Exact Homepage Background: Deep Teal Base + Subtle Grid + Cyan Gradient Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-zefiro-teal z-0" />
        <div className="absolute top-0 right-0 w-2/3 h-full z-0">
          <div className="w-full h-full bg-gradient-to-l from-zefiro-cyan/20 to-transparent blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 z-0">
          <div className="w-full h-full bg-gradient-to-tr from-sky-900/30 to-transparent blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] z-0"></div>
      </div>

      {/* 3D Interactive Particle Flow from Homepage */}
      <DataBreath3D />

      {/* Top Header Bar */}
      <header className="relative z-20 flex items-center justify-between w-full flex-shrink-0">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
            <Image
              src={logoWhite}
              alt="Zefiro Net Logo"
              className="h-7 sm:h-8 lg:h-9 w-auto drop-shadow-[0_0_20px_rgba(0,206,219,0.3)]"
              priority
            />
          </Link>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider uppercase text-gray-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Rete Attiva • 5G Wholesale</span>
          </div>
        </motion.div>

        {/* Live Digital Clock & Date */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-end text-right"
        >
          <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {timeStr || "--:--:--"}
          </div>
          <div className="text-[11px] sm:text-xs text-gray-300 capitalize font-medium tracking-wide">
            {dateStr || "Zefiro Net Display"}
          </div>
        </motion.div>
      </header>

      {/* Center Stage: Hero Motto + 3D Animated Antenna */}
      <main className="relative z-20 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 max-w-7xl mx-auto w-full my-auto">
        {/* Left Column: Branding, Motto & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-lg border border-white/15 w-fit shadow-[0_0_20px_rgba(0,206,219,0.15)]">
            <span className="w-2 h-2 rounded-full bg-zefiro-cyan animate-pulse"></span>
            <span className="text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] text-zefiro-cyan">
              Infrastruttura Digitale Nazionale
            </span>
          </div>

          {/* Main Display Title / Motto */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white drop-shadow-md">
              Connettere <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zefiro-cyan via-cyan-200 to-teal-300 drop-shadow-[0_0_40px_rgba(0,206,219,0.45)]">
                in un soffio.
              </span>
            </h1>
            <div className="w-14 lg:w-20 h-1.5 bg-gradient-to-r from-zefiro-cyan to-teal-400 rounded-full mt-3 lg:mt-4 shadow-[0_0_20px_rgba(0,206,219,0.6)]"></div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
            Acceleriamo lo sviluppo delle reti 5G in Italia. L'infrastruttura wholesale d'eccellenza per connettere oltre il 70% del territorio nazionale.
          </p>

          {/* 3 Key Stats Pills */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-zefiro-cyan/50 transition-all shadow-lg group">
              <div className="text-lg sm:text-xl lg:text-2xl font-black text-zefiro-cyan tracking-tight mb-0.5">
                70%
              </div>
              <div className="text-[10px] sm:text-xs text-gray-200 font-medium leading-tight">
                Territorio coperto
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-zefiro-cyan/50 transition-all shadow-lg group">
              <div className="text-lg sm:text-xl lg:text-2xl font-black text-zefiro-cyan tracking-tight mb-0.5">
                ~7.000
              </div>
              <div className="text-[10px] sm:text-xs text-gray-200 font-medium leading-tight">
                Siti radiomobili
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-zefiro-cyan/50 transition-all shadow-lg group">
              <div className="text-lg sm:text-xl lg:text-2xl font-black text-zefiro-cyan tracking-tight mb-0.5">
                100%
              </div>
              <div className="text-[10px] sm:text-xs text-gray-200 font-medium leading-tight">
                Wholesale-Only
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Animated Italy Network Map with High-Speed Data Flows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="lg:col-span-5 h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[540px] max-h-[75vh] w-full relative flex items-center justify-center pointer-events-auto"
        >
          <ScreensaverItalyMap />
        </motion.div>
      </main>

      {/* Bottom Bar: Clean Domain Link */}
      <footer className="relative z-20 flex items-center justify-between w-full pt-3 border-t border-white/10 text-xs text-gray-300 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-widest uppercase text-[11px]">
            zefironet.it
          </span>
        </div>

        <div className="text-[11px] text-gray-400">
          Zefiro Net S.r.l.
        </div>
      </footer>
    </div>
  );
}
