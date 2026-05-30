"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"

type Experience = {
  company: string
  position: string
  period: string
  location: string
  description: string
  technologies: string[]
  responsibilities: string[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "Aswar Group",
      position: "Front-End Developer",
      period: "03/2025 - Present",
      location: "Baghdad, Iraq (Hybrid)",
      description: "Spearhead front-end architecture, API integrations, and layout optimizations for high-traffic compound management software, video analytics panels, and comprehensive ERP portals.",
      technologies: ["Vue.js", "React", "Next.js", "NuxtJS", "Tailwind CSS", "shadcn/ui", "REST APIs", "TypeScript"],
      responsibilities: [
        "Led the engineering and maintenance of multiple enterprise systems, including Jawahir Compound Management, Video Analytics, and the main ERP Front-End.",
        "Engineered pristine interfaces from inception, implementing highly responsive layouts with a strong emphasis on UI/UX enhancements and user-friction reduction.",
        "Seamlessly integrated complex REST APIs and collaborated with backend teams to guarantee reliable system deployment and low-latency interaction loops.",
        "Constructed a suite of highly reusable client components and utilities, drastically cutting future page build-times by 35%.",
        "Advocated for structured agile project management practices and contributed valuable technical insights to refine overall engineering workflows."
      ],
    },
    {
      company: "Freelance Development",
      position: "Full-Stack Developer",
      period: "2025 - Present",
      location: "Remote",
      description: "Partner with international and local clients to deliver custom, responsive web systems, administrative dashboard portals, and complete database integrations.",
      technologies: ["Vue.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Zustand", "REST APIs", "Git"],
      responsibilities: [
        "Crafted interactive and fully responsive frontend UI assemblies with rich CSS animations and transitions.",
        "Architected full-stack backend solutions utilizing Node.js and Express.js, handling database migrations and query optimization on PostgreSQL.",
        "Configured secure user authentication modules and REST API layers to support robust cross-origin data queries.",
        "Collaborated directly with clients to translate business requirements into working specifications, delivering clean codebases within strict deadlines."
      ],
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            My professional journey building real-world enterprise applications and full-stack solutions.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-border/60 pl-6 md:pl-8 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot node */}
              <div className="absolute -left-[39px] md:-left-[47px] top-1.5 p-2 rounded-full bg-card border border-primary/40 text-primary shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                <Briefcase className="h-4.5 w-4.5 text-glow-primary" />
              </div>

              {/* Card wrapper */}
              <Card className="bg-card/45 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-bold">{exp.position}</CardTitle>
                      <div className="text-base font-semibold text-primary mt-1 flex items-center gap-1.5">
                        <span>{exp.company}</span>
                        <span className="text-muted-foreground text-xs font-normal">| {exp.location}</span>
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="w-fit text-xs px-2.5 py-1 border-primary/40 bg-primary/5 text-primary font-bold flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed italic">{exp.description}</p>

                  {/* Key achievements list */}
                  <div className="space-y-2.5">
                    <h4 className="text-sm font-bold text-foreground">Key Accomplishments:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary/80 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pill badges */}
                  <div className="pt-3 border-t border-border/40">
                    <h4 className="text-xs font-bold text-foreground/80 mb-2">Technologies Handled:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[10px] md:text-xs bg-muted/70 hover:bg-primary/10 hover:text-primary transition-all duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
