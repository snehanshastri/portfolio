import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-quicksand font-bold text-center mb-4 text-gradient">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Academic excellence and continuous learning
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* College */}
          <Card className="card-hover bg-card border-primary/20 shadow-lg animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-quicksand text-xl">B.M.S. College of Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base font-semibold text-foreground mb-2">
                Bachelor of Engineering in Computer Science & Engineering
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <Award className="w-5 h-5" />
                <span className="text-lg font-bold">CGPA: 9.5/10</span>
              </div>
            </CardContent>
          </Card>

          {/* School */}
          <Card className="card-hover bg-card border-accent/20 shadow-lg animate-fade-in animate-delay-100">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-quicksand text-xl">St. Francis De Sales Public School</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-base font-semibold text-foreground">ISC Class XII: 99.5%</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-base font-semibold text-foreground">ICSE Class X: 98%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
