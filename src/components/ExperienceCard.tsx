"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-border rounded-lg hover:shadow-sm transition-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <span className="text-sm text-secondary">{period}</span>
          </div>
          <p className="text-accent font-medium">{company}</p>
          <p className="text-sm text-secondary">{location}</p>
        </div>
        <ChevronDown
          size={20}
          className={`text-secondary flex-shrink-0 mt-1 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 pt-0">
          <ul className="space-y-2 border-t border-border pt-4">
            {description.map((item, index) => (
              <li key={index} className="text-secondary text-sm flex">
                <span className="mr-2 text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
