import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "HTML", "CSS"],
      color: "bg-primary/10 text-primary border-primary/30",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "React Native", "NestJS", "Flutter", "NumPy", "Pandas", "Scikit-Learn"],
      color: "bg-secondary/10 text-secondary border-secondary/30",
    },
    {
      title: "Databases",
      skills: ["MySQL", "Firebase", "MongoDB"],
      color: "bg-accent/10 text-accent border-accent/30",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Bitbucket", "JIRA", "Figma", "Expo", "Docker", "REST APIs", "Agile/Scrum"],
      color: "bg-info/10 text-info border-info/30",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-quicksand font-bold text-center mb-4 text-gradient">
          Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Technical expertise and tools
        </p>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-quicksand font-semibold text-lg mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className={`${category.color} px-4 py-2 text-sm font-medium rounded-full hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
