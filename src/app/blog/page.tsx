import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/data/content";

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <SectionHeader
        title="Blog"
        subtitle="Thoughts and writings"
      />

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
    </div>
  );
}
