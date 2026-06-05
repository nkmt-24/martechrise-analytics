"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function LogoCarouselAnimation({ children, className = "" }: Props) {
  return (
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
