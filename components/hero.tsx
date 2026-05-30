"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, Code, Sparkles, Terminal, FileCode, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentCode, setCurrentCode] = useState("")
  const [activeKey, setActiveKey] = useState("")
  const [typingComplete, setTypingComplete] = useState(false)
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null)

  const codeToType = `const developer = {
  name: "Mortada Ahmed",
  role: "Software Developer",
  location: "Baghdad, Iraq",
  education: "CS @ UoT Baghdad",
  skills: [
    "Vue.js", "React", "Next.js", 
    "Node.js", "PostgreSQL"
  ],
  experience: "Aswar Group & Freelance",
  passion: "Building premium web apps"
};`

  useEffect(() => {
    setMounted(true)
    
    // Typing simulation logic
    let index = 0
    const typeChar = () => {
      if (index < codeToType.length) {
        const nextChar = codeToType[index]
        setCurrentCode(codeToType.slice(0, index + 1))
        
        // Map character to keyboard keys
        const charKey = getActiveKey(nextChar)
        setActiveKey(charKey)
        
        // Clear active key glow after a very brief delay to simulate key release
        setTimeout(() => {
          setActiveKey("")
        }, 80)

        index++
        
        // Add random natural typing pause for punctuation/newlines
        let delay = 35 + Math.random() * 25
        if (nextChar === "\n") delay = 350
        else if (nextChar === ":" || nextChar === ",") delay = 150
        
        typingTimerRef.current = setTimeout(typeChar, delay)
      } else {
        setTypingComplete(true)
        setActiveKey("")
      }
    }

    // Start typing after a short delay
    const startDelay = setTimeout(typeChar, 1200)

    return () => {
      clearTimeout(startDelay)
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current)
    }
  }, [])

  const getActiveKey = (char: string): string => {
    if (!char) return ""
    if (char === " ") return "SPACE"
    if (char === "\n") return "ENTER"
    const upper = char.toUpperCase()
    if (upper >= "A" && upper <= "Z") return upper
    if (upper === "," || upper === "." || upper === "/" || upper === ";") return upper
    if (["{", "}", "[", "]", "(", ")"].includes(char)) return "FN"
    if (['"', "'", ":", "=", "+", "-"].includes(char)) return ";"
    return ""
  }

  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
    ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
    ["CTRL", "ALT", "SPACE", "ALT", "FN", "ENTER"]
  ]

  if (!mounted) return null

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden pt-20 pb-10">
      {/* Premium animated gradient backgrounds */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Professional Headline and Call to Actions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary text-glow-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Available for Freelance & Full-time Projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-accent text-glow-primary">
              Mortada Ahmed
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Software Developer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            I engineer premium responsive web interfaces and full-stack solutions, specializing in 
            <span className="text-foreground font-semibold"> Vue.js, React, Next.js</span>, and robust backend integrations. Focused on high-performance code and pristine UI/UX.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 hover:border-primary/80 bg-background/40 backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Connect
            </Button>
          </div>
        </motion.div>

        {/* Right Side: IDE & Keyboard Typing Simulator */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 w-full flex flex-col gap-4 select-none"
        >
          {/* IDE Mockup */}
          <div className="w-full rounded-xl overflow-hidden border border-border/60 bg-card/75 backdrop-blur-md shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/65 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <FileCode className="h-3.5 w-3.5 text-primary" />
                <span>developer.ts</span>
              </div>
              <div className="w-10"></div>
            </div>

            {/* Editor Textarea */}
            <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto min-h-[220px] bg-black/45 text-slate-300">
              <pre className="whitespace-pre">
                <code>
                  {currentCode}
                  {!typingComplete && (
                    <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse align-middle" />
                  )}
                </code>
              </pre>
            </div>
          </div>

          {/* Developer Visual Keyboard */}
          <div className="w-full p-4 rounded-xl border border-border/50 bg-card/65 backdrop-blur-md shadow-xl flex flex-col gap-2">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-[10px] font-mono tracking-wider text-muted-foreground/80 flex items-center gap-1">
                <Monitor className="h-3 w-3" />
                TACTILE MECHANICAL MOCKUP
              </span>
              {activeKey && (
                <span className="text-[10px] font-mono font-bold text-primary animate-pulse text-glow-primary">
                  ACTIVE: {activeKey}
                </span>
              )}
            </div>

            {/* Keyboard Rows */}
            <div className="flex flex-col gap-1.5">
              {keyboardRows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="flex justify-center gap-1 w-full"
                >
                  {row.map((key) => {
                    const isActive = activeKey === key
                    const isSpace = key === "SPACE"
                    const isEnter = key === "ENTER"
                    
                    return (
                      <div
                        key={key}
                        className={`
                          h-7 md:h-8 rounded flex items-center justify-center font-mono text-[9px] md:text-xs font-bold border transition-all duration-75
                          ${isSpace ? "w-28 md:w-36" : isEnter ? "w-10 md:w-14" : "w-6 md:w-8"}
                          ${isActive 
                            ? "bg-primary text-primary-foreground border-primary scale-[0.93] shadow-[0_0_12px_rgba(139,92,246,0.8)]" 
                            : "bg-muted/40 hover:bg-muted/65 border-border/40 text-muted-foreground/90"}
                        `}
                      >
                        {key === "SPACE" ? "" : key}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bounce scroll down button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout} 
          className="animate-bounce hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all rounded-full p-2"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  )
}
