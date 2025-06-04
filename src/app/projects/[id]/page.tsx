import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ProjectDetailHeader from "../_components/project-detail-header"
import ProjectOverview from "../_components/project-overview"
import ProjectMedia from "../_components/project-media"
import ProjectChallenges from "../_components/project-challenges"
import ProjectTechnologies from "../_components/project-technologies"
import ProjectMetrics from "../_components/project-metrics"
import ProjectNavigation from "../_components/project-navigation"
import projectsData from "@/data/projects.json"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Developer Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const currentIndex = projectsData.projects.findIndex((p) => p.id === params.id)
  const previousProject = currentIndex > 0 ? projectsData.projects[currentIndex - 1] : null
  const nextProject = currentIndex < projectsData.projects.length - 1 ? projectsData.projects[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <ProjectDetailHeader project={project} />

        <div className="space-y-16">
          <ProjectOverview project={project} />
          <ProjectMedia project={project} />
          <ProjectChallenges project={project} />
          <ProjectTechnologies project={project} />
          <ProjectMetrics project={project} />
        </div>

        <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
      </div>
    </div>
  )
}
