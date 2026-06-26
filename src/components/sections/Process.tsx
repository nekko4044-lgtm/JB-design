"use client";

import { motion } from "framer-motion";
import { RevealLine } from "@/components/ui/RevealText";
import { useLang } from "@/components/providers/LanguageProvider";

export default function Process() {
  const { t } = useLang();
  const steps = t.process.steps.map((step, i) => ({
    n: String(i + 1).padStart(2, "0"),
    title: step.title,
    desc: step.desc,
  }));

  return (
    <section id="process" className="relative" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">
        <div className="mb-16">
          <h2
            className="text-ink leading-[1.1] max-w-lg"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            <RevealLine delay={0.05}>{t.process.line1}</RevealLine>
            <RevealLine delay={0.18}>
              <span className="text-greige">{t.process.line2}</span>
            </RevealLine>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
          {steps.map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group p-8 lg:p-10 flex flex-col gap-4 border-border
                ${i % 3 !== 2 ? "md:border-r" : ""}
                ${i < 3 ? "border-b" : ""}
              `}
              style={{
                background: "var(--canvas)",
              }}
            >
              <p
                className="text-accent/60 group-hover:text-accent transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                }}
              >
                {n}
              </p>
              <h3
                className="text-ink"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                {title}
              </h3>
              <p
                className="text-greige text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
