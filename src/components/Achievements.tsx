import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Users, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "AIR 2 – Karnataka State Topper",
      subtitle: "ISC 2022",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      title: "Finalist",
      subtitle: "ArogyaMitra Hackathon",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Technical Lead",
      subtitle: "IEEE Computer Society (BMSCE)",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Code,
      title: "HackerRank Java",
      subtitle: "Gold Badge",
      color: "text-info",
      bgColor: "bg-info/10",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-quicksand font-bold text-center mb-4 text-gradient">
          Achievements
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Recognition and milestones
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border/40 shadow-lg animate-fade-in text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="font-quicksand font-semibold text-base mb-1">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
