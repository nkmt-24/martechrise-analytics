"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "content";
}

export default function HeroIndustriesAnimation({ children, className = "", type = "content" }: Props) {
  if (type === "content") {
    return (
      <motion.div
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
}
