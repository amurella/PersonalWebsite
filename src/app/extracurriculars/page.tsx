import SectionHeader from "@/components/SectionHeader";
import { extracurriculars } from "@/data/content";

export default function Extracurriculars() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SectionHeader
        title="Extracurriculars"
        subtitle="Activities and interests beyond work"
      />

      <div className="space-y-6">
        {extracurriculars.map((activity, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-border rounded-lg hover:shadow-sm transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {activity.title}
              </h3>
              <span className="text-sm text-secondary">{activity.period}</span>
            </div>
            <p className="text-accent font-medium mb-3">
              {activity.organization}
            </p>
            <p className="text-secondary text-sm">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
