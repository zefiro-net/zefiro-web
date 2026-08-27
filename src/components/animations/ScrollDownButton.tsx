'use client';

import React from 'react';

interface ScrollDownButtonProps {
  label: string;
  targetId?: string;
}

export function ScrollDownButton({ label, targetId = 'copertura' }: ScrollDownButtonProps) {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zefiro-cyan rounded-full p-2 cursor-pointer group"
      aria-label={label}
    >
      <span className="text-[11px] uppercase tracking-widest font-bold mb-0.5 hidden sm:inline text-zefiro-cyan group-hover:text-white transition-colors">
        {label}
      </span>
      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-zefiro-cyan group-hover:text-primary transition-all shadow-sm">
        <svg className="w-4 h-4 animate-bounce text-zefiro-cyan group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </button>
  );
}
