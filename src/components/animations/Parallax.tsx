"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function Parallax({ children, offset = 50, className = "", direction = "up" }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const getTransform = () => {
    switch (direction) {
      case "up": return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      case "down": return useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      case "left": return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      case "right": return useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    }
  };

  const transformValue = getTransform();
  
  const style = direction === "up" || direction === "down" 
    ? { y: transformValue } 
    : { x: transformValue };

  return (
    <div ref={ref} className={className}>
      <motion.div style={style}>
        {children}
      </motion.div>
    </div>
  );
}
