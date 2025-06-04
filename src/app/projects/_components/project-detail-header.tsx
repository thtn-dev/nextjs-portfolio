import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, ExternalLink, Github, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  status: string
  githubUrl: string
  liveUrl: string | null
  startDate: string
  endDate: string | null
  duration: string
  featured: boolean
}

interface ProjectDetailHeaderProps {
  project: Project
}

export default function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-8 mb-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/projects" className="hover:text-foreground transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <span>/</span>
        <span>{project.title}</span>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* Project Meta */}
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="outline" className="text-sm">
              {project.category}
            </Badge>
            <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-sm">
              {project.status}
            </Badge>
            {project.featured && (
              <Badge variant="secondary" className="text-sm">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>

          {/* Title and Description */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>
              {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : "Present"}
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span>{project.duration}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Link>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="outline" size="lg">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>
      </div>
    </div>
  )
}
