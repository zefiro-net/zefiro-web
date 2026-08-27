'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-zefiro-cyan via-white to-zefiro-cyan origin-left shadow-[0_0_12px_rgba(0,206,219,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
