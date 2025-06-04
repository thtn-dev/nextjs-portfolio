"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Github, ExternalLink, Calendar, Star } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  status: string
  githubUrl: string
  liveUrl: string | null
  startDate: string
  endDate: string | null
  featured: boolean
  highlights: string[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {project.featured && (
                <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge
                variant={project.status === "Completed" ? "default" : "secondary"}
                className="bg-background/90 backdrop-blur-sm text-xs"
              >
                {project.status}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          {/* Header Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>
                {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : "Present"}
              </span>
              <Badge variant="outline" className="text-xs ml-auto">
                {project.category}
              </Badge>
            </div>

            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Key Features</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-2">
          <Button asChild size="sm" className="flex-1" onClick={(e) => e.stopPropagation()}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1" onClick={(e) => e.stopPropagation()}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
