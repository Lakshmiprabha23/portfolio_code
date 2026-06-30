export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Avasoft Group (zeb Technologies)",
    role: "AI Platform Engineer",
    period: "May 2026 — June 2026",
    description:
      "Promoted to own platform-level AI architecture — designing the reusable systems other GenAI features build on, including RAG infrastructure, agent orchestration patterns, and evaluation frameworks shared across projects.",
    achievements: [
      "AI platform architecture",
      "Multi-agent orchestration",
      "Evaluation framework design",
      "Bedrock integration patterns",
    ],
  },
  {
    company: "Avasoft Group (Avasoft Technologies)",
    role: "AI/ML Engineer",
    period: "Oct 2024 — April 2026",
    description:
      "Built and shipped production-grade Generative AI and Agentic AI features end-to-end — RAG pipelines, semantic search, multi-agent microservices, and LLM evaluation tooling — using Python, FastAPI, and AWS Bedrock.",
    achievements: [
      "RAG pipeline development",
      "Semantic search pipelines",
      "Multi-agent microservices",
      "AWS Bedrock integration",
    ],
  },
  {
    company: "Galwin Technology",
    role: "Python & AI Intern",
    period: "Jan 2024",
    description:
      "Worked on foundational AI/ML projects and practical implementations involving model development and Python automation.",
    achievements: ["Model development", "Python automation", "ML fundamentals"],
  },
];