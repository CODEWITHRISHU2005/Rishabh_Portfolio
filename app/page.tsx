import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Rishabh_Gupta</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Link href="/images/Rishabh_Resume.pdf" target="_blank">
            <Button variant="outline" className="ml-auto">
              Resume
            </Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none space-x-4">
                  Java Backend Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I am a passionate Spring Boot developer specializing in building scalable backend systems,
                  integrating security frameworks like JWT and OAuth2, and optimizing data processing with Java Streams.
                  With experience in microservices architecture, API development, and e-commerce platforms, I strive to create efficient, secure, and high-performance applications. Constantly exploring emerging technologies like WebRTC and AI-powered tools,
                  I aim to enhance user experiences and drive innovation. Let's connect and collaborate on impactful solutions!
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <img
                    alt="Rishabh Gupta"
                    src="/images/1729538178966.jpeg"
                    className="rounded-full w-32 h-32 object-cover shadow-lg"
                  />
                </div>
                <span className="mt-2 text-gray-800 dark:text-gray-200 font-bold text-sm">
                  Rishabh Gupta
                </span>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://t.co/Ld90L73IGS" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/Rishabh210305" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:rg2822046@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
                title="SnapBuy"
                description="A Backend e-commerce platform with lot's of feature that align with the real world e-commerce platform"
                image="/images/Screenshot 2025-04-09 215254.png"
                link="https://github.com/CODEWITHRISHU2005/SnapBuy"
                tags={["Spring Boot", "Spring Security", "O-Auth2", "Jwt", "OTT", "MySQL", "Swagger API", "Docker", "AWS CodePipeline", "AWS CodeBuild", "CI/CD", "AWS RDS", "AWS ECS", "AWS ECR", "AWS Fargate"]}
              />
              <ProjectCard
                title="FlashGPT_4.0"
                description="An AI-powered chat interface with natural language processing capabilities comparing different LLM models to test accuracy of different models."
                image="/images/Screenshot 2025-06-11 201235.png"
                link="https://github.com/CODEWITHRISHU2005/Spring_AI"
                tags={["OpenAI", "Anthropic", "Ollama", "Mistral", "Meta", "Spring Boot", "Spring Security", "OAuth2", "OTT", "MySQL", "Spring-AI", "Next.js", "React.js", "TypeScript"]}
              /> 
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Rishabh_Gupta. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
