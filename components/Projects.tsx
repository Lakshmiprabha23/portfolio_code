import { projects } from "@/data/projects";
import ProjectListCard from "./ProjectListCard";
import SectionHeading from "./SectionHeading";
import BackLink from "./BackLink";

export default function Projects() {
  return (
    <section className="section-px pt-32 pb-24 max-w-7xl mx-auto">
      <BackLink />
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Projects"
        description="Five production-grade systems spanning crawling pipelines, agent evaluation, conversational AI, and semantic dispatch. Open one to see the full architecture."
      />

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectListCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
