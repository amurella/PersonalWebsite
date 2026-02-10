interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
      {subtitle && (
        <p className="text-secondary text-lg">{subtitle}</p>
      )}
    </div>
  );
}
