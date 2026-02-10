import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/content";
import SocialLinks from "@/components/SocialLinks";

const navigationCards = [
  {
    href: "/about",
    title: "About",
    description: "Learn more about me and my skills",
  },
  {
    href: "/experience",
    title: "Experience",
    description: "My professional journey",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "Side projects and experiments",
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Thoughts and writings",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-secondary mb-8">{personalInfo.tagline}</p>
        <SocialLinks className="justify-center" iconSize={24} />
      </section>

      <section>
        <h2 className="text-sm font-medium text-secondary uppercase tracking-wider mb-6 text-center">
          Explore
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {navigationCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group p-6 bg-white border border-border rounded-lg hover:shadow-sm hover:border-accent/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <ArrowRight
                  size={18}
                  className="text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all"
                />
              </div>
              <p className="text-sm text-secondary">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
