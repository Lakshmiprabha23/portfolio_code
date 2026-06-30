"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="section-px pb-28 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-line bg-card px-8 py-14 md:px-16 md:py-16 text-center"
      >
        <div className="absolute inset-0 bg-accent-gradient-soft pointer-events-none" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Let&apos;s build AI systems together
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Open to roles and collaborations in generative AI, agentic systems, and AI
            infrastructure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover transition-colors text-sm font-medium text-white"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
