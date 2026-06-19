"use client";

import CompassStar from "@/components/ui/CompassStar";
import { useLang } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { href: "#projects", label: t.header.projects },
    { href: "#about", label: t.header.about },
    { href: "#services", label: t.header.services },
    { href: "#process", label: t.footer.process },
  ];

  return (
    <footer className="bg-ink text-canvas-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CompassStar size={24} className="text-accent" />
              <span
                className="text-base tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Julia Busigina
              </span>
            </div>
            <p
              className="text-greige text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.footer.tagline}
              <br />
              {t.footer.location}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-[0.15em] uppercase text-greige mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.footer.contactLabel}
            </p>
            <a
              href="https://wa.me/971509013058"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-canvas-alt hover:text-accent transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              +971 50 901 3058
            </a>
            <a
              href="mailto:busiginadesign@gmail.com"
              className="text-sm text-canvas-alt hover:text-accent transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              busiginadesign@gmail.com
            </a>
            <a
              href="https://instagram.com/busigina__design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-canvas-alt hover:text-accent transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              @busigina__design
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p
              className="text-xs tracking-[0.15em] uppercase text-greige mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.footer.navLabel}
            </p>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-canvas-alt hover:text-accent transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-canvas/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs text-greige tracking-wider"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Julia Busigina. {t.footer.rights}
          </p>
          <a
            href="https://t.me/neko_4044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-greige/60 hover:text-greige transition-colors duration-200 tracking-wider"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Developed by NEKKO.DEV
          </a>
        </div>
      </div>
    </footer>
  );
}
