import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import SkillBadge from "@/components/SkillBadge";
import { personalInfo, skills } from "@/data/content";

export const metadata: Metadata = {
  title: "About | Akhila Murella",
  description: "Learn more about Akhila Murella - Product Manager & Builder with a background in computer science and experience in entertainment tech.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SectionHeader
        title="About Me"
        subtitle="Get to know a little more about who I am"
      />

      <section className="mb-12">
        <div className="prose prose-gray max-w-none">
          {personalInfo.bio.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-secondary leading-relaxed mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
