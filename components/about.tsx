"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Languages, Eye, ShieldCheck, Heart } from "lucide-react"

export default function About() {
  const certifications = [
    "Google Professional UX Design Certificate",
    "Aswar Academy (2024): Networks, Fiber Optics, Camera Systems",
    "Full-Stack Development (Next.js, Node.js, PostgreSQL)"
  ]

  const highlights = [
    {
      icon: <Eye className="h-5 w-5 text-glow-primary text-primary" />,
      title: "UI/UX Centered",
      desc: "Google UX certification enables me to build interfaces that prioritize layout flow and reduce user friction."
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-glow-accent text-accent" />,
      title: "Reliable Code",
      desc: "Committed to bug-free, highly structured architectures using clean-code paradigms and strong state management."
    },
    {
      icon: <Heart className="h-5 w-5 text-rose-500" />,
      title: "Passionate Builder",
      desc: "Constantly learning and adapting to modern stacks, keeping pace with current web baseline standards."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 relative">
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
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Highlights Grids */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/45 backdrop-blur-sm border-border/50 hover:border-primary/45 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bio Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-7 flex flex-col justify-between"
          >
            <Card className="h-full bg-card/45 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-primary">
                    <GraduationCap className="h-5 w-5" /> Education & Bio
                  </h3>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                    I am a software developer with a strong foundation in computer science and clean code engineering. Currently pursuing my 
                    <span className="text-foreground font-semibold"> Bachelor of Science in Computer Science</span> at the prestigious 
                    <span className="text-foreground font-semibold"> University of Technology, Baghdad</span> (03/2025 – Present).
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    My design approach focuses on crafting interactive and responsive front-end applications utilizing Vue.js, React, and Next.js, backed by structured APIs and relational databases. Having collaborated on key enterprise systems, I emphasize robust logic, clean abstractions, and pixel-perfect responsiveness.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-primary" /> Credentials & Certifications:
                  </h4>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages & Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            {/* Mission */}
            <Card className="bg-gradient-to-br from-primary/15 to-accent/5 border-primary/20 flex-grow">
              <CardContent className="p-6 flex flex-col justify-center h-full">
                <h3 className="text-xl font-bold mb-3 text-primary text-glow-primary">My Mission</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  "To build premium, highly-accessible, and speed-optimized applications that provide an outstanding, friction-free user experience while architecting scalable, maintainable server layers that solve complex business operations."
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-card/45 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                  <Languages className="h-5 w-5" /> Languages
                </h3>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1 items-start">
                    <span className="text-sm font-semibold">Arabic</span>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-accent border-accent/40 bg-accent/5">
                      Native
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-1 items-start">
                    <span className="text-sm font-semibold">English</span>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold text-primary border-primary/40 bg-primary/5">
                      Professional
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
