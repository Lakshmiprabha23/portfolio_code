"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import { education, achievements, strengths } from "@/data/education";
import SectionHeading from "./SectionHeading";
import BackLink from "./BackLink";

export default function Education() {
  return (
    <section className="section-px pt-32 pb-24 max-w-7xl mx-auto">
      <BackLink />
      <SectionHeading eyebrow="Background" title="Education" />

      <div className="grid sm:grid-cols-2 gap-5 mb-14">
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-hover rounded-2xl border border-line bg-card p-7 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-gradient-soft flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-accent" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium text-text-primary">{item.degree}</h3>
                {item.honor && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-gradient text-white">
                    {item.honor}
                  </span>
                )}
              </div>
              <p className="text-sm text-text-secondary mt-1">{item.institution}</p>
              <p className="text-sm font-mono text-success mt-2">CGPA: {item.cgpa}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-line bg-card p-7 md:p-9 mb-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award size={18} className="text-accent" />
          <h3 className="font-medium text-text-primary">Achievements</h3>
        </div>
        <ul className="space-y-3">
          {achievements.map((a) => (
            <li key={a} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {a}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl border border-line bg-card p-7 md:p-9"
      >
        <div className="flex items-center gap-3 mb-5">
          <Sparkles size={18} className="text-accent" />
          <h3 className="font-medium text-text-primary">Recognized For</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {strengths.map((s) => (
            <span
              key={s}
              className="text-sm text-text-secondary border border-line rounded-full px-4 py-1.5"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
