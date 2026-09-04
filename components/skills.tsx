"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe, Server, Layers, CheckCircle2 } from "lucide-react"

type Skill = {
  name: string
  detail: string
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
        { name: "JavaScript", detail: "Built 10+ production SPAs with ES6+ features" },
        { name: "TypeScript", detail: "Enforced type safety across large-scale codebases" },
        { name: "Vue.js", detail: "Primary framework — delivered 5 enterprise dashboards" },
        { name: "React", detail: "Built modern UIs with hooks, context, and server components" },
        { name: "Next.js", detail: "SSR/SSG apps with optimized SEO and performance" },
        { name: "NuxtJS", detail: "Developed SEO-optimized Vue applications" },
        { name: "HTML & CSS", detail: "Pixel-perfect responsive layouts and semantic markup" },
      ],
    },
    {
      name: "UI & State Management",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "Tailwind CSS", detail: "Rapid UI prototyping with utility-first approach" },
        { name: "shadcn/ui", detail: "Composed accessible component libraries" },
        { name: "Vuetify", detail: "Material Design dashboards with custom theming" },
        { name: "Pinia", detail: "Modular state management for Vue 3 apps" },
        { name: "Zustand & Redux", detail: "Centralized state for complex React workflows" },
        { name: "TanStack Query", detail: "Optimistic updates and intelligent cache invalidation" },
        { name: "SCSS / CSS Modules", detail: "Scoped styling with maintainable architectures" },
      ],
    },
    {
      name: "Backend & Integrations",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js & Express.js", detail: "RESTful APIs with middleware and auth layers" },
        { name: "REST API Integration", detail: "Consumed 20+ third-party and internal endpoints" },
        { name: "PWA", detail: "Offline-first apps with service workers and caching" },
        { name: "Form Handling & Validation", detail: "Zod + React Hook Form for robust data pipelines" },
      ],
    },
    {
      name: "Databases & DevTools",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", detail: "Relational schema design and query optimization" },
        { name: "MySQL & NoSQL", detail: "Flexible data modeling for varied use cases" },
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
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-full bg-primary/10 text-primary border border-primary/25 shadow-[0_0_10px_rgba(139,92,246,0.15)]">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-0">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`flex items-start gap-3 py-3 group ${
                          skillIndex !== category.skills.length - 1
                            ? "border-b border-border/20"
                            : ""
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary/70 mt-0.5 shrink-0 group-hover:text-primary transition-colors duration-200" />
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                            {skill.name}
                          </span>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {skill.detail}
                          </p>
                        </div>
                      </motion.div>
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
