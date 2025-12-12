import { Button } from "@/components/ui/button";
import { Linkedin, Download, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="text-center max-w-4xl mx-auto animate-fade-up">
        <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
          Full-Stack Developer
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Ahmed Abdullateef</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-1">
          I build functional, user-focused web applications with modern technologies.
          Based in Lagos, Nigeria.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fade-up-delay-2">
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-effect"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToContact}
            className="border-border hover:bg-secondary px-8"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="https://linkedin.com/in/ahmed-abdullateef"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
          </a>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
