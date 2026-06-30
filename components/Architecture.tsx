"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { architectureCards } from "@/data/architecture";
import SectionHeading from "./SectionHeading";
import BackLink from "./BackLink";

export default function Architecture() {
  return (
    <section className="section-px pt-32 pb-24 max-w-7xl mx-auto">
      <BackLink />
      <SectionHeading eyebrow="System Design" title="Architecture Showcase" />

      <div className="grid md:grid-cols-3 gap-5">
        {architectureCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl border border-line bg-card p-7 overflow-hidden card-hover"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-gradient" />
            <h3 className="font-medium text-text-primary mb-6">{card.title}</h3>

            <div className="flex flex-col items-start gap-1.5 font-mono text-sm">
              {card.steps.map((step, idx) => (
                <div key={step} className="w-full">
                  <span className="block border border-line rounded-lg px-3 py-2 text-text-secondary">
                    {step}
                  </span>
                  {idx < card.steps.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown size={14} className="text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
