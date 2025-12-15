import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Download, Calendar, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Passionate about creating
            <br />
            <span className="gradient-text">impactful solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and quick facts */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
                <img
                  src={profilePhoto}
                  alt="Ahmed Abdullateef"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating cards */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 premium-border"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">3+</p>
                    <p className="text-sm text-muted-foreground">Years Exp.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -left-6 glass-card rounded-2xl p-4 premium-border"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-green-500/20">
                    <Calendar className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Available</p>
                    <p className="text-xs text-muted-foreground">For projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-semibold">Junior Full-Stack Developer</span> with 
                a passion for building elegant, user-centric web applications. Based in Lagos, Nigeria, 
                I specialize in transforming complex problems into simple, beautiful solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with curiosity and has evolved into a deep commitment 
                to crafting clean, efficient, and scalable applications. I believe in the power of technology 
                to create positive change and improve lives.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm constantly exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 premium-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 premium-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href="mailto:lateefahmed3852@gmail.com" className="font-medium text-sm hover:text-primary transition-colors">
                      lateefahmed3852@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-6 glow-effect">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
