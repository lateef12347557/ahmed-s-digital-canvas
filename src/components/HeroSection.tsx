import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Download, ChevronDown, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="hero-gradient absolute inset-0 -z-10" />
      <div className="floating-orb w-[600px] h-[600px] bg-primary/30 top-0 left-1/4 -z-10" />
      <div className="floating-orb w-[400px] h-[400px] bg-accent/20 bottom-1/4 right-1/4 -z-10" style={{ animationDelay: '-2s' }} />
      <div className="floating-orb w-[300px] h-[300px] bg-blue-500/20 top-1/2 right-1/3 -z-10" style={{ animationDelay: '-4s' }} />

      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden premium-border p-1">
              <img
                src={profilePhoto}
                alt="Ahmed Abdullateef"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/50 via-accent/50 to-blue-500/50 -z-10 blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for work</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="block">I'm Ahmed</span>
          <span className="gradient-text animate-gradient">Abdullateef</span>
        </motion.h1>

        {/* Subtitle with animation */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          Full-Stack Developer crafting
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
        >
          <span className="text-foreground font-semibold">exceptional digital experiences</span>
          <span className="text-muted-foreground"> from Lagos, Nigeria</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-lg group glow-effect"
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="border-border hover:bg-secondary px-8 h-14 text-lg premium-border"
          >
            Let's Talk
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="https://linkedin.com/in/ahmed-abdullateef"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="p-4 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
