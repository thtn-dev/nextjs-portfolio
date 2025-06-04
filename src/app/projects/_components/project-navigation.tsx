import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  image: string
  category: string
}

interface ProjectNavigationProps {
  previousProject: Project | null
  nextProject: Project | null
}

export default function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
  return (
    <div className="mt-16 pt-16 border-t">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Previous Project */}
        <div>
          {previousProject ? (
            <Link href={`/projects/${previousProject.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Previous Project</p>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {previousProject.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{previousProject.category}</p>
                    </div>
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={previousProject.image || "/placeholder.svg"}
                        alt={previousProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="flex items-center justify-center h-24 text-muted-foreground">
              <span>No previous project</span>
            </div>
          )}
        </div>

        {/* Next Project */}
        <div>
          {nextProject ? (
            <Link href={`/projects/${nextProject.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={nextProject.image || "/placeholder.svg"}
                        alt={nextProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-sm text-muted-foreground mb-1">Next Project</p>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{nextProject.title}</h3>
                      <p className="text-xs text-muted-foreground">{nextProject.category}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="flex items-center justify-center h-24 text-muted-foreground">
              <span>No next project</span>
            </div>
          )}
        </div>
      </div>

      {/* Back to Projects */}
      <div className="text-center mt-8">
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  )
}
