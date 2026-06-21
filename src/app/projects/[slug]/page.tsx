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

        <ProjectPageContent project={project} others={others} />
      </main>
      <Footer />
    </>
  );
}
