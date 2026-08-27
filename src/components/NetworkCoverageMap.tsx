'use client';

import React from 'react';
import Image from 'next/image';
import mapImage from '../../public/images/mappa-copertura-zefiro-v3.png';

interface MapDictProps {
  mapChipRete?: string;
  mapChipCopertura?: string;
  mapLegendaRurale?: string;
  mapLegendaUrbana?: string;
  mapTagline?: string;
}

export function NetworkCoverageMap({ dict }: { dict?: MapDictProps }) {
  const legendaRurale = dict?.mapLegendaRurale || 'Territorio coperto (70%)';
  const legendaUrbana = dict?.mapLegendaUrbana || 'Aree non coperte';
  const tagline = dict?.mapTagline || 'Digital Divide & 5G Wholesale';

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl tall:rounded-[32px] bg-gradient-to-br from-slate-950 via-primary/95 to-slate-900 p-3.5 sm:p-4 tall:p-6 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-0 right-0 w-64 h-64 tall:w-80 tall:h-80 bg-zefiro-cyan/20 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 tall:w-80 tall:h-80 bg-zefiro-teal/40 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      {/* Main Map: Pure Italy Contour & Official Rural Coverage with Unique Content Hash */}
      <div className="relative w-full py-0.5 sm:py-1 tall:py-2 flex items-center justify-center">
        <div className="relative w-full max-w-[210px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[250px] tall:lg:max-w-[340px] xl:tall:max-w-[370px] aspect-[459/544] drop-shadow-[0_12px_24px_rgba(0,206,219,0.25)]">
          <Image
            src={mapImage}
            alt="Mappa Copertura Aree Rurali Zefiro Net"
            fill
            sizes="(max-width: 640px) 210px, (max-width: 1024px) 270px, 370px"
            className="object-contain select-none filter contrast-105"
            priority
          />
        </div>
      </div>

      {/* Legenda Pulita & Minimale */}
      <div className="relative z-10 mt-2 pt-2 tall:mt-3 tall:pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-1.5 tall:gap-2 text-[10px] sm:text-[11px] tall:text-xs text-gray-300">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 tall:gap-4">
          <div className="flex items-center gap-1 tall:gap-1.5">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 tall:w-3.5 tall:h-3.5 rounded-sm bg-gradient-to-br from-[#00E5FF] to-[#00CEDB] shadow-sm shadow-zefiro-cyan/50 border border-white/40"></span>
            <span className="font-medium text-white/90">{legendaRurale}</span>
          </div>
          <div className="flex items-center gap-1 tall:gap-1.5">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 tall:w-3.5 tall:h-3.5 rounded-sm bg-[#102636] border border-white/20"></span>
            <span className="font-medium text-gray-400">{legendaUrbana}</span>
          </div>
        </div>
        <div className="text-gray-400 font-mono text-[9px] sm:text-[10px] tall:text-xs">
          {tagline}
        </div>
      </div>
    </div>
  );
}
