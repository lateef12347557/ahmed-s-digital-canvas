import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 92 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 70 },
  ],
};

const techLogos = [
  "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Git", "VS Code"
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: 'var(--gradient-primary)' }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-marquee">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex-shrink-0 mx-8 glass-card rounded-xl px-6 py-4"
              >
                <span className="text-lg font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Frontend */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold">Frontend Development</h3>
            </div>
            
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-2xl font-bold">Backend Development</h3>
            </div>
            
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1 + 0.3}
                />
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 glass-card rounded-2xl p-6 premium-border"
            >
              <h4 className="font-semibold mb-3">Also proficient in:</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "REST APIs", "Responsive Design", "UI/UX", "Agile", "Problem Solving"].map((item) => (
                  <span key={item} className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
