"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

const featured = projects.slice(0, 2);

export default function FeaturedProjects() {
  return (
    <section className="section-px py-24 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
        />
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-12"
        >
          View all projects
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group card-hover block h-full rounded-2xl border border-line bg-card p-7"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                {project.badge ? (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-gradient text-white">
                    {project.badge}
                  </span>
                ) : (
                  <span className="font-mono text-xs text-text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-text-secondary transition-all duration-300 group-hover:text-white group-hover:bg-accent group-hover:border-accent group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-text-secondary border border-line rounded-md px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
