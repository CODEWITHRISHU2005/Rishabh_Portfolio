"use client"

import { useState } from "react"
import { useMotionValue, useMotionTemplate, motion, AnimatePresence } from "framer-motion"
import { MouseEvent } from "react"
import { Code2, Server, Cloud, Wrench, Database, Cpu, Sparkles, Layers } from "lucide-react"

const technologies = [
  {
    category: "Languages",
    icon: Code2,
    color: "from-amber-500 to-orange-500",
    colorRgb: "245, 158, 11",
    skills: ["Core Java", "Advance Java", "OOPs", "Collections Framework", "Multithreading", "Exception Handling", "SQL"],
  },
  {
    category: "Frameworks",
    icon: Layers,
    color: "from-green-500 to-emerald-500",
    colorRgb: "16, 185, 129",
    skills: ["Spring Boot", "Spring Security", "JWT", "OAuth2", "OTP & OTT", "MFA", "Spring Data JPA", "Spring AI"],
  },
  {
    category: "Backend & Architecture",
    icon: Server,
    color: "from-blue-500 to-indigo-500",
    colorRgb: "59, 130, 246",
    skills: ["REST APIs", "API Integration", "Authentication & Authorization", "RBAC", "Asynchronous Processing", "Completable Future", "Java Virtual Threads"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    colorRgb: "168, 85, 247",
    skills: ["Docker", "Docker-Compose", "CloudFlare R2", "CI/CD", "Cloud Deployment"],
  },
  {
    category: "Databases & Caching",
    icon: Database,
    color: "from-cyan-500 to-blue-600",
    colorRgb: "6, 182, 212",
    skills: ["MySQL", "Redis Cache", "MongoDB Atlas Vector Search"],
  },
  {
    category: "Testing & Tools",
    icon: Wrench,
    color: "from-rose-500 to-red-500",
    colorRgb: "244, 63, 94",
    skills: ["Git", "GitHub", "Swagger / OpenAPI", "Postman", "Logging (SLF4J)"],
  },
  {
    category: "AI & Emerging Tech",
    icon: Sparkles,
    color: "from-violet-500 to-purple-600",
    colorRgb: "139, 92, 246",
    skills: ["Generative AI", "RAG (Retrieval-Augmented Generation)", "Embeddings", "LLM Integration", "Gemini API"],
  },
]

interface TechCardProps {
  category: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  colorRgb: string
  skills: string[]
}

function TechCard({ category, icon: IconComponent, color, colorRgb, skills }: TechCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-md p-6 group hover:shadow-2xl transition-all duration-300 hover:border-primary/40 spotlight-card"
    >
      {/* Dynamic glow effect mapping to card category theme color */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(${colorRgb}, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="flex items-center gap-3 mb-5 relative z-20">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color} shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold tracking-tight">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5 relative z-20">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center rounded-full bg-background/50 border border-border/80 px-3.5 py-1.5 text-xs font-medium hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default select-none shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2 group-hover:bg-primary transition-colors duration-300" style={{ backgroundColor: `rgba(${colorRgb}, 0.8)` }} />
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("All")
  const tabs = ["All", "Languages", "Frameworks", "Backend & Architecture", "Cloud & DevOps", "Databases & Caching", "Testing & Tools", "AI & Emerging Tech"]

  const filteredTech = activeTab === "All" 
    ? technologies 
    : technologies.filter((t) => t.category === activeTab)

  return (
    <div className="space-y-8">
      {/* Category Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-xl bg-muted/20 border max-w-4xl mx-auto backdrop-blur">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-3.5 py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-300 outline-none ${
              activeTab === tab 
                ? "text-primary-foreground font-semibold" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-primary rounded-lg shadow-md -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Grid displays filtered technologies */}
      <motion.div 
        layout 
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech) => (
            <TechCard
              key={tech.category}
              category={tech.category}
              icon={tech.icon}
              color={tech.color}
              colorRgb={tech.colorRgb}
              skills={tech.skills}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
