import { personalInfo, skills, experiences, blogPosts } from "@/data/content";
import SocialLinks from "@/components/SocialLinks";
import SkillBadge from "@/components/SkillBadge";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] -mt-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-secondary mb-8">{personalInfo.tagline}</p>
        <SocialLinks className="justify-center" iconSize={24} />
      </section>

      {/* About */}
      <section id="about">
        <h2 className="text-2xl font-bold text-foreground mb-6">About Me</h2>
        <div className="prose prose-gray max-w-none mb-8">
          {personalInfo.bio.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-secondary leading-relaxed mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Skills &amp; Technologies
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="text-2xl font-bold text-foreground mb-6">Experience</h2>
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
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-2xl font-bold text-foreground mb-6">Projects</h2>
        <div className="p-6 bg-white border border-border rounded-lg">
          <p className="text-lg font-semibold text-foreground">Coming Soon</p>
          <p className="text-secondary text-sm mt-1">Projects coming soon. Stay tuned!</p>
        </div>
      </section>

      {/* Blog */}
      <section id="blog">
        <h2 className="text-2xl font-bold text-foreground mb-6">Blog</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-border rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {post.title}
                </h3>
                <span className="text-sm text-secondary">{post.date}</span>
              </div>
              <p className="text-secondary text-sm">{post.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
