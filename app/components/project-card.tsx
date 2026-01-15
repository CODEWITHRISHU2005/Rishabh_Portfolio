import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  liveLink?: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, liveLink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              +{tags.length - 4} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-4 border-t border-border/50 mt-auto">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors group/link">
          <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
          <span className="relative">
            View Code
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full" />
          </span>
        </Link>
        {liveLink && (
          <Link href={liveLink} target="_blank" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link">
            <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
            <span className="relative font-medium">
              Live Demo
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full" />
            </span>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
