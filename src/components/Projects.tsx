import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BookIt",
      tech: "React • Node.js • Vercel",
      description: "Full-stack booking platform with modern UI/UX. Built responsive frontend pages and integrated backend APIs. Deployed on Vercel for fast, scalable access.",
      link: "https://bookit-frontend-sandy.vercel.app/",
      gradient: "from-primary to-info",
    },
    {
      title: "Conversational Data Explorer",
      tech: "React (TS) • Gemini API",
      description: "Built a conversational interface for CSV/JSON exploration. Achieved 90% parsing accuracy for natural language queries. Automated insight generation reduced manual analysis by 40%.",
      date: "Aug 2025 – Oct 2025",
      gradient: "from-secondary to-primary",
    },
    {
      title: "Long Document Summarization",
      tech: "Python • GNNs",
      description: "Hybrid hierarchical attention + GNN architecture. Achieved 30% faster summarization over baseline transformers.",
      date: "Feb 2025 – Present",
      gradient: "from-accent to-info",
    },
    {
      title: "WalSafe",
      tech: "React (TS) • Python",
      description: "Walmart-style UI with integrated fraud detection based on behavioral biometrics. 92% accuracy in detecting anomalous sessions.",
      gradient: "from-info to-accent",
    },
    {
      title: "ArogyaMitra",
      tech: "ReactJS • Firebase",
      description: "Clinic–patient platform for appointments, history, prescriptions & billing. Scalable frontend + Firebase real-time database.",
      date: "Aug 2024 – Sep 2024",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Fashion Challenger System",
      tech: "Flutter • Firebase",
      description: "Gamified fashion challenge app with real-time leaderboard. Optimized Firebase queries and reduced latency by 20%.",
      date: "Jun 2024 – Jul 2024",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-quicksand font-bold text-center mb-4 text-gradient">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Innovative solutions and technical explorations
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border/40 shadow-lg animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-3`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-quicksand text-lg mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {project.tech}
                </CardDescription>
                {project.date && (
                  <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.link && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
