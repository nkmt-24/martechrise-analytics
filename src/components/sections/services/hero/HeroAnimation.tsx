"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  type?: "content" | "graphic-main" | "graphic-float" | "box2" | "box3";
}

export default function HeroAnimation({ children, className = "", type = "content" }: Props) {
  if (type === "content") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "graphic-main") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "graphic-float") {
    return (
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "box2") {
    return (
      <motion.div 
        animate={{ y: [-5, 5, -5], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "box3") {
    return (
      <motion.div 
        animate={{ y: [5, -5, 5], x: [-5, 0, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
}
