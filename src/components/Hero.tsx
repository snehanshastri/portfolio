import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          {/* Avatar placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
              <span className="text-5xl font-sora font-bold text-gradient">SN</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-quicksand font-bold text-foreground mb-4">
            Sneha N Shastri
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6 text-base sm:text-lg text-muted-foreground flex-wrap">
            <span>Software Engineer</span>
            <span className="hidden sm:inline">•</span>
            <span>Full-Stack Developer</span>
            <span className="hidden sm:inline">•</span>
            <span>ML Enthusiast</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Bangalore, Karnataka</span>
          </div>

          <p className="text-base sm:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-100">
            I build clean, scalable digital experiences across frontend, backend, and machine learning ecosystems. 
            Passionate about solving real-world problems with thoughtful engineering. Currently seeking software 
            engineering internships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-200">
            <Button
              onClick={() => handleScroll("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              View My Projects
            </Button>
            <Button
              onClick={() => handleScroll("#contact")}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base rounded-full transition-all"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
