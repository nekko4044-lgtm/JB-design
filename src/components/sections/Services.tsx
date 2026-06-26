"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealLine } from "@/components/ui/RevealText";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLang();
  const services = t.services.items;

  return (
    <section id="services" className="relative" style={{ zIndex: 1 }}>
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
            <RevealLine delay={0.05}>{t.services.line1}</RevealLine>
            <RevealLine delay={0.18}>
              <span className="text-greige">{t.services.line2}</span>
            </RevealLine>
          </h2>
        </div>

        {/* Desktop — 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-0 border border-border">
          {services.map(({ category, tagline, items }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group p-10 flex flex-col gap-8 ${
                i < services.length - 1 ? "border-r border-border" : ""
              }`}
              style={{
                background: "var(--canvas)",
              }}
            >
              <div>
                <p
                  className="text-xs tracking-[0.2em] uppercase text-greige mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  0{i + 1}
                </p>
                <h3
                  className="text-ink mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {category}
                </h3>
                <p className="text-greige text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {tagline}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-greige"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-border">
                <a
                  href="#contact"
                  className="text-xs tracking-[0.15em] uppercase text-brand hover:text-brand-hover transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.services.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — accordion */}
        <div className="md:hidden border border-border divide-y divide-border">
          {services.map(({ category, tagline, items }, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: isOpen ? "var(--canvas)" : "var(--canvas-alt)",
                }}
              >
                {/* Header — always visible */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs tracking-[0.2em] uppercase text-greige"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "var(--ink)",
                      }}
                    >
                      {category}
                    </span>
                  </div>
                  <span className="text-accent shrink-0 ml-4">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {/* Body — slides open */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-7 flex flex-col gap-5">
                        <p
                          className="text-greige text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {tagline}
                        </p>
                        <ul className="flex flex-col gap-3">
                          {items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-greige"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              <span className="text-accent mt-0.5 shrink-0">—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-border">
                          <a
                            href="#contact"
                            className="group inline-flex items-center gap-1 text-xs tracking-[0.15em] uppercase text-brand"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            <span className="underline-offset-4 group-hover:underline transition-all duration-200 group-hover:text-brand-hover">
                              {t.services.cta}
                            </span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
