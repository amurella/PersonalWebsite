import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects | Akhila Murella",
  description: "Side projects and experiments built by Akhila Murella.",
};

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SectionHeader
        title="Projects"
        subtitle="Side projects and experiments I've built"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}
