interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="p-6 bg-white border border-border rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="text-sm text-secondary">{period}</span>
      </div>
      <p className="text-accent font-medium mb-1">{company}</p>
      <p className="text-sm text-secondary mb-4">{location}</p>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-secondary text-sm flex">
            <span className="mr-2 text-accent">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
