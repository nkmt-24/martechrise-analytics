'use client'

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "word" | "letter";
  delay?: number;
  stagger?: number;
}

export const AnimatedText = ({
  text,
  className = "",
  as: Tag = "h2",
  mode = "word",
  delay = 0,
  stagger = 0.06,
}: Props) => {
  const items = mode === "word" ? text.split(" ") : text.split("");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const child: Variants = {
    hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const MotionTag = motion[Tag] as typeof motion.h2;
  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
    >
      {items.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={child} className="inline-block">
            {item}
            {mode === "word" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

export const FadeIn = ({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once, margin: "-10%" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
