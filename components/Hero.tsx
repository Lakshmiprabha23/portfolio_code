"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { site } from "@/lib/constants";
import TerminalCard from "./TerminalCard";

export default function Hero() {
  return (
    <section className="section-px pt-36 pb-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-5">
            {site.name}
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            {site.role}
            <br />
            <span className="gradient-text">{site.headline}</span>
          </h1>

          <p className="mt-6 text-lg text-text-secondary max-w-lg">
            {site.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent hover:bg-accent-hover transition-colors text-sm font-medium text-white"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <a
              href={site.links.resume}
              className="inline-flex items-center px-5 py-3 rounded-lg border border-line hover:border-accent transition-colors text-sm font-medium text-text-primary"
            >
              Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={site.links.github}
              aria-label="GitHub"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={site.links.linkedin}
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={site.links.email}
              aria-label="Email"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
