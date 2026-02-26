import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Menu, ArrowRight, Download, Sparkles, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rishabh Gupta - Java Backend Developer | Spring Boot Expert",
  description: "Passionate Spring Boot developer specializing in scalable backend systems, JWT, OAuth2, microservices, and e-commerce platforms. Experience with Spring Security, Redis, Docker, and AWS.",
  keywords: ["Java Backend Developer", "Spring Boot", "Microservices", "JWT", "OAuth2", "Redis", "Docker", "AWS", "REST API"],
  authors: [{ name: "Rishabh Gupta" }],
  openGraph: {
    title: "Rishabh Gupta - Java Backend Developer",
    description: "Building scalable backend systems with Spring Boot, microservices, and cloud technologies",
    type: "website",
    locale: "en_US",
  },
}

export default function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header with Mobile Menu */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link className="flex items-center space-x-2 group" href="/" aria-label="Home">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <span className="relative font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  RG
                </span>
              </div>
              <span className="hidden font-bold sm:inline-block">Rishabh_Gupta</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium" aria-label="Main navigation">
              <Link href="#about" className="transition-colors hover:text-primary relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="#tech-stack" className="transition-colors hover:text-primary relative group">
                Tech Stack
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/images/Rishabh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        {/* Hero/About Section with Gradient Background */}
        <section id="about" className="relative py-20 md:py-32 lg:py-40 overflow-hidden" aria-labelledby="about-heading">
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            {/* Profile Image with Animation */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-slow"></div>
                <div className="relative w-36 h-36 md:w-40 md:h-40">
                  <Image
                    alt="Rishabh Gupta - Java Backend Developer"
                    src="/images/1729538178966.jpeg"
                    width={160}
                    height={160}
                    className="rounded-full object-cover ring-4 ring-background"
                    priority
                    quality={90}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Rishabh Gupta
                </h2>
                <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
                  <Sparkles className="h-3 w-3 text-yellow-500" />
                  Available for opportunities
                </p>
              </div>
            </div>

            {/* Main Heading with Gradient */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 id="about-heading" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Java Backend Developer</span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  & Spring Boot Expert
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
                I am a passionate Spring Boot developer specializing in building <span className="text-foreground font-semibold">scalable backend systems</span>,
                integrating security frameworks like <span className="text-foreground font-semibold">JWT and OAuth2</span>, and optimizing data processing with Java Streams.
                With experience in <span className="text-foreground font-semibold">microservices architecture</span>, API development, and e-commerce platforms, I strive to create efficient, secure, and high-performance applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link href="#projects">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all">
                  Get in Touch
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Social Links with Hover Effects */}
            <div className="flex flex-wrap gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link href="https://github.com/CODEWITHRISHU2005" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:scale-110" aria-label="Visit GitHub profile">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://t.co/Ld90L73IGS" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-all hover:scale-110" aria-label="Visit LinkedIn profile">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/Rishabh210305" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-blue-400 hover:text-white transition-all hover:scale-110" aria-label="Visit Twitter profile">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:rg2822046@gmail.com">
                <Button variant="outline" size="icon" className="hover:bg-red-500 hover:text-white transition-all hover:scale-110" aria-label="Send email">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="https://leetcode.com/u/9DXfajaRfK/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="hover:bg-orange-500 hover:text-white transition-all hover:scale-110" aria-label="Visit LeetCode profile">
                  <Code2 className="h-4 w-4" />
                  <span className="sr-only">LeetCode</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section with improved spacing */}
        <section id="projects" className="py-16 md:py-24 lg:py-32" aria-labelledby="projects-heading">
          <div className="text-center mb-12 space-y-3">
            <h2 id="projects-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Explore my latest work showcasing expertise in Spring Boot, microservices, and cloud technologies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="VideoStream (On-Demand Video Streaming)"
              description="In this project, I have implemented stream videos in chunks so that user is able to play video without downloading completely & store videos and its image in AWS S3"
              image="/images/Screenshot 2025-11-09 102915.png"
              link="https://github.com/CODEWITHRISHU2005/Video-Streaming-App"
              liveLink="https://video-streaming-app-lac.vercel.app/"
              tags={["Spring Boot", "Spring Data JPA", "Spring Security (O-Auth2, JWT, OTT, OTP, RBAC)", "Spring AI (ChatClient)", "MySQL", "Swagger API", "Docker", "FFMPEG", "HLS Streaming", "Adaptive Bitrate Streaming", "Docker-Volume", "Docker-Compose"]}
            />
            <ProjectCard
              title="SnapBuy (E-Commerce App)"
              description="In this project, I learned to implement best security practices (OTT, OTP,JWT, RBAC, OAuth2), resolve N+1 queries using @EntityGraph, optimize with Redis caching, integrate Stripe payments, containerize the app, and plan to deploy it on AWS"
              image="/images/Screenshot 2025-11-29 144756.png"
              link="https://github.com/CODEWITHRISHU2005/SnapBuy"
              liveLink="https://snap-buy-app.vercel.app/"
              tags={["Spring Boot", "Spring Data JPA", "Spring Security (O-Auth2, JWT, OTT, OTP, RBAC)", "Spring AI (ImageModel-DALL-E, ChatClient)", "MySQL", "Swagger API", "Docker-Compose", "Redis Cache", "Stripe Payment Integration", "AWS"]}
            />
            <ProjectCard
              title="Yojna Setu (AMD Hackathon by Hack2Skill"
              description="Built a voice-first, multilingual AI to help rural citizens access welfare gov schemes.
              Integrated Spring AI (RAG) with MongoDB Atlas Vector Search for PDF-based government scheme retrieval.
              Delivered a solution combining robust engineering with social impact, empowering low-literacy users to claim
benefits."
              image="images\Screenshot 2026-02-26 113527.png"
              link="https://github.com/CODEWITHRISHU2005/YojanaSetu"
              tags={["Spring Boot", "Spring AI (Gemini, RAG, MongoDB Atlas Vector Search)"]}
            />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-16 md:py-24 lg:py-32 bg-muted/30 -mx-4 md:-mx-6 px-4 md:px-6 rounded-3xl" aria-labelledby="tech-stack-heading">
          <div className="text-center mb-12 space-y-3">
            <h2 id="tech-stack-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          <TechStack />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 lg:py-32" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12 space-y-3">
              <h2 id="contact-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
              </h2>
              <p className="text-muted-foreground">
                Have a project in mind or want to collaborate? Let&apos;s talk!
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t bg-muted/30 backdrop-blur" role="contentinfo">
        <div className="container flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="font-semibold text-foreground">Rishabh Gupta</span>. Crafted with ❤️
          </p>
          <nav className="sm:ml-auto flex gap-6" aria-label="Footer navigation">
            <Link className="text-sm hover:text-primary transition-colors" href="#">
              Terms
            </Link>
            <Link className="text-sm hover:text-primary transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}