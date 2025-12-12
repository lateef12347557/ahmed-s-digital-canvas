import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import projectNewage from "@/assets/project-newage.png";
import projectUslm from "@/assets/project-uslm.png";
import projectShear from "@/assets/project-shear.png";
import projectSkill from "@/assets/project-skill.png";

const projects = [
  {
    title: "NewAge Build",
    description: "A polished informational website for a house-modeling company. Features a modern UI, responsive layout, and clean architectural service sections.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://Newage-build.vercel.app",
    image: projectNewage,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "USLM",
    description: "A natural resources corporate website for a limestone company. Includes service descriptions, product info, and company overview.",
    stack: ["React", "TypeScript"],
    link: "https://uslm.vercel.app",
    image: projectUslm,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Shear Style Spark",
    description: "A full barber-shop management system supporting online booking, appointment management, shop displays, and more.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    link: "https://shear-style-spark.vercel.app",
    image: projectShear,
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Skill-to-Earn",
    description: "A student-focused learning platform where users can learn, earn, and build digital skills. Includes interactive modules and user profiles.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    link: "https://skill-to-earning.vercel.app",
    image: projectSkill,
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    title: "Royal Bell Schools",
    description: "A modern school website featuring student information, academic programs, and enrollment details. Clean design with intuitive navigation.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://royal-bell-schools.vercel.app/",
    image: projectNewage,
    color: "from-purple-500/20 to-pink-500/20"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`glass-card rounded-3xl overflow-hidden premium-border transition-all duration-500 hover:scale-[1.01]`}>
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-sm text-muted-foreground">0{index + 1}</span>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-0 hover:bg-primary/20 px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
