"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CompassStar from "@/components/ui/CompassStar";
import { useLang } from "@/components/providers/LanguageProvider";
import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  others: Project[];
};

export default function ProjectPageContent({ project, others }: Props) {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = project.gallery.map((src) => ({ src }));

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
      {/* Concept / Outcome */}
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <p
            className="text-xs tracking-[0.25em] uppercase text-greige mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.projectPage.conceptLabel}
          </p>
          <p
            className="text-ink leading-[1.8]"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem" }}
          >
            {project.concept}
          </p>
        </div>
        {project.outcome && (
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase text-greige mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.projectPage.outcomeLabel}
            </p>
            <p
              className="text-ink leading-[1.8]"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem" }}
            >
              {project.outcome}
            </p>
          </div>
        )}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
        {project.gallery.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className={`relative overflow-hidden bg-border/40 cursor-zoom-in group ${
              i === 0 ? "col-span-2 aspect-video" : "aspect-square"
            }`}
          >
            <Image
              src={src}
              alt={`${project.title} — ${i + 1}`}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(36, 31, 28, 0.96)" },
        }}
      />

      {/* Divider */}
      <div className="flex items-center gap-6 mb-16">
        <div className="h-px flex-1 bg-border" />
        <CompassStar size={24} className="text-accent" />
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Other Projects */}
      <div>
        <p
          className="text-xs tracking-[0.25em] uppercase text-greige mb-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.projectPage.otherProjects}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/projects/${other.slug}`}
              className="group block cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-border/40 mb-4">
                <Image
                  src={other.cover}
                  alt={other.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3
                className="text-ink group-hover:text-greige transition-colors duration-200 mb-1"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                }}
              >
                {other.title}
              </h3>
              <p className="text-greige text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {other.location}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Back & CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-20 pt-10 border-t border-border">
        <Link
          href="/#projects"
          className="text-xs tracking-[0.2em] uppercase text-greige hover:text-ink transition-colors duration-200 cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.projectPage.back}
        </Link>
        <a
          href="/#contact"
          className="inline-flex items-center px-7 py-3.5 bg-brand text-canvas-alt text-xs tracking-[0.15em] uppercase hover:bg-brand-hover transition-colors duration-200 cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.projectPage.cta}
        </a>
      </div>
    </div>
  );
}
