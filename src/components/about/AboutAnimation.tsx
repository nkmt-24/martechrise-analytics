"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface AboutAnimationProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

export default function AboutAnimation({
  children,
  direction = "left",
  className,
  ...props
}: AboutAnimationProps) {
  const x = direction === "left" ? -40 : direction === "right" ? 40 : 0;
  const y = direction === "up" ? 40 : direction === "down" ? -40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
