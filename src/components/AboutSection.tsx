import { MapPin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Get to know me better
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-medium">Junior Full-Stack Developer</span> with 
              less than 2 years of experience building web applications. I specialize in 
              creating functional, user-focused solutions using modern technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity about how websites work, 
              and it has evolved into a deep passion for crafting clean, efficient, and 
              scalable applications that solve real-world problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm constantly learning new technologies and best practices 
              to improve my skills and deliver better solutions for my clients.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:lateefahmed3852@gmail.com" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    lateefahmed3852@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+2347010003852" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +234 701 000 3852
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
