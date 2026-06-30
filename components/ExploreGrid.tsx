"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Briefcase, Network, GraduationCap, ArrowRight } from "lucide-react";

const tiles = [
  {
    href: "/skills",
    icon: Brain,
    title: "Skills",
    description: "LLM engineering, backend, cloud & MLOps",
  },
  {
    href: "/experience",
    icon: Briefcase,
    title: "Experience",
    description: "Career timeline and key achievements",
  },
  {
    href: "/architecture",
    icon: Network,
    title: "Architecture",
    description: "RAG, agentic workflows & eval pipelines",
  },
  {
    href: "/education",
    icon: GraduationCap,
    title: "Education",
    description: "Academic background",
  },
];

export default function ExploreGrid() {
  return (
    <section className="section-px py-24 max-w-7xl mx-auto">
      <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3">
        Explore
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12">
        Dig deeper
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiles.map((tile, i) => {
          const Icon = tile.icon;
          return (
            <motion.div
              key={tile.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={tile.href}
                className="group card-hover block h-full rounded-2xl border border-line bg-card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-gradient-soft flex items-center justify-center mb-5">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-medium text-text-primary mb-1.5">{tile.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{tile.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-accent">
                  View
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
