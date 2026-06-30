"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Check, ArrowLeft, ArrowRight, Info } from "lucide-react";
import type { Project } from "@/data/projects";
import BackLink from "./BackLink";

export default function ProjectCaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  return (
    <section className="section-px pt-32 pb-24 max-w-4xl mx-auto">
      <BackLink href="/projects" label="all projects" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.badge && (
          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-accent-gradient text-white mb-5">
            {project.badge}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
          {project.title}
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-12">
          {project.description}
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-text-secondary mb-4">
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <Check size={15} className="text-success mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-text-secondary mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-text-secondary border border-line rounded-md px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-mono uppercase tracking-widest text-text-secondary mb-4">
            Architecture Flow
          </h2>
          <div className="rounded-xl border border-line bg-card p-6 overflow-x-auto">
            <div className="flex items-center gap-2 font-mono text-sm text-text-secondary whitespace-nowrap min-w-max">
              {project.flow.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="px-3 py-2 rounded-lg border border-line text-text-primary">
                    {step}
                  </span>
                  {i < project.flow.length - 1 && (
                    <ChevronRight size={16} className="text-accent shrink-0" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.scopeNote && (
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-line bg-card/60 p-4">
            <Info size={15} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm text-text-secondary leading-relaxed">{project.scopeNote}</p>
          </div>
        )}
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 mt-16 pt-10 border-t border-line">
        <Link
          href={`/projects/${prev.slug}`}
          className="group rounded-xl border border-line p-5 hover:border-accent transition-colors"
        >
          <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-text-secondary mb-2">
            <ArrowLeft size={13} /> Previous
          </span>
          <span className="text-text-primary group-hover:text-accent transition-colors">
            {prev.title}
          </span>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-xl border border-line p-5 text-right hover:border-accent transition-colors"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs font-mono uppercase tracking-widest text-text-secondary mb-2">
            Next <ArrowRight size={13} />
          </span>
          <span className="text-text-primary group-hover:text-accent transition-colors">
            {next.title}
          </span>
        </Link>
      </div>
    </section>
  );
}
