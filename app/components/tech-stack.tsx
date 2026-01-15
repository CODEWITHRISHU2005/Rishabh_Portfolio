import { Card } from "@/components/ui/card"
import { Code2, Server, Cloud, Wrench } from "lucide-react"

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["HTML", "TailwindCSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["Java (Core, Advance)", "Spring Boot", "Spring AI", "Spring Security", "Spring Data JPA", "MySQL"],
  },
  {
    category: "DevOps",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: ["Docker (Compose, Volume)", "AWS (RDS, ECS, ECR, S3, CodeBuild, CodePipeline, Fargate)", "CI/CD"],
  },
  {
    category: "Tools",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: ["Intellij IDEA", "Cursor AI", "Postman", "Insomnia", "Swagger API", "Redis Cache", "Git", "GitHub"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => {
        const IconComponent = tech.icon
        return (
          <Card key={tech.category} className="p-6 group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2.5 rounded-lg bg-gradient-to-br ${tech.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{tech.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-background border border-border px-3 py-1.5 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
