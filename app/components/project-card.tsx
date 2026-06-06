"use client"

import { useMotionValue, useMotionTemplate, motion } from "framer-motion"
import { MouseEvent } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  liveLink?: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, liveLink, tags }: ProjectCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -6 }}
        className="h-full"
      >
        <Card 
          onMouseMove={handleMouseMove}
          className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/50 h-full flex flex-col relative bg-card/50 backdrop-blur-sm spotlight-card"
        >
          {/* Spotlight Effect Layer */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-10"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  300px circle at ${mouseX}px ${mouseY}px,
                  rgba(var(--primary-rgb), 0.12),
                  transparent 80%
                )
              `,
            }}
          />

          <div className="relative aspect-video overflow-hidden z-0">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          </div>

          <CardContent className="p-6 flex-1 flex flex-col relative z-20">
            <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground cursor-pointer hover:bg-muted/80 transition-colors">
                      +{tags.length - 4} more
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[280px] p-2 flex flex-wrap gap-1.5 bg-popover/95 backdrop-blur-md border border-border/80">
                    {tags.slice(4).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-0 flex gap-4 border-t border-border/50 mt-auto relative z-20 bg-background/20 backdrop-blur-sm">
            <Link 
              href={link} 
              target="_blank" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
            >
              <Github className="h-4 w-4 group-hover/link:rotate-12 transition-transform duration-300" />
              <span className="relative font-medium">
                View Code
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-foreground transition-all group-hover/link:w-full" />
              </span>
            </Link>
            {liveLink && (
              <Link 
                href={liveLink} 
                target="_blank" 
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
              >
                <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                <span className="relative font-semibold">
                  Live Demo
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover/link:w-full" />
                </span>
              </Link>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </TooltipProvider>
  )
}
