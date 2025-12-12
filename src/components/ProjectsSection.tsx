import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "NewAge Build",
    description: "A polished informational website for a house-modeling company. Features a modern UI, responsive layout, and clean architectural service sections.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://Newage-build.vercel.app",
    image: "/placeholder.svg"
  },
  {
    title: "USLM",
    description: "A natural resources corporate website for a limestone company. Includes service descriptions, product info, and company overview.",
    stack: ["React", "TypeScript"],
    link: "https://uslm.vercel.app",
    image: "/placeholder.svg"
  },
  {
    title: "Shear Style Spark",
    description: "A full barber-shop management system supporting online booking, appointment management, shop displays, and more.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    link: "https://shear-style-spark.vercel.app",
    image: "/placeholder.svg"
  },
  {
    title: "Skill-to-Earn",
    description: "A student-focused learning platform where users can learn, earn, and build digital skills. Includes interactive modules and user profiles.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    link: "https://skill-to-earnl.vercel.app",
    image: "/placeholder.svg"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects I've worked on, showcasing my skills in full-stack development
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
