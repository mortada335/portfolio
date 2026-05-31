"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Code, FolderGit2, FileCode } from 'lucide-react'
import CodeSnippet from "./code-snippet"

type Repository = {
  id: number
  name: string
  description: string
  bullets: string[]
  html_url: string
  homepage: string
  topics: string[]
  language: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    // Simulating project load with the actual 8 CV projects using CV-based bullet descriptions
    setTimeout(() => {
      setRepos([
        {
          id: 1,
          name: "Car Gallery Website",
          description: "A full-stack vehicle showcase platform with smart filtering, comparison tools, and a multi-branch inventory management backend.",
          bullets: [
            "Developed an advanced front-end featuring search filters and car comparison functionality.",
            "Constructed a multi-branch backend to oversee car inventories."
          ],
          html_url: "https://github.com/Mortada335/car-gallery",
          homepage: "",
          topics: ["vue", "nodejs", "postgresql", "tailwind", "full-stack"],
          language: "Vue",
        },
        {
          id: 2,
          name: "Vue.js Admin Dashboard",
          description: "A data-driven admin panel featuring dynamic chart visualizations, real-time analytics tables, and secure authentication flows.",
          bullets: [
            "Engineered a feature-rich dashboard with analytics and dynamic data visualization capabilities.",
            "Integrated charts, tables, and authentication."
          ],
          html_url: "https://github.com/Mortada335/vue-admin-dashboard",
          homepage: "",
          topics: ["vue", "tailwind", "rest-api", "analytics"],
          language: "Vue",
        },
        {
          id: 3,
          name: "E-Commerce Admin Dashboard",
          description: "Enterprise-grade e-commerce management platform rebuilt from the ground up with ShadCN + React, featuring product catalogs, order pipelines, and a unified design system.",
          bullets: [
            "Implemented a completely new UI using ShadCN + React, creating a cleaner, modern, and accessible dashboard experience.",
            "Enhanced dashboard interaction by adding new logic, form handling, and responsive components for product and order management.",
            "Performed UI/UX testing to improve layout flow and reduce user friction across the platform.",
            "Contributed to design system consistency by building reusable components and shared utilities."
          ],
          html_url: "https://github.com/Mortada335/ecommerce-admin",
          homepage: "",
          topics: ["react", "shadcn", "typescript", "tailwind", "aswar-group"],
          language: "TypeScript",
        },
        {
          id: 4,
          name: "DevConnect",
          description: "A developer talent discovery platform with profile comparison, salary analytics, and modular architecture designed for seamless backend integration.",
          bullets: [
            "Developed a scalable frontend application enabling discovery, comparison, and hiring of developer profiles.",
            "Implemented centralized state management using React Context + useReducer, simulating backend functionality.",
            "Designed modular architecture with a service layer abstraction (api.js) to support future backend integration.",
            "Created interactive dashboards to visualize developer data and salary insights.",
            "Developed reusable, responsive UI components with modern design patterns and animations."
          ],
          html_url: "https://github.com/Mortada335/devconnect",
          homepage: "",
          topics: ["react", "context-api", "state-management", "tailwind"],
          language: "React",
        },
        {
          id: 5,
          name: "Jawahir Compound CMS",
          description: "A content management system for a residential compound, handling resident data, maintenance workflows, and real-time log synchronization.",
          bullets: [
            "Delivered continuous enhancements by fixing critical bugs, improving system reliability, and upgrading UI/UX consistency.",
            "Implemented new user-facing features and optimized component reusability.",
            "Collaborated closely with backend teams to integrate complex REST API logic.",
            "Refined page layouts and interaction patterns."
          ],
          html_url: "https://github.com/Mortada335/jawahir-management",
          homepage: "",
          topics: ["vue", "tailwind", "rest-api", "aswar-group"],
          language: "Vue",
        },
        {
          id: 6,
          name: "Video Analytics Platform",
          description: "An intelligent video monitoring dashboard with real-time object detection overlays, analytical API integration, and optimized rendering performance.",
          bullets: [
            "Built new modules from scratch using Vue.js and Tailwind.",
            "Integrated analytical APIs and improved data-handling logic.",
            "Enhanced performance through UI restructuring.",
            "Strengthened the frontend architecture."
          ],
          html_url: "https://github.com/Mortada335/video-analytics",
          homepage: "",
          topics: ["vue", "video-api", "tailwind", "aswar-group"],
          language: "Vue",
        },
        {
          id: 7,
          name: "ERP Front-End System",
          description: "A comprehensive enterprise resource planning frontend with modules for operations tracking, analytics dashboards, and workflow automation.",
          bullets: [
            "Developed new ERP dashboard features including modules for operations, analytics, and workflow monitoring.",
            "Improved UI consistency and usability.",
            "Performed thorough UI testing and debugging.",
            "Collaborated with backend engineers to integrate multiple API endpoints."
          ],
          html_url: "https://github.com/Mortada335/erp-system",
          homepage: "",
          topics: ["vue", "rest-api", "tailwind", "aswar-group"],
          language: "Vue",
        },
        {
          id: 8,
          name: "Al-Taawon Sales Dashboard",
          description: "A sales management dashboard rebuilt with ShadCN + React, featuring transactional form validation, payment workflows, and consistent design system components.",
          bullets: [
            "Implemented a completely new UI using ShadCN + React.",
            "Enhanced dashboard interaction by adding new logic and form handling.",
            "Performed UI/UX testing to improve layout flow.",
            "Contributed to design system consistency."
          ],
          html_url: "https://github.com/Mortada335/altaawon-dashboard",
          homepage: "",
          topics: ["react", "shadcn", "form-logic", "aswar-group"],
          language: "React",
        },
      ])
      setLoading(false)
    }, 800)
  }, [])

  const codeSnippets = {
    "Car Gallery Website": `// Vue.js Composition API: Vehicle inventory filtering controller
import { ref, computed } from 'vue'
import { Car } from '@/types'

export function useCarFilter(initialCars: Car[]) {
  const cars = ref<Car[]>(initialCars)
  const filters = ref({
    brand: '',
    minPrice: 0,
    maxPrice: 100000,
    branchId: null as number | null
  })

  const filteredCars = computed(() => {
    return cars.value.filter(car => {
      const matchBrand = !filters.value.brand || car.brand.toLowerCase() === filters.value.brand.toLowerCase()
      const matchPrice = car.price >= filters.value.minPrice && car.price <= filters.value.maxPrice
      const matchBranch = !filters.value.branchId || car.branchId === filters.value.branchId
      return matchBrand && matchPrice && matchBranch
    })
  })

  return { filters, filteredCars }
}`,
    "Vue.js Admin Dashboard": `// Dynamic charting integration utilizing reactive Vue ref hooks
import { ref, watch, onMounted } from 'vue'
import Chart from 'chart.js/auto'

export default {
  props: ['telemetryData'],
  setup(props) {
    const canvasRef = ref<HTMLCanvasElement | null>(null)
    let chartInstance: Chart | null = null

    const renderChart = () => {
      if (!canvasRef.value) return
      if (chartInstance) chartInstance.destroy()

      chartInstance = new Chart(canvasRef.value, {
        type: 'line',
        data: props.telemetryData,
        options: { responsive: true, maintainAspectRatio: false }
      })
    }

    watch(() => props.telemetryData, renderChart, { deep: true })
    onMounted(renderChart)

    return { canvasRef }
  }
}`,
    "E-Commerce Admin Dashboard": `// React + Radix slot composition: Reusable form validator hook
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.number().positive("Price must be positive"),
  stock: z.number().int().nonnegative(),
  category: z.string().min(1, "Select a valid category")
})

export function useProductForm(onSubmit: (data: z.infer<typeof productSchema>) => void) {
  return useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: { title: '', price: 0, stock: 0, category: '' }
  })
}`,
    "DevConnect": `// React state reducer engine maintaining catalog & filter states
import React, { createContext, useReducer } from 'react'

const initialState = {
  developers: [],
  selectedCategory: 'All',
  loading: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, developers: action.payload, loading: false }
    case 'SET_FILTER':
      return { ...state, selectedCategory: action.payload }
    default:
      return state
  }
}

export const StateContext = createContext(null)
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}`,
    "Jawahir Compound CMS": `// Vue composition polling framework to synchronize logs without memory leaks
import { ref, onMounted, onUnmounted } from 'vue'
import { fetchResidentLogs } from '@/services/api'

export function useResidentLogs(compoundId: string) {
  const logs = ref([])
  let intervalId: NodeJS.Timeout | null = null

  const updateLogs = async () => {
    try {
      logs.value = await fetchResidentLogs(compoundId)
    } catch (e) {
      console.error('Logs sync error', e)
    }
  }

  onMounted(() => {
    updateLogs()
    intervalId = setInterval(updateLogs, 10000)
  })

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
  })

  return { logs }
}`,
    "Video Analytics Platform": `// Vue overlay utility drawing smart analytical tracking frames on video feed
export function drawTrackingFrames(canvas: HTMLCanvasElement, telemetry: any[]) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  telemetry.forEach(object => {
    if (object.confidence > 0.7) {
      ctx.strokeStyle = '#a78bfa' // Neon violet bounds
      ctx.lineWidth = 2
      ctx.strokeRect(object.x, object.y, object.width, object.height)
      
      ctx.fillStyle = '#22d3ee' // Cyan label
      ctx.font = '10px monospace'
      ctx.fillText(\`\${object.label} (\${Math.round(object.confidence * 100)}%)\`, object.x, object.y - 5)
    }
  })
}`,
    "ERP Front-End System": `// Task dispatch pipeline executing REST operations with exponential backoff
export async function syncTaskWithRetry(taskData: any, retries = 3, delay = 1000): Promise<any> {
  try {
    const res = await fetch('/api/erp/sync-task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    })
    if (!res.ok) throw new Error('Sync failed')
    return await res.json()
  } catch (error) {
    if (retries > 0) {
      await new Promise(r => setTimeout(r, delay))
      return syncTaskWithRetry(taskData, retries - 1, delay * 2)
    }
    throw error;
  }
}`,
    "Al-Taawon Sales Dashboard": `// React standard schema wrapper securing transactional forms
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const checkoutSchema = z.object({
  customerName: z.string().min(2, "Customer name is required"),
  email: z.string().email("Invalid email address"),
  totalAmount: z.number().positive(),
  paymentMethod: z.enum(["Cash", "Card", "Transfer"])
})

export function useCheckoutForm() {
  return useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { customerName: '', email: '', totalAmount: 0, paymentMethod: 'Cash' }
  })
}`,
  }

  // Filter repositories dynamically
  const filteredRepos =
    activeTab === "all"
      ? repos
      : activeTab === "react"
      ? repos.filter((r) => r.topics.includes("react") || r.topics.includes("shadcn"))
      : activeTab === "vue"
      ? repos.filter((r) => r.topics.includes("vue"))
      : repos.filter((r) => r.topics.includes("aswar-group"))

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 bg-muted/20 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
            Featured Systems
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            A curated portfolio of my engineered applications, highlighting interactive dashboards, scalable micro-structures, and custom full-stack installations.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Filter Tabs */}
            <Tabs defaultValue="all" className="mb-10" onValueChange={setActiveTab}>
              <div className="flex justify-center">
                <TabsList className="bg-card border border-border/60">
                  <TabsTrigger value="all">All ({repos.length})</TabsTrigger>
                  <TabsTrigger value="react">React / ShadCN</TabsTrigger>
                  <TabsTrigger value="vue">Vue.js</TabsTrigger>
                  <TabsTrigger value="enterprise">Aswar Enterprise</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full flex flex-col bg-card/80 dark:bg-card/45 backdrop-blur-md border border-border/50 dark:border-border/30 hover:border-primary/60 dark:hover:border-primary/50 hover:bg-card/95 dark:hover:bg-card/60 hover:shadow-[0_8px_30px_rgba(139,92,246,0.18)] dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.28)] hover:-translate-y-1.5 transition-all duration-300 shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-start justify-between">
                        <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{repo.name}</span>
                        <Badge variant="outline" className="text-[10px] md:text-xs font-bold border-primary/40 text-primary bg-primary/5 text-glow-primary">
                          {repo.language}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div className="mb-4">
                        <p className="text-[13px] text-muted-foreground leading-relaxed mb-3 border-l-2 border-primary/30 pl-3">
                          {repo.description}
                        </p>
                        <ul className="list-disc pl-4 space-y-1.5 text-xs font-semibold group-hover:text-slate-200 text-slate-400 transition-colors duration-300 leading-relaxed">
                          {repo.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {repo.topics.map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-[10px] uppercase font-bold bg-muted/70 dark:bg-muted/50 border border-border/10">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          size="sm"
                          className="w-full border border-primary/35 dark:border-primary/35 hover:border-primary dark:hover:border-primary hover:bg-primary/10 dark:hover:bg-primary/10 text-xs font-bold transition-all hover:text-black dark:text-white duration-200 shadow-sm"
                          onClick={() => {
                            document.getElementById(`code-${repo.id}`)?.scrollIntoView({ behavior: "smooth" })
                          }}
                        >
                          <Code className="mr-1.5 h-3.5 w-3.5" />
                          View Code Logic
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t border-border/20 flex justify-center w-full">
                      <Button variant="ghost" size="sm" asChild className="w-full hover:text-primary hover:bg-primary/15 transition-all duration-200">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex justify-center items-center w-full">
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          View Source Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Code Snippet Inspector */}
            <div className="mt-20 space-y-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight mb-2 flex items-center justify-center gap-2">
                  <FolderGit2 className="h-6 w-6 text-primary" />
                  Code Logic Inspector
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                  Click the "View Code Logic" button on any system card above to load and inspect its corresponding code snippet below.
                </p>
              </div>

              {filteredRepos.map((repo) => (
                <motion.div
                  key={`code-${repo.id}`}
                  id={`code-${repo.id}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="scroll-mt-24 p-5 rounded-xl border border-border/50 bg-black/45 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FileCode className="h-5 w-5 text-primary" />
                    <h4 className="text-base font-bold text-slate-200">{repo.name}</h4>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Snippet</span>
                  </div>
                  <CodeSnippet
                    code={codeSnippets[repo.name as keyof typeof codeSnippets] || "// Code snippet not available"}
                    language="typescript"
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
