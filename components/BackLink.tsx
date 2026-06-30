"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackLink({
  href = "/",
  label = "Home",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 mb-8">
      <motion.span
        className="inline-flex"
        initial={false}
        whileHover={{ x: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <ArrowLeft size={15} className="text-accent" />
      </motion.span>
      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
        Back to {label}
      </span>
    </Link>
  );
}
