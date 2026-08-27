'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollSectionRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function ScrollSectionReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollSectionRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 32, x: 0 };
      case 'down':
        return { y: -32, x: 0 };
      case 'left':
        return { x: 36, y: 0 };
      case 'right':
        return { x: -36, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    scale: 0.98,
    ...getInitialPosition(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth Apple / Linear cubic-bezier ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
