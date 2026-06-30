"use client";

import { motion } from "framer-motion";
import { Brain, Server, Cloud, Gauge } from "lucide-react";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import BackLink from "./BackLink";

const iconMap = { brain: Brain, server: Server, cloud: Cloud, gauge: Gauge };

export default function Skills() {
  return (
    <section className="section-px pt-32 pb-24 max-w-7xl mx-auto">
      <BackLink />
      <SectionHeading eyebrow="Capabilities" title="Skills" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover rounded-2xl border border-line bg-card p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-gradient-soft flex items-center justify-center mb-5">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="font-medium text-text-primary mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
