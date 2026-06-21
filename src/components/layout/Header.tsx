"use client";

import { useState } from "react";
import Link from "next/link";
import CompassStar from "@/components/ui/CompassStar";
import { X, Menu } from "lucide-react";
import { useLang } from "@/components/providers/LanguageProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, locale, toggle } = useLang();

  const navLinks = [
    { href: "/#projects", label: t.header.projects },
    { href: "/#about", label: t.header.about },
    { href: "/#services", label: t.header.services },
    { href: "/price", label: t.header.pricing },
    { href: "/#contact", label: t.header.contact },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99999] bg-canvas/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Julia Busigina — Home"
          >
            <CompassStar
              size={24}
              className="text-accent transition-transform duration-300 group-hover:rotate-45"
            />
            <span
              className="text-base font-bold tracking-[0.1em] text-ink"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              JB
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs tracking-[0.15em] uppercase text-greige hover:text-ink transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="text-xs tracking-[0.15em] uppercase text-greige hover:text-ink transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {locale === "en" ? "RU" : "EN"}
            </button>

            <a
              href="/#contact"
              className="inline-flex items-center px-5 py-2 border border-brand text-brand text-xs tracking-[0.15em] uppercase hover:bg-brand hover:text-canvas-alt transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.header.getInTouch}
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-canvas flex flex-col"
          style={{ zIndex: 999999, paddingTop: "64px" }}
        >
          <nav className="flex flex-col px-6 pt-10 gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-2xl tracking-[0.08em] uppercase text-ink border-b border-border pb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {label}
              </a>
            ))}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => { toggle(); setOpen(false); }}
                className="text-sm tracking-[0.15em] uppercase text-greige"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {locale === "en" ? "RU" : "EN"}
              </button>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-6 py-4 bg-brand text-canvas-alt text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.header.getInTouch}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
