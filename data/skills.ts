export type SkillCategory = {
  title: string;
  icon: "brain" | "server" | "cloud" | "gauge";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "LLM Engineering",
    icon: "brain",
    items: [
      "RAG Pipelines",
      "Prompt Engineering",
      "Vector Embeddings & Semantic Search",
      "Agentic AI / Multi-Agent Systems",
      "AWS Bedrock (Claude, Nova, Titan)",
      "LLM-as-a-Judge Evaluation",
    ],
  },
  {
    title: "Backend Engineering",
    icon: "server",
    items: [
      "Python (Async)",
      "FastAPI",
      "Pydantic v2 / PydanticAI",
      "REST API Design (OpenAPI)",
      "PostgreSQL / pgvector",
      "Token-Aware Chunking (tiktoken)",
    ],
  },
  {
    title: "Cloud & AI Infrastructure",
    icon: "cloud",
    items: ["AWS Lambda", "AWS Bedrock", "Amazon S3", "Secrets Manager", "Boto3", "Docker"],
  },
  {
    title: "MLOps & Evaluation",
    icon: "gauge",
    items: [
      "MLflow Experiment Tracking",
      "Custom LLM Scorers",
      "Async Evaluation Pipelines",
      "pytest (AsyncMock)",
      "CloudWatch Logging",
    ],
  },
];
