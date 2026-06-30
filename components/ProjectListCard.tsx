"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectListCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.3) }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group card-hover block rounded-2xl border border-line bg-card p-7 md:p-9"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.badge && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-gradient text-white">
                  {project.badge}
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary max-w-2xl leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-1">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-text-secondary border border-line rounded-md px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="text-xs font-mono text-text-secondary px-2.5 py-1">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>

            {project.scopeNote && (
              <p className="text-xs text-text-secondary/70 italic mt-4 max-w-xl">
                {project.scopeNote}
              </p>
            )}
          </div>

          <span className="shrink-0 mt-1 w-9 h-9 rounded-full border border-line flex items-center justify-center text-text-secondary transition-all duration-300 group-hover:text-white group-hover:bg-accent group-hover:border-accent group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
