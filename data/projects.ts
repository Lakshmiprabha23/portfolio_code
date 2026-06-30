export type Project = {
  slug: string;
  badge?: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  flow: string[];
  /** Optional one-line clarification of what was/wasn't owned on this project. */
  scopeNote?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-product-catalog-crawler",
    title: "AI-Powered Product Catalog Crawler",
    description:
      "A distributed Python/FastAPI crawler that extracts structured product data from e-commerce sites at scale, using a multi-strategy fallback chain and AWS Bedrock LLMs for intelligent extraction, description generation, and deduplication.",
    highlights: [
      "Multi-strategy fallback crawling chain — Crawl4AI, Playwright & Patchright",
      "AWS Bedrock (Nova Micro, Claude Sonnet) for product extraction & description generation",
      "Vector-embedding-based duplicate detection across listings",
      "Hybrid in-memory + PostgreSQL queue processing 100K+ URLs on 16GB containers",
      "Anti-bot bypass via stealth scripts, browser rotation & human-like interaction patterns",
      "Image extraction pipeline (HTML, JSON-LD, Next.js NEXT_DATA) with S3 upload & dedup",
      "Diagnosed containerized-Chromium DNS failures, memory-pressure crashes & hang detection for long-running crawls",
    ],
    tech: [
      "Python",
      "FastAPI",
      "AsyncIO",
      "Playwright",
      "Patchright",
      "Crawl4AI",
      "AWS Bedrock",
      "PostgreSQL (async)",
      "S3",
      "Docker",
    ],
    flow: ["Queue", "Crawl Engine", "LLM Extractor", "Embeddings", "Deduplication", "S3 Storage"],
  },
  {
    slug: "ai-agent-evaluation-framework",
    title: "AI Agent Evaluation Framework",
    description:
      "A production-grade evaluation microservice that automates quality testing of LLM-powered AI agents, using MLflow experiment tracking, custom LLM-as-a-judge scorers, and AWS Bedrock for semantic analysis.",
    highlights: [
      "5 custom MLflow scorers — score, reasoning, rewrite, target & response-similarity correctness",
      "LLM-as-a-judge pattern via AWS Bedrock with configurable tolerance thresholds",
      "Async, multi-epoch evaluation pipeline with background task processing",
      "S3-based test case ingestion and PostgreSQL audit/error logging",
      "Extensible scorer architecture — new metrics added via YAML, no code changes",
      "Multi-stage Docker builds with health checks, packaged for ECS-based hosting",
    ],
    tech: ["Python", "FastAPI", "MLflow", "AWS Bedrock", "Pydantic", "AsyncIO", "PostgreSQL", "Docker"],
    flow: ["Input Cases", "Agent Execution", "MLflow Tracking", "Custom Scorers", "Evaluation Reports"],
  },
  {
    slug: "rapid-agent-service",
    title: "Rapid Agent Service",
    description:
      "A multi-agent microservice for financial-services communications — scoring sentiment, tone & regulatory compliance, measuring readability against Flesch-Kincaid metrics, and rewriting content to hit target scores while preserving meaning.",
    highlights: [
      "Independent Sentiment, Readability & Rewrite agents built with PydanticAI",
      "Structured-output parsing with retry logic across AWS Bedrock model ARNs",
      "Load-balanced multi-model failover when models are rate-limited or unavailable",
      "Token-aware chunking (tiktoken) for documents exceeding LLM context windows",
      "YAML-driven pre/post-processing pipeline with a processor registry pattern",
      "Pytest suite with AsyncMock fixtures covering edge cases",
    ],
    tech: [
      "Python 3.11",
      "FastAPI",
      "Pydantic v2",
      "PydanticAI",
      "AWS Bedrock",
      "tiktoken",
      "AsyncIO",
      "PostgreSQL (pgvector)",
      "pytest",
    ],
    flow: ["Input", "Chunker", "Sentiment / Readability / Rewrite Agents", "Aggregator"],
  },
  {
    slug: "healthcare-conversational-ai",
    title: "Healthcare Conversational AI",
    description:
      "The backend intelligence behind a healthcare conversational assistant — Lambda logic for patient authentication, order-status retrieval, and feedback collection, returning Lex-compatible fulfillment responses to the conversational interface.",
    highlights: [
      "Multi-step patient identity verification with LLM-powered free-text parsing",
      "Intent classification via AWS Bedrock (Nova) using dynamic, database-driven prompts",
      "Order-status retrieval with natural-language responses generated from chat history",
      "Layered architecture (Controller → Service → Repository → Utility) with centralized error logging",
      "Per-invocation token usage tracking for LLM cost monitoring",
      "Secure credential handling via AWS Secrets Manager",
    ],
    tech: ["Python", "AWS Lambda", "AWS Bedrock (Nova)", "PostgreSQL", "AWS Secrets Manager", "Boto3"],
    flow: ["User", "Lex Interface", "Lambda Logic", "Bedrock", "PostgreSQL", "Response"],
  },
  {
    slug: "ai-technician-dispatch-system",
    title: "AI Technician Dispatch System",
    description:
      "A GenAI dispatch backend using a RAG-style pipeline — generates vector embeddings from service issues, retrieves matches from a technician knowledge base, and uses LLM-driven ranking to recommend the best-fit technician.",
    highlights: [
      "RAG-style pipeline: embed issue → semantic search → LLM ranking",
      "AWS Bedrock Claude 3.7 Sonnet for ranking, Amazon Titan Embeddings for vector search",
      "Layered async architecture (Controller → Service → Repository) with token-based auth middleware",
      "Secure credential handling via AWS Secrets Manager",
      "Parameterized PostgreSQL queries with connection lifecycle management",
    ],
    tech: ["Python (async)", "FastAPI", "AWS Bedrock", "Amazon Titan Embeddings", "PostgreSQL", "Pydantic"],
    flow: ["Issue", "Embedding", "Semantic Search", "Technician Ranking", "Assignment"],
  },
];
