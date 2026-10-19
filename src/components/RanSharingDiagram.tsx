"use client";

import { motion } from 'framer-motion';
import type { Locale } from '@/i18n';

interface RanSharingDiagramProps {
  lang: Locale;
}

export default function RanSharingDiagram({ lang }: RanSharingDiagramProps) {
  const isIt = lang === 'it';

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-950/95 p-5 sm:p-7 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-zefiro-cyan/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-zefiro-teal/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar: Diagram badge & status */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zefiro-cyan animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-300">
            {isIt ? 'Architettura RAN Sharing (MOCN)' : 'RAN Sharing Architecture (MOCN)'}
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-zefiro-cyan text-[10px] font-bold uppercase tracking-wider border border-white/10">
          {isIt ? 'Rete Attiva' : 'Live Network'}
        </span>
      </div>

      <div className="space-y-4">
        {/* TIER 1: OPERATOR CORE NETWORKS (Independent & Separate) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* WINDTRE Box */}
          <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-orange-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-white tracking-wider">WINDTRE</span>
              <span className="w-2 h-2 rounded-full bg-orange-400" />
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold text-gray-200">
                {isIt ? 'Core Network Privata' : 'Private Core Network'}
              </p>
              <p className="text-[10px] text-gray-400 leading-tight">
                {isIt ? 'Dati, billing & privacy 100% autonomi' : '100% autonomous data, billing & privacy'}
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[9px] font-mono text-orange-300">
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>{isIt ? 'Canale Dati Dedicato' : 'Dedicated Data Pipe'}</span>
            </div>
          </div>

          {/* Iliad Box */}
          <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-red-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-white tracking-wider">Iliad Italia</span>
              <span className="w-2 h-2 rounded-full bg-red-400" />
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold text-gray-200">
                {isIt ? 'Core Network Privata' : 'Private Core Network'}
              </p>
              <p className="text-[10px] text-gray-400 leading-tight">
                {isIt ? 'Dati, billing & privacy 100% autonomi' : '100% autonomous data, billing & privacy'}
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[9px] font-mono text-red-300">
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>{isIt ? 'Canale Dati Dedicato' : 'Dedicated Data Pipe'}</span>
            </div>
          </div>
        </div>

        {/* CONNECTION FLOW LINES (SVG Graphic) */}
        <div className="relative flex justify-center items-center py-1">
          <svg className="w-full h-10 overflow-visible" viewBox="0 0 300 40" fill="none">
            {/* Left flow from WINDTRE */}
            <path
              d="M75 0 C75 20, 140 20, 150 40"
              stroke="url(#gradientWind)"
              strokeWidth="2"
              strokeDasharray="4 3"
              className="animate-[dash_1.5s_linear_infinite]"
            />
            {/* Right flow from Iliad */}
            <path
              d="M225 0 C225 20, 160 20, 150 40"
              stroke="url(#gradientIliad)"
              strokeWidth="2"
              strokeDasharray="4 3"
              className="animate-[dash_1.5s_linear_infinite]"
            />
            {/* Center connector node */}
            <circle cx="150" cy="40" r="4" fill="#00CEDB" />
            
            <defs>
              <linearGradient id="gradientWind" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#00CEDB" />
              </linearGradient>
              <linearGradient id="gradientIliad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F87171" />
                <stop offset="100%" stopColor="#00CEDB" />
              </linearGradient>
            </defs>
          </svg>

          {/* Badge over convergence point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-slate-900 border border-zefiro-cyan/50 text-[9px] font-mono font-bold text-zefiro-cyan shadow-lg">
            {isIt ? 'CONVERGENZA DI ACCESSO' : 'SHARED ACCESS CONVERGENCE'}
          </div>
        </div>

        {/* TIER 2: ZEFIRO NET SHARED RAN LAYER (The Central Hub) */}
        <div className="relative rounded-2xl bg-gradient-to-br from-zefiro-teal/40 via-primary/60 to-slate-900/90 p-4 sm:p-5 border-2 border-zefiro-cyan/40 shadow-xl overflow-hidden group">
          {/* Subtle radiating waves behind the tower */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-40">
            <span className="absolute w-24 h-24 rounded-full border border-zefiro-cyan/40 animate-ping" />
            <span className="absolute w-16 h-16 rounded-full border border-zefiro-cyan/60 animate-pulse" />
          </div>

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-[70%]">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zefiro-cyan/20 text-zefiro-cyan text-[10px] font-bold uppercase tracking-wider">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{isIt ? 'Infrastruttura Condivisa' : 'Shared Infrastructure'}</span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-white tracking-tight">
                Zefiro Net RAN Layer
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-300 leading-snug">
                {isIt
                  ? 'Unico traliccio, apparati radio multibanda 4G/5G congiunti, alimentazione protetta e backhaul in fibra.'
                  : 'Single tower, joint 4G/5G multiband radio equipment, protected power supply, and fiber backhaul.'}
              </p>
            </div>

            {/* Stylized Antenna Icon */}
            <div className="w-12 h-12 rounded-2xl bg-zefiro-cyan/20 border border-zefiro-cyan/40 text-zefiro-cyan flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2v20M8 8l4-4 4 4M6 14l6-6 6 6M4 20l8-8 8 8" />
              </svg>
            </div>
          </div>

          {/* 3 Micro Feature Tags */}
          <div className="relative z-10 grid grid-cols-3 gap-2 mt-3.5 pt-3 border-t border-white/10 text-center">
            <div className="p-1.5 rounded-lg bg-black/30 border border-white/5">
              <span className="block text-[10px] font-bold text-white leading-tight">
                {isIt ? 'Traliccio Unico' : 'Single Tower'}
              </span>
              <span className="block text-[8px] text-gray-400">
                {isIt ? '-50% impatto visivo' : '-50% visual impact'}
              </span>
            </div>
            <div className="p-1.5 rounded-lg bg-black/30 border border-white/5">
              <span className="block text-[10px] font-bold text-white leading-tight">
                {isIt ? 'Apparati 4G/5G' : '4G/5G Equipment'}
              </span>
              <span className="block text-[8px] text-gray-400">
                {isIt ? 'Frequenze congiunte' : 'Joint frequencies'}
              </span>
            </div>
            <div className="p-1.5 rounded-lg bg-black/30 border border-white/5">
              <span className="block text-[10px] font-bold text-white leading-tight">
                {isIt ? 'Efficienza Energetica' : 'Eco-Efficient'}
              </span>
              <span className="block text-[8px] text-gray-400">
                {isIt ? 'Consumi dimezzati' : 'Halved energy use'}
              </span>
            </div>
          </div>
        </div>

        {/* TIER 3: UNIFIED COVERAGE ON TERRITORY */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                {isIt ? 'Copertura Unificata del 70% del Territorio' : 'Unified Coverage Across 70% of Italy'}
              </p>
              <p className="text-[10px] text-gray-400">
                {isIt
                  ? 'Connettività 5G ultra-broadband per clienti Iliad e WINDTRE'
                  : 'Ultra-broadband 5G connectivity for Iliad and WINDTRE subscribers'}
              </p>
            </div>
          </div>

          <span className="shrink-0 px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-black border border-emerald-500/30">
            ~16M {isIt ? 'Abitanti' : 'Residents'}
          </span>
        </div>
      </div>
    </div>
  );
}
