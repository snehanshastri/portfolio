import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sneha-n-shastri-b37299257/",
      color: "hover:text-primary",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/snehanshastri",
      color: "hover:text-secondary",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:snehashastri4002@gmail.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-quicksand font-bold text-center mb-4 text-gradient">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          Open to internships, collaborations, and interesting engineering opportunities.
        </p>

        <Card className="card-hover bg-card shadow-xl animate-fade-in border-border/40">
          <CardHeader>
            <CardTitle className="font-quicksand text-xl text-center">
              Find Me On
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex justify-center gap-6 py-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${link.color} transition-all hover:scale-110 shadow-md`}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
