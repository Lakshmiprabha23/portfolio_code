import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Lakshmiprabha` : "Project — Lakshmiprabha" };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return <ProjectCaseStudy project={project} prev={prev} next={next} />;
}
