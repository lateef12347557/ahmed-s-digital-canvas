import { motion } from "framer-motion";
import { Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-20 -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-2xl font-bold">
              <span className="gradient-text">Ahmed</span>
              <span className="text-muted-foreground">.</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://linkedin.com/in/ahmed-abdullateef"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            © {currentYear} Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Ahmed
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
