"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.01, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[4/5] bg-border/40">
          {/* Actual image */}
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Sliding reveal overlay */}
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay: index * 0.1 + 0.05, ease }}
            style={{ originX: 1, backgroundColor: "var(--canvas)" }}
          />

          {/* Category tag */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className="px-3 py-1 bg-canvas-alt/92 text-[10px] tracking-[0.2em] uppercase text-greige"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="pt-5 pb-2">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="text-ink group-hover:text-greige transition-colors duration-200"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              {project.title}
            </h3>
            <span
              className="text-[10px] tracking-[0.15em] uppercase text-greige shrink-0 pt-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.timeline}
            </span>
          </div>
          <p
            className="text-greige text-sm mt-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.location}
          </p>

          {/* Expanding underline on hover */}
          <div className="mt-3 h-px bg-border relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-wood w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
