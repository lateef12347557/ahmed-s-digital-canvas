const skills = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                💻
              </span>
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.frontend.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 card-hover"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="font-medium text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                🖥️
              </span>
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.backend.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 card-hover"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="font-medium text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
