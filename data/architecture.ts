export type ArchitectureCard = {
  title: string;
  steps: string[];
};

export const architectureCards: ArchitectureCard[] = [
  {
    title: "RAG Architecture",
    steps: ["User Query", "Retriever", "Vector Search", "Context Injection", "LLM", "Response"],
  },
  {
    title: "Agentic Workflow",
    steps: ["Input", "Planner Agent", "Worker Agents", "Validator Agent", "Final Output"],
  },
  {
    title: "LLM Evaluation Pipeline",
    steps: ["Test Cases", "Agent Runs", "Scorers", "MLflow", "Metrics Dashboard"],
  },
];
