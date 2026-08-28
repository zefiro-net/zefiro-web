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
      className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zefiro-cyan transition-all duration-300 active:scale-90"
      aria-label={label}
    >
      {/* Subtle Circular Glass Backdrop */}
      <div className="absolute inset-0 rounded-full bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm border border-white/15 dark:border-white/10 group-hover:border-zefiro-cyan/50 group-hover:bg-zefiro-cyan/10 transition-all duration-300 shadow-sm"></div>

      {/* Pure Sleek Minimalist Arrow */}
      <svg
        className="w-5 h-5 text-gray-300 dark:text-gray-300 group-hover:text-zefiro-cyan animate-bounce transition-colors relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
