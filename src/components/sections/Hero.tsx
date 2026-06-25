"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateLine } from "@/components/ui/RevealText";
import { useLang } from "@/components/providers/LanguageProvider";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  return (
    <section
      ref={heroRef}
      className="relative min-h-dvh flex items-center justify-center"
      style={{ zIndex: 2, background: "linear-gradient(to bottom, var(--canvas) 0%, var(--canvas) 55%, transparent 80%)" }}
    >
      {/* Photo: CSS mask dissolves at the bottom, revealing Projects underneath */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero-desktop.webp"
          alt="Julia Busigina — Interior Design Dubai"
          fill
          priority
          className="object-cover hidden md:block"
          sizes="100vw"
        />
        <Image
          src="/images/hero-mobile.webp"
          alt="Julia Busigina — Interior Design Dubai"
          fill
          priority
          className="object-cover md:hidden"
          sizes="100vw"
        />
        {/* Gradient overlay — darker in the middle where text lives */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(36,31,28,0.12) 0%, rgba(36,31,28,0.38) 25%, rgba(36,31,28,0.38) 65%, rgba(36,31,28,0.08) 100%)",
          }}
        />
      </div>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute top-24 left-6 lg:left-12 hidden md:flex items-center gap-3 z-20"
      >
        <div className="w-1 h-1 rounded-full bg-accent" />
        <span
          className="text-xs tracking-[0.3em] uppercase text-canvas/60 font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.label}
        </span>
      </motion.div>

      {/* Centered content */}
      <div className="relative z-20 text-center w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-xs tracking-[0.35em] uppercase text-canvas/70 font-medium mb-10 px-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1
          className="text-canvas leading-[0.92] mb-10 px-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 7vw, 6rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          <AnimateLine delay={0.05} className="pt-[0.1em] pb-[0.15em]">{t.hero.line1}</AnimateLine>
          <AnimateLine delay={0.22} className="pt-[0.1em] pb-[0.15em]">
            <span className="text-accent">{t.hero.line2a}</span>{t.hero.line2b ? ` ${t.hero.line2b}` : ""}
          </AnimateLine>
          {t.hero.line3 && (
            <AnimateLine delay={0.38} className="pt-[0.1em] pb-[0.15em]">{t.hero.line3}</AnimateLine>
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-canvas/80 font-medium leading-relaxed max-w-sm mx-auto mb-12 text-base px-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 justify-center px-6"
        >
          <a
            href="/#projects"
            className="inline-flex items-center px-8 py-3.5 bg-brand text-canvas-alt text-xs tracking-[0.2em] uppercase hover:bg-brand-hover transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center px-8 py-3.5 border border-white/40 text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:border-white/70 hover:bg-black/25"
            style={{
              fontFamily: "var(--font-body)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              backgroundColor: "rgba(0,0,0,0.15)",
            }}
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

    </section>
  );
}
