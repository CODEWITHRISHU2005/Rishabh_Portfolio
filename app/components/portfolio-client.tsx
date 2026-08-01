"use client"

import { useState, useEffect } from "react"
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Mail, Twitter, Menu, X, ArrowRight, Download, Sparkles, Code2, ArrowUp, MapPin, Award, CheckCircle2, Server, Cpu } from "lucide-react"
import Link from "next/link"
import ContactForm from "./contact-form"
import ProjectCard from "./project-card"
import TechStack from "./tech-stack"
import EducationCertifications from "./education-certifications"
import ArchitectureCodeShowcase from "./architecture-code-showcase"

export default function PortfolioClient() {
  const currentYear = new Date().getFullYear()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Scroll Progress Setup
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Role Typewriter/Cycler Setup
  const roles = [
    "Java Backend Developer",
    "Spring Boot & Security Engineer",
    "Scalable Systems Engineer",
    "AI & RAG Integrator",
  ]
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [roles.length])

  // Track scroll position to display Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navSections = [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "architecture", label: "architecture & code" },
    { id: "tech-stack", label: "tech stack" },
    { id: "education", label: "education & certs" },
    { id: "contact", label: "contact" },
  ]

  return (
    <div className="min-h-screen bg-background bg-dot-grid relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute top-[35%] right-[5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute bottom-[15%] left-[10%] w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float-3"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl transition-all duration-300">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-6">
            <Link className="flex items-center space-x-2 group" href="/" aria-label="Home">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <span className="relative font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  RG
                </span>
              </div>
              <span className="hidden font-extrabold tracking-tight sm:inline-block hover:text-primary transition-colors duration-300">
                Rishabh_Gupta
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium" aria-label="Main navigation">
              {navSections.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="capitalize text-muted-foreground transition-colors hover:text-foreground relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/images/Rishabh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button variant="outline" className="gap-2 border-border/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden border hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="container flex flex-col space-y-4 py-6 px-4">
                {navSections.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="capitalize text-base font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-border/30"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/images/Rishabh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pt-2"
                >
                  <Button className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="container px-4 md:px-6 mx-auto relative z-20">
        {/* Hero Section */}
        <section id="about" className="relative py-20 md:py-28 lg:py-36 overflow-hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
            
            {/* Name and Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="space-y-2 z-20">
                <h2 className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Rishabh Gupta
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium bg-muted/50 border px-3 py-1 rounded-full shadow-sm">
                    <Sparkles className="h-3 w-3 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
                    Available for Opportunities
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 font-medium bg-muted/50 border px-3 py-1 rounded-full shadow-sm">
                    <MapPin className="h-3 w-3 text-red-500" />
                    Dehradun, Uttarakhand, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Animated Title */}
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-none">
                <span className="block text-foreground mb-3">Aspiring / Fresher</span>
                <span className="relative block h-[1.25em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 35, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -35, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-x-0 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 pb-2"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mx-auto max-w-[850px] text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed font-normal"
              >
                Java Backend Developer (Fresher) passionate about <span className="text-foreground font-semibold">Spring Boot & Spring Security</span>. Built production-ready systems featuring <span className="text-foreground font-semibold">HLS video streaming, MFA authentication, Redis caching, AI-powered RAG systems</span>, and cloud integrations. 
              </motion.p>
            </div>

            {/* Impact & Achievement Metrics Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-2"
            >
              {[
                { metric: "600+", label: "LeetCode DSA Solved", sub: "DP, Graphs, Trees", color: "from-amber-500/20 to-orange-500/20", borderColor: "border-amber-500/30" },
                { metric: "8.5", label: "CGPA (BCA)", sub: "Graphic Era University", color: "from-emerald-500/20 to-teal-500/20", borderColor: "border-emerald-500/30" },
                { metric: "60%", label: "Load Time Reduction", sub: "HLS Chunk Streaming", color: "from-blue-500/20 to-indigo-500/20", borderColor: "border-blue-500/30" },
                { metric: "3+", label: "Production Projects", sub: "Spring Boot & AI RAG", color: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-500/30" },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} border ${stat.borderColor} backdrop-blur-md text-center hover:scale-[1.03] transition-transform duration-300`}
                >
                  <div className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    {stat.metric}
                  </div>
                  <div className="text-xs font-bold text-foreground/90 mt-1">{stat.label}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center pt-2"
            >
              <Link href="#projects">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                  Explore Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="gap-2 border-border/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02] shadow-sm">
                  Get in Touch
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3.5 justify-center"
            >
              {[
                { icon: Github, href: "https://github.com/CODEWITHRISHU2005", label: "GitHub", hover: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" },
                { icon: Linkedin, href: "https://t.co/Ld90L73IGS", label: "LinkedIn", hover: "hover:bg-blue-600 hover:text-white" },
                { icon: Twitter, href: "https://x.com/Rishabh210305", label: "Twitter", hover: "hover:bg-blue-400 hover:text-white" },
                { icon: Mail, href: "mailto:rg2822045@gmail.com", label: "Email", hover: "hover:bg-red-500 hover:text-white" },
                { icon: Code2, href: "https://leetcode.com/u/9DXfajaRfK/", label: "LeetCode", hover: "hover:bg-orange-500 hover:text-white" },
              ].map((soc, i) => (
                <Link key={i} href={soc.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className={`transition-all duration-300 hover:scale-115 border-border/85 shadow-sm ${soc.hover}`}
                    aria-label={`Visit ${soc.label} profile`}
                  >
                    <soc.icon className="h-4.5 w-4.5" />
                    <span className="sr-only">{soc.label}</span>
                  </Button>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 border-t border-border/30 relative" aria-labelledby="projects-heading">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 id="projects-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              Enterprise-ready backend applications featuring video streaming, AI vector search, JWT/MFA security, and cloud scalability.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Project 1: Video Stream */}
            <ProjectCard
              title="Video Stream"
              subtitle="On-Demand Adaptive Bitrate Video Streaming Platform"
              date="Sep 2025 – Nov 2025"
              description="Built high-performance HLS adaptive bitrate video streaming REST APIs with chunk-based transfer, reducing initial load time by 60%."
              highlights={[
                "Implemented HLS-based adaptive bitrate video streaming for smooth playback across varying bandwidths.",
                "Designed chunk-based REST API streaming, reducing initial load time by 60%.",
                "Secured backend with JWT, OAuth2, RBAC, OTP, One-Time Token (OTT), and Multi-Factor Authentication (MFA).",
                "Optimized video upload concurrency using Java Virtual Threads and Completable Future for non-blocking processing."
              ]}
              image="/images/Screenshot 2026-06-06 195545.png"
              link="https://github.com/CODEWITHRISHU2005/Video-Streaming-App"
              liveLink="https://video-streaming-app-lac.vercel.app/"
              tags={["Core Java", "Spring Boot", "Spring Security (MFA, OTT, RBAC)", "Spring AI", "FFMPEG", "CloudFlare R2", "Docker-Compose", "HLS Streaming", "Virtual Threads"]}
            />

            {/* Project 2: SnapBuy */}
            <ProjectCard
              title="SnapBuy"
              subtitle="E-Commerce System with AI Vector RAG Chatbot"
              date="Jun 2025 – Aug 2025"
              description="Scalable e-commerce engine featuring a RAG-based search chatbot powered by MongoDB Atlas Vector Search and Redis API caching."
              highlights={[
                "Built RAG chatbot using MongoDB Atlas Vector Search helping users quickly query products.",
                "Implemented JWT + OAuth2 authentication with OTP verification & passwordless OTT login.",
                "Improved API performance with Redis caching, pagination, and sorting.",
                "Integrated Stripe Payment Gateway for secure online payments."
              ]}
              image="/images/Screenshot 2026-06-16 104619.png"
              link="https://github.com/CODEWITHRISHU2005/SnapBuy"
              liveLink="https://snap-buy-app.vercel.app/"
              tags={["Core Java", "Spring Boot", "Spring Security", "Spring AI", "MongoDB Atlas Vector Search", "Redis Cache", "Stripe", "MySQL", "Docker-Compose"]}
            />

            {/* Project 3: Yojna Setu */}
            <ProjectCard
              title="Yojna Setu"
              subtitle="Voice-First Multilingual AI Government Scheme Access (AMD Hackathon)"
              date="Feb 2026 – March 2026"
              description="Developed at AMD Hackathon by Hack2Skill: Voice-first AI assistant leveraging Spring AI RAG to enable low-literacy citizens to claim welfare schemes."
              highlights={[
                "Built voice-first, multilingual AI helping rural citizens access welfare government schemes.",
                "Integrated Spring AI (RAG) with MongoDB Atlas Vector Search for PDF government document retrieval.",
                "Empowered low-literacy citizens to discover and claim government welfare benefits easily."
              ]}
              image="/images/Screenshot 2026-06-16 105615.png"
              link="https://github.com/CODEWITHRISHU2005/YojanaSetu"
              tags={["Core Java", "Spring Boot", "Spring AI", "Gemini API", "RAG", "MongoDB Atlas Vector Search", "REST APIs"]}
            />
          </div>
        </section>

        {/* System Architecture & Code Section */}
        <section id="architecture" className="py-24 md:py-32 border-t border-border/30 relative" aria-labelledby="architecture-heading">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 id="architecture-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              System Architecture & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Code Highlights</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              Visual system design workflows and clean production backend implementations.
            </p>
          </motion.div>
          <ArchitectureCodeShowcase />
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-24 md:py-32 border-t border-border/30 relative" aria-labelledby="tech-stack-heading">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 id="tech-stack-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              Languages, frameworks, security protocols, cloud technologies, databases, and AI tooling I use to craft scalable applications.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <TechStack />
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-24 md:py-32 border-t border-border/30 relative" aria-labelledby="education-heading">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 id="education-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              My academic background, DSA problem-solving milestones, and official cloud & AI certifications.
            </p>
          </motion.div>
          <EducationCertifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 border-t border-border/30 relative" aria-labelledby="contact-heading">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 id="contact-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              Looking for a dedicated Java Backend Developer? Let&apos;s connect and build scalable systems together.
            </p>
          </motion.div>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/25 backdrop-blur-md relative z-20" role="contentinfo">
        <div className="container flex flex-col gap-4 sm:flex-row py-10 w-full shrink-0 items-center justify-between px-4 md:px-6 mx-auto text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="font-semibold text-foreground">Rishabh Gupta</span>. Built with React, Next.js, TailwindCSS & Spring Boot.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Dehradun, Uttarakhand, India</span>
            <span>•</span>
            <Link href="mailto:rg2822045@gmail.com" className="hover:text-primary transition-colors">
              rg2822045@gmail.com
            </Link>
          </div>
        </div>
      </footer>

      {/* Scroll to Top FAB Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-xl hover:shadow-2xl transition-all duration-300 z-50 hover:-translate-y-1 border border-primary/20"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
