"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function StaggerContainer({ children, className = "", delayOrder = 0 }: { children: ReactNode, className?: string, delayOrder?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delayOrder * 0.08,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
