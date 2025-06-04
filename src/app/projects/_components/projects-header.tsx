import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ProjectsHeader() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Badge variant="secondary" className="text-sm">
          Portfolio
        </Badge>
        <Separator orientation="vertical" className="h-4" />
        <Badge variant="outline" className="text-sm">
          2024
        </Badge>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">My Projects</h1>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        A collection of projects showcasing my expertise in full-stack development, AI/ML integration, and modern web
        technologies. Each project represents a unique challenge and learning experience.
      </p>

      <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>6 Projects</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>3 Featured</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span>2 In Progress</span>
        </div>
      </div>
    </div>
  )
}
