"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200))

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out, Mortada will get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 relative">
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
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, an opportunity, or just want to talk code? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <Card className="bg-card/45 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/40 border-border/40 focus:border-primary/60 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted/40 border-border/40 focus:border-primary/60 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-muted/40 border-border/40 focus:border-primary/60 transition-all duration-200"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Socials & Info */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <Card className="bg-card/45 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-primary">Connect Credentials</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email</h4>
                      <a
                        href="mailto:mortadaahmad56@gmail.com"
                        className="text-sm font-semibold hover:text-primary transition-colors leading-relaxed block"
                      >
                        mortadaahmad56@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Phone</h4>
                      <a
                        href="tel:+9647722861306"
                        className="text-sm font-semibold hover:text-primary transition-colors leading-relaxed block"
                      >
                        +964 772 286 1306
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Location</h4>
                      <p className="text-sm font-semibold leading-relaxed">
                        Baghdad, Iraq
                      </p>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">GitHub</h4>
                      <a
                        href="https://github.com/Mortada335"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:text-primary transition-colors leading-relaxed block"
                      >
                        github.com/Mortada335
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/mortada-ahmad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:text-primary transition-colors leading-relaxed block"
                      >
                        linkedin.com/in/mortada-ahmad
                      </a>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(139,92,246,0.1)]">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Availability</h4>
                      <p className="text-sm font-semibold text-accent leading-relaxed">
                        Open to freelance & full-time roles
                      </p>
                    </div>
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
