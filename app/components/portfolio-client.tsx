"use client"

import { useState, useEffect } from "react"
import { useScroll, useSpring, motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Mail, Twitter, Menu, X, ArrowRight, Download, Sparkles, Code2, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "./contact-form"
import ProjectCard from "./project-card"
import TechStack from "./tech-stack"

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
    "Spring Boot Expert",
    "Microservices Architect",
    "API Developer",
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
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
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
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium" aria-label="Main navigation">
              {["about", "projects", "tech-stack", "contact"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="capitalize text-muted-foreground transition-colors hover:text-foreground relative group py-1"
                >
                  {section.replace("-", " ")}
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
                {["about", "projects", "tech-stack", "contact"].map((section) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="capitalize text-base font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-border/30"
                  >
                    {section.replace("-", " ")}
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
        <section id="about" className="relative py-24 md:py-36 lg:py-44 overflow-hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-10 text-center max-w-4xl mx-auto">
            
            {/* Profile Image with Dynamic Ping rings */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-300 animate-pulse-slow"></div>
                <div className="relative w-36 h-36 md:w-44 md:h-44">
                  <Image
                    alt="Rishabh Gupta"
                    src="/images/WhatsApp Image 2026-04-18 at 9.44.46 AM.jpeg"
                    width={176}
                    height={176}
                    className="rounded-full object-cover ring-4 ring-background shadow-2xl relative z-20"
                    priority
                    quality={100}
                  />
                </div>
              </div>
              <div className="space-y-1 z-20">
                <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Rishabh Gupta
                </h2>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 justify-center font-medium bg-muted/50 border px-3 py-1 rounded-full w-fit mx-auto shadow-sm">
                  <Sparkles className="h-3 w-3 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
                  Available for Opportunities
                </p>
              </div>
            </motion.div>

            {/* Main Animated Title */}
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-none">
                <span className="block text-foreground mb-3">Professional</span>
                <span className="relative block h-[1.15em] overflow-hidden">
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
                className="mx-auto max-w-[800px] text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed font-normal"
              >
                I specialize in engineering robust <span className="text-foreground font-semibold">scalable backend systems</span>,
                integrating security frameworks like <span className="text-foreground font-semibold">JWT and OAuth2</span>, and microservices logic with Spring Boot.
                Focused on caching (Redis), data querying optimization, API speed, and containers (Docker), I build clean architectures that perform under load.
              </motion.p>
            </div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link href="#projects">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                  View My Work
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
                { icon: Mail, href: "mailto:rg2822046@gmail.com", label: "Email", hover: "hover:bg-red-500 hover:text-white" },
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
              Explore complex, highly optimized projects demonstrating deep expertise in backend system performance and integrations.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <ProjectCard
              title="VideoStream (On-Demand Video Streaming)"
              description="Implemented stream video chunks using HLS protocol and adaptive bitrate streaming to ensure instant buffering. Integrated AWS S3 storage for files and images with Dockerized container setups."
              image="/images/Screenshot 2026-06-06 195545.png"
              link="https://github.com/CODEWITHRISHU2005/Video-Streaming-App"
              liveLink="https://video-streaming-app-lac.vercel.app/"
              tags={["Spring Boot", "Spring Data JPA", "Spring Security (O-Auth2, JWT)", "Spring AI (ChatClient)", "MySQL", "Docker Compose", "FFMPEG", "HLS Streaming", "Adaptive Bitrate"]}
            />
            <ProjectCard
              title="SnapBuy (E-Commerce App)"
              description="Built a full-featured e-commerce system using JWT & OAuth2 security and solved N+1 query performance using @EntityGraph. Optimized requests with Redis caching and integrated Stripe payments."
              image="/images/Screenshot 2025-11-29 144756.png"
              link="https://github.com/CODEWITHRISHU2005/SnapBuy"
              liveLink="https://snap-buy-app.vercel.app/"
              tags={["Spring Boot", "Spring Data JPA", "Spring Security (JWT, OTT)", "Spring AI (DALL-E)", "MySQL", "Redis Cache", "Stripe Integration", "AWS", "Docker"]}
            />
            <ProjectCard
              title="Yojna Setu (AMD Hackathon App)"
              description="Engineered a voice-first multilingual AI app to fetch welfare schemes for low-literacy users. Utilized Spring AI RAG and MongoDB Atlas Vector search to execute semantic vector query indexes."
              image="/images/Screenshot 2026-02-26 113527.png"
              link="https://github.com/CODEWITHRISHU2005/YojanaSetu"
              tags={["Spring Boot", "Spring AI (Gemini, RAG)", "MongoDB Atlas Vector Search"]}
            />
          </div>
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
              Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              The frameworks, languages, cloud servers, and caching tools I use to create enterprise-ready products.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <TechStack />
          </div>
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
              Ready to construct something powerful together? Let&apos;s map out the details.
            </p>
          </motion.div>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/25 backdrop-blur-md relative z-20" role="contentinfo">
        <div className="container flex flex-col gap-4 sm:flex-row py-10 w-full shrink-0 items-center justify-between px-4 md:px-6 mx-auto text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="font-semibold text-foreground">Rishabh Gupta</span>. Crafted with ❤️ and React/Spring.
          </p>
          <nav className="flex gap-6 justify-center" aria-label="Footer navigation">
            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="#">
              Terms
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-primary transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
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
