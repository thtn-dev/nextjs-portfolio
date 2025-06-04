import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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

interface FeaturedProjectProps {
  project: Project
  reverse?: boolean
}

export default function FeaturedProject({ project, reverse = false }: FeaturedProjectProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  return (
    <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-0">
        <div className={`grid lg:grid-cols-2 gap-0 ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Image Section */}
          <div className={`relative aspect-video lg:aspect-square ${reverse ? "lg:col-start-2" : ""}`}>
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
              <Badge
                variant={project.status === "Completed" ? "default" : "secondary"}
                className="bg-background/90 backdrop-blur-sm"
              >
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : "Present"}
                  </span>
                  <Separator orientation="vertical" className="h-4" />
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <Link href={`/projects/${project.id}`}>
                  <h3 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6 pt-6 border-t">
              <Button asChild className="flex-1">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
              {project.liveUrl && (
                <Button asChild variant="outline" className="flex-1">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
