"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, Check, Copy } from "lucide-react";
import { site } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import BackLink from "./BackLink";

const email = site.links.email.replace("mailto:", "");

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available — fall back silently, mailto link below still works
    }
  };

  return (
    <section className="section-px pt-32 pb-24 max-w-7xl mx-auto">
      <BackLink />
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's Build AI Systems Together"
        description="Open to roles and collaborations in generative AI, agentic systems, and AI infrastructure."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl">
        <motion.button
          type="button"
          onClick={handleCopy}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="card-hover rounded-2xl border border-line bg-card p-6 flex flex-col items-start gap-3 text-left relative"
        >
          <Mail size={18} className="text-accent" />
          <span className="text-sm text-text-secondary">Email</span>
          <span className="text-sm text-text-primary break-all">{email}</span>
          <span className="absolute top-5 right-5 text-text-secondary">
            {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
          </span>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-8 right-0 text-xs font-mono text-success bg-card border border-line rounded-md px-2 py-1"
            >
              Copied!
            </motion.span>
          )}
        </motion.button>

        <motion.a
          href={site.links.github}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="card-hover rounded-2xl border border-line bg-card p-6 flex flex-col items-start gap-3"
        >
          <Github size={18} className="text-accent" />
          <span className="text-sm text-text-secondary">GitHub</span>
          <span className="text-sm text-text-primary break-all">
            https://github.com/Lakshmiprabha23
          </span>
        </motion.a>

        <motion.a
          href={site.links.linkedin}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="card-hover rounded-2xl border border-line bg-card p-6 flex flex-col items-start gap-3"
        >
          <Linkedin size={18} className="text-accent" />
          <span className="text-sm text-text-secondary">LinkedIn</span>
          <span className="text-sm text-text-primary break-all">
            https://linkedin.com/in/lakshmiprabha-arunagiri
          </span>
        </motion.a>

        <motion.a
          href={site.links.resume}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="card-hover rounded-2xl border border-line bg-card p-6 flex flex-col items-start gap-3"
        >
          <FileDown size={18} className="text-accent" />
          <span className="text-sm text-text-secondary">Resume</span>
          <span className="text-sm text-text-primary">Download PDF</span>
        </motion.a>
      </div>
    </section>
  );
}
