import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/content";

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
