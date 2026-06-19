import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/content/projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectPageContent from "@/components/sections/ProjectPageContent";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Julia Busigina`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-canvas min-h-screen">

        {/* Hero — full cover image */}
        <div className="relative h-[70vh] min-h-[500px] flex items-end">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
            <p
              className="text-xs tracking-[0.25em] uppercase text-canvas-alt/60 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.location} · {project.timeline} · {project.category}
            </p>
            <h1
              className="text-canvas-alt leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                fontWeight: 300,
              }}
            >
              {project.title}
            </h1>
          </div>
        </div>

        <ProjectPageContent project={project} others={others} />
      </main>
      <Footer />
    </>
  );
}
