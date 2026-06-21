import { notFound } from "next/navigation";
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
    title: `${project.title} — Interior Design ${project.location} · Julia Busigina`,
    description: `${project.summary} Interior design project in ${project.location} by Julia Busigina — luxury interiors Dubai & Abu Dhabi.`,
    openGraph: {
      title: `${project.title} — Julia Busigina Interior Design`,
      description: `${project.summary} ${project.location}, UAE.`,
      images: [{ url: project.cover, width: 1200, height: 800, alt: `${project.title} interior design ${project.location}` }],
    },
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

        <ProjectPageContent project={project} others={others} />
      </main>
      <Footer />
    </>
  );
}
