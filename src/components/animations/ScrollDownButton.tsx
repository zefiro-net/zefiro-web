'use client';

import React from 'react';

interface ScrollDownButtonProps {
  label?: string;
  targetId?: string;
}

export function ScrollDownButton({ label = 'Scroll down', targetId = 'copertura' }: ScrollDownButtonProps) {
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
      className="group relative flex flex-col items-center justify-center p-2 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zefiro-cyan transition-all duration-300 active:scale-90"
      aria-label={label}
    >
      {/* Outer Subtle Pulsing Glow */}
      <span className="absolute inset-0 rounded-full bg-zefiro-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

      {/* Modern Sleek Mouse / Capsule Indicator */}
      <div className="relative w-7 h-11 sm:w-8 sm:h-12 rounded-full border-2 border-white/30 dark:border-white/25 bg-slate-950/40 backdrop-blur-md flex items-start justify-center p-1.5 shadow-lg group-hover:border-zefiro-cyan group-hover:shadow-[0_0_20px_rgba(0,206,219,0.4)] transition-all duration-300">
        {/* Animated Moving Dot */}
        <span className="w-1.5 h-2.5 rounded-full bg-zefiro-cyan animate-[bounce_1.6s_infinite] group-hover:bg-white shadow-[0_0_8px_#00CEDB]"></span>
      </div>

      {/* Micro Down Chevron */}
      <div className="-mt-1 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-300">
        <svg
          className="w-4 h-4 text-zefiro-cyan group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  );
}
