import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, site } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="section-px py-12 border-t border-line max-w-7xl mx-auto mt-12">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div>
          <Link href="/" className="font-mono text-sm text-text-primary">
            {site.initials}<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-text-secondary mt-3 max-w-xs">{site.tagline}</p>
          <div className="flex items-center gap-4 mt-5">
            <a
              href={site.links.github}
              aria-label="GitHub"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={site.links.linkedin}
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={site.links.email}
              aria-label="Email"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-mono uppercase tracking-widest text-text-secondary mb-4">
            Navigate
          </p>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary border-t border-line mt-10 pt-6">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="font-mono">Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
