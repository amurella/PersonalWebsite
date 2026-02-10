interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-medium bg-white border border-border rounded-full text-foreground hover:border-accent transition-colors">
      {skill}
    </span>
  );
}
