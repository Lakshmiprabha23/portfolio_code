"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="section-px flex items-center justify-between h-16 max-w-7xl mx-auto">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-text-primary border border-line rounded-md px-2.5 py-1 hover:border-accent transition-colors"
        >
          {site.initials}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative z-10 block px-3.5 py-2 text-sm transition-colors ${
                    active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-card border border-line"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href={site.links.resume}
          className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover transition-colors text-white"
        >
          Resume
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-line">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive(link.href)
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={site.links.resume}
                className="inline-flex text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
