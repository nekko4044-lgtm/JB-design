"use client";

import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { RevealLine, FadeUp } from "@/components/ui/RevealText";
import { projects } from "@/content/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { useLang } from "@/components/providers/LanguageProvider";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const { t } = useLang();

  return (
    <section
      id="projects"
      className="relative"
      style={{
        zIndex: 1,
        marginTop: "-28vh",
        paddingTop: "28vh",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <FadeUp delay={0}>
              <p
                className="text-xs tracking-[0.25em] uppercase text-greige mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.projects.label}
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
              <RevealLine delay={0.05}>{t.projects.line1}</RevealLine>
              <RevealLine delay={0.18}>
                <span className="text-greige">{t.projects.line2}</span>
              </RevealLine>
            </h2>
          </div>
          <FadeUp delay={0.2}>
            <p
              className="text-greige text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.projects.description}
            </p>
          </FadeUp>
        </div>

        {/* Desktop — grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Mobile — infinite carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, i) => (
                <div
                  key={project.slug}
                  className="flex-none w-[85vw] mr-5"
                >
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center justify-end gap-3 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 flex items-center justify-center border border-border text-greige hover:border-ink hover:text-ink transition-colors duration-200"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 flex items-center justify-center border border-border text-greige hover:border-ink hover:text-ink transition-colors duration-200"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
