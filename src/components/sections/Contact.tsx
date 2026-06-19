"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CompassStar from "@/components/ui/CompassStar";
import { useLang } from "@/components/providers/LanguageProvider";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { t } = useLang();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
          subject: "New Project Enquiry — Julia Busigina",
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <CompassStar size={32} className="text-accent" />
              <p
                className="text-xs tracking-[0.25em] uppercase text-greige"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.contact.label}
              </p>
            </div>

            <h2
              className="text-ink leading-[1.1]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              {t.contact.line1}
              <br />
              <span className="text-greige">{t.contact.line2}</span>
            </h2>

            <p
              className="text-greige leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
            >
              {t.contact.description}
            </p>

            <div className="flex items-center gap-6 mt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/971509013058"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-greige hover:text-brand transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/busigina__design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-greige hover:text-brand transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/JuliaBusigina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-greige hover:text-brand transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"/>
                  <path d="M22 2L15 22 11 13 2 9l20-7z"/>
                </svg>
              </a>

              {/* Mail */}
              <a
                href="mailto:busiginadesign@gmail.com"
                aria-label="Email"
                className="text-greige hover:text-brand transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="bg-canvas-alt p-10 lg:p-12"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CompassStar size={40} className="text-accent" />
                <h3
                  className="text-ink"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600 }}
                >
                  {t.contact.successTitle}
                </h3>
                <p className="text-greige text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs tracking-[0.15em] uppercase text-greige hover:text-ink transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3
                  className="text-ink mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.contact.formTitle}
                </h3>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs tracking-[0.15em] uppercase text-greige"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-canvas border border-border px-4 py-3 text-sm text-ink placeholder:text-greige/50 focus:outline-none focus:border-brand transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs tracking-[0.15em] uppercase text-greige"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full bg-canvas border border-border px-4 py-3 text-sm text-ink placeholder:text-greige/50 focus:outline-none focus:border-brand transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-[0.15em] uppercase text-greige"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-canvas border border-border px-4 py-3 text-sm text-ink placeholder:text-greige/50 focus:outline-none focus:border-brand transition-colors duration-200 resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500" style={{ fontFamily: "var(--font-body)" }}>
                    {t.contact.errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand text-canvas-alt text-xs tracking-[0.2em] uppercase hover:bg-brand-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {status === "loading" ? t.contact.sending : t.contact.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
