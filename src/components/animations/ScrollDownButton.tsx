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
      className="group flex items-center justify-center p-2 cursor-pointer focus-visible:outline-none transition-transform duration-300 hover:scale-110 active:scale-95"
      aria-label={label}
    >
      {/* Pure Angular Modern Chevron Arrow — No Border, No Circle */}
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 text-white/70 dark:text-white/60 group-hover:text-zefiro-cyan animate-bounce transition-colors duration-300 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,206,219,0.8)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}
