"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  type?: "card";
}

export default function LandingCTAAnimation({ children, className = "", type = "card" }: Props) {
  if (type === "card") {
    return (
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
}
