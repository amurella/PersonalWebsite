import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/content";

export const metadata: Metadata = {
  title: "Experience | Akhila Murella",
  description: "Professional experience and career highlights of Akhila Murella, including roles at Microsoft Xbox, Meta, and Intel.",
};

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey and career highlights"
      />

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            period={experience.period}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
}
