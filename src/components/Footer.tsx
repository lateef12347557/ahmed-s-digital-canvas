import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ahmed Abdullateef. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/ahmed-abdullateef"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
