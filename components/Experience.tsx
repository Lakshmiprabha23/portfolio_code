"use client";

import { motion } from "framer-motion";
import { experience, type ExperienceItem } from "@/data/experience";
import SectionHeading from "./SectionHeading";
import BackLink from "./BackLink";

type CompanyGroup = {
  company: string;
  current: boolean;
  roles: ExperienceItem[];
};

function groupByCompany(items: ExperienceItem[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last.company === item.company) {
      last.roles.push(item);
      last.current = last.current || Boolean(item.current);
    } else {
      groups.push({ company: item.company, current: Boolean(item.current), roles: [item] });
    }
  }
  return groups;
}

export default function Experience() {
  const groups = groupByCompany(experience);

  return (
    <section className="section-px pt-32 pb-24 max-w-7xl mx-auto">
      <BackLink />
      <SectionHeading eyebrow="Career" title="Experience" />

      <div className="relative border-l border-line pl-8 space-y-14 ml-1">
        {groups.map((group, i) => (
          <motion.div
            key={group.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span
              className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${
                group.current ? "bg-accent shadow-glow" : "bg-line"
              }`}
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5">
              <h3 className="text-xl font-medium text-text-primary">{group.company}</h3>
              {group.current && (
                <span className="text-xs font-mono text-success border border-success/30 rounded-full px-2 py-0.5">
                  current
                </span>
              )}
            </div>

            <div
              className={
                group.roles.length > 1
                  ? "space-y-8 border-l border-line/70 pl-6"
                  : undefined
              }
            >
              {group.roles.map((item) => (
                <div key={`${item.role}-${item.period}`} className="relative">
                  {group.roles.length > 1 && (
                    <span
                      className={`absolute -left-[27px] top-1.5 w-2 h-2 rounded-full ${
                        item.current ? "bg-accent" : "bg-line"
                      }`}
                    />
                  )}

                  <p className="text-text-primary text-sm font-medium">{item.role}</p>
                  <p className="text-text-secondary text-sm mt-0.5">{item.period}</p>

                  <p className="mt-3 text-text-secondary max-w-2xl leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.achievements.map((a) => (
                      <span
                        key={a}
                        className="text-xs font-mono text-text-secondary border border-line rounded-full px-3 py-1"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}