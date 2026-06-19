"use client";

import { useState, Suspense, lazy, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimateLine } from "@/components/ui/RevealText";
import { useLang } from "@/components/providers/LanguageProvider";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-45 mix-blend-multiply pointer-events-none">
            <Dithering
              colorBack="#00000000"
              colorFront="#B8A090"
              shape="warp"
              type="4x4"
              speed={isHovered ? 0.45 : 0.12}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>
      </motion.div>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute top-24 left-6 lg:left-12 hidden md:flex items-center gap-3"
      >
        <div className="w-1 h-1 rounded-full bg-accent" />
        <span
          className="text-xs tracking-[0.3em] uppercase text-ink/70 font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.label}
        </span>
      </motion.div>

      {/* Centered content */}
      <motion.div
        className="relative z-10 text-center w-full"
        style={{ y: contentY }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-xs tracking-[0.35em] uppercase text-ink/60 font-medium mb-10 px-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <h1
          className="text-ink leading-[0.92] mb-10 px-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 10vw, 9rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          <AnimateLine delay={0.05} className="pb-[0.15em]">{t.hero.line1}</AnimateLine>
          <AnimateLine delay={0.22} className="pb-[0.15em]">
            <span className="text-greige">{t.hero.line2a}</span> {t.hero.line2b}
          </AnimateLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-ink/70 font-medium leading-relaxed max-w-sm mx-auto mb-12 text-base px-6"
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
            className="inline-flex items-center px-8 py-3.5 border border-ink/50 text-ink text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-sm bg-canvas/30 hover:bg-canvas/60 hover:border-ink transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="w-px h-10 bg-ink/15"
        />
        <span
          className="text-[9px] tracking-[0.3em] uppercase text-greige/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.scroll}
        </span>
      </motion.div>
    </section>
  );
}
