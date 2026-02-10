import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <SocialLinks />
          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
