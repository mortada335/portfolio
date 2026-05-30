"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe, Server, Layers } from "lucide-react"

type Skill = {
  name: string
  proficiency: number
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages & Frameworks",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", proficiency: 92 },
        { name: "TypeScript", proficiency: 88 },
        { name: "Vue.js", proficiency: 94 },
        { name: "React", proficiency: 90 },
        { name: "Next.js", proficiency: 85 },
        { name: "NuxtJS", proficiency: 80 },
        { name: "HTML & CSS", proficiency: 95 }
      ],
    },
    {
      name: "UI & State Management",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "Tailwind CSS", proficiency: 95 },
        { name: "shadcn/ui", proficiency: 90 },
        { name: "Vuetify", proficiency: 85 },
        { name: "Pinia", proficiency: 90 },
        { name: "Zustand & Redux", proficiency: 82 },
        { name: "TanStack Query", proficiency: 85 },
        { name: "SCSS / CSS Modules", proficiency: 88 }
      ],
    },
    {
      name: "Backend & Integrations",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js & Express.js", proficiency: 84 },
        { name: "REST API Integration", proficiency: 95 },
        { name: "PWA (Progressive Web Apps)", proficiency: 80 },
        { name: "Form Handling & Validation", proficiency: 92 },
        { name: "WebSockets & Sync", proficiency: 75 }
      ],
    },
    {
      name: "Databases & DevTools",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", proficiency: 82 },
        { name: "MySQL & NoSQL", proficiency: 78 },
        { name: "Docker", proficiency: 72 },
        { name: "Git & GitHub Workflows", proficiency: 90 },
        { name: "CI/CD & Hosting (Vercel/Netlify)", proficiency: 85 }
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30 scroll-mt-16 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
            Technical Toolkit
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my software engineering capabilities, spanning client interface design, complex state orchestration, and complete server/database integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/45 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-full bg-primary/10 text-primary border border-primary/25 shadow-[0_0_10px_rgba(139,92,246,0.15)]">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                  </div>

                  {/* Skills Grid/List */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1.5 text-sm">
                          <span className="font-medium text-slate-300">{skill.name}</span>
                          <span className="text-xs text-muted-foreground font-semibold">{skill.proficiency}%</span>
                        </div>
                        {/* Progressive Bar */}
                        <div className="h-2 bg-muted/60 rounded-full overflow-hidden border border-border/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary via-indigo-500 to-accent rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
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
