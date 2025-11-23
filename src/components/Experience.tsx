import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle2 } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-quicksand font-bold text-center mb-4 text-gradient">
          Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Building impactful solutions in the industry
        </p>

        <Card className="card-hover bg-card border-info/30 shadow-lg animate-fade-in">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-info/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-info" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-quicksand text-xl sm:text-2xl mb-2">
                  Deutsche India Pvt. Ltd
                </CardTitle>
                <p className="text-base font-semibold text-primary mb-1">Summer Intern</p>
                <p className="text-muted-foreground">May 2025 – June 2025</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-foreground/90">
                  Resolved 5+ UI inconsistencies, improving responsiveness & UX across multiple platforms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-foreground/90">
                  Created 30+ Jest/Vitest tests, achieving 95% code coverage and reducing integration bugs by 25%
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-foreground/90">
                  Streamlined workflows with cross-functional teams, cutting debugging time by 20%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
