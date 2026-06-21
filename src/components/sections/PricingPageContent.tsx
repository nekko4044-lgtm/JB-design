"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CompassStar from "@/components/ui/CompassStar";
import { useLang } from "@/components/providers/LanguageProvider";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease },
});

type PriceRow = { label: string; price: string };

function ServiceBlock({
  number,
  title,
  tagline,
  includes,
  includesLabel,
  pricingLabel,
  timelineLabel,
  paymentLabel,
  timeline,
  payment,
  prices,
  note,
  delay = 0,
}: {
  number: string;
  title: string;
  tagline: string;
  includes: readonly string[];
  includesLabel: string;
  pricingLabel: string;
  timelineLabel: string;
  paymentLabel: string;
  timeline?: string;
  payment?: string;
  prices: readonly PriceRow[];
  note: string;
  delay?: number;
}) {
  return (
    <motion.div
      {...fade(delay)}
      className="relative"
      style={{
        background: "rgba(248, 247, 245, 0.18)",
        backdropFilter: "blur(24px) saturate(1.8)",
        WebkitBackdropFilter: "blur(24px) saturate(1.8)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.04)",
      }}
    >
      {/* Header */}
      <div className="px-8 lg:px-12 pt-10 pb-8 border-b border-border">
        <p
          className="text-xs tracking-[0.2em] uppercase text-accent mb-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {number}
        </p>
        <h2
          className="text-ink mb-2 leading-[1.1]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
        <p className="text-greige text-sm" style={{ fontFamily: "var(--font-body)" }}>
          {tagline}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left — includes + meta */}
        <div className="px-8 lg:px-12 py-8 border-b lg:border-b-0 lg:border-r border-border">
          <p
            className="text-xs tracking-[0.15em] uppercase text-greige mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {includesLabel}
          </p>
          <ul className="flex flex-col gap-2.5 mb-6">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-ink"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="text-accent mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
          {(timeline || payment) && (
            <div className="pt-6 border-t border-border flex flex-col gap-1.5">
              {timeline && (
                <p className="text-xs text-greige" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="text-ink">{timelineLabel}:</span> {timeline}
                </p>
              )}
              {payment && (
                <p className="text-xs text-greige" style={{ fontFamily: "var(--font-body)" }}>
                  <span className="text-ink">{paymentLabel}:</span> {payment}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right — prices */}
        <div className="px-8 lg:px-12 py-8">
          <p
            className="text-xs tracking-[0.15em] uppercase text-greige mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {pricingLabel}
          </p>
          <div className="flex flex-col divide-y divide-border">
            {prices.map(({ label, price }) => (
              <div key={label} className="flex items-baseline justify-between py-3 gap-4">
                <span className="text-sm text-greige" style={{ fontFamily: "var(--font-body)" }}>
                  {label}
                </span>
                <span
                  className="text-ink font-medium shrink-0"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
                >
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="px-8 lg:px-12 py-5 border-t border-border flex items-center gap-3">
        <CompassStar size={14} className="text-accent shrink-0" />
        <p className="text-xs text-greige italic" style={{ fontFamily: "var(--font-body)" }}>
          {note}
        </p>
      </div>
    </motion.div>
  );
}

export default function PricingPageContent() {
  const { t } = useLang();
  const p = t.pricing;

  return (
    <div className="relative" style={{ zIndex: 1 }}>
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-greige hover:text-ink transition-colors duration-200"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {p.back}
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-20">
        <motion.p
          {...fade(0)}
          className="text-xs tracking-[0.3em] uppercase text-accent mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {p.label}
        </motion.p>
        <motion.h1
          {...fade(0.08)}
          className="text-ink leading-[1.05] mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
        >
          {p.title1}<br />
          <span className="text-greige">{p.title2}</span>
        </motion.h1>
        <motion.p
          {...fade(0.15)}
          className="text-greige leading-relaxed max-w-lg"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem" }}
        >
          {p.description}
        </motion.p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-border" />
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col gap-6">
        {p.services.map((s, i) => (
          <ServiceBlock
            key={s.number}
            number={s.number}
            title={s.title}
            tagline={s.tagline}
            includes={s.includes}
            includesLabel={p.includes}
            pricingLabel={p.pricingLabel}
            timelineLabel={p.timeline}
            paymentLabel={p.payment}
            timeline={s.timeline}
            payment={s.payment}
            prices={s.prices}
            note={s.note}
            delay={i === 0 ? 0 : 0.05}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="relative" style={{ zIndex: 1, backgroundColor: "var(--brand)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2
              className="text-canvas leading-[1.1] mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              {p.ctaTitle}
            </h2>
            <p className="text-canvas/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              {p.ctaDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-canvas text-ink text-xs tracking-[0.2em] uppercase hover:bg-canvas-alt transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {p.ctaBtn1}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border border-canvas/30 text-canvas text-xs tracking-[0.2em] uppercase hover:border-canvas transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {p.ctaBtn2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
