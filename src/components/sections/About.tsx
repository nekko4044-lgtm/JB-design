"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RevealLine, FadeUp } from "@/components/ui/RevealText";
import { useLang } from "@/components/providers/LanguageProvider";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function About() {
  const { t } = useLang();
  const strengths = t.about.strengths;

  return (
    <section id="about" className="bg-canvas-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Photo with sliding reveal */}
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/julia.jpeg"
                alt="Julia Busigina — Interior Designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div
                className="absolute inset-0 z-10"
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease }}
                style={{ originY: 0, backgroundColor: "var(--canvas-alt)" }}
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-full h-full border border-wood/25 -z-10"
              initial={{ opacity: 0, x: -8, y: -8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.5 }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div>
              <FadeUp delay={0}>
                <p
                  className="text-xs tracking-[0.25em] uppercase text-greige mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.about.label}
                </p>
              </FadeUp>
              <h2
                className="text-ink leading-[1.1]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                <RevealLine delay={0.05}>{t.about.line1}</RevealLine>
                <RevealLine delay={0.18}>
                  <span className="text-greige">{t.about.line2}</span>
                </RevealLine>
              </h2>
            </div>

            <FadeUp delay={0.15}>
              <p
                className="text-greige leading-[1.8] max-w-md"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                {t.about.bio1}
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p
                className="text-greige leading-[1.8] max-w-md"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
              >
                {t.about.bio2}
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="grid grid-cols-2 gap-6 mt-4">
                {strengths.map(({ label, desc }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col gap-1"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                  >
                    <p
                      className="text-ink text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-greige text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
