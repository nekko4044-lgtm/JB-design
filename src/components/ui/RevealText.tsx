"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/**
 * Mask reveal — text slides up from behind an invisible clip.
 * Use for section headings and large display text.
 */
export function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "108%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.68, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Same as RevealLine but uses animate (not whileInView) — for elements visible on page load like the hero.
 */
export function AnimateLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "108%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.68, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Simple fade + slide up — for body text and supporting elements.
 */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.52, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

