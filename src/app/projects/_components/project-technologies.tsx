import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Shield } from "lucide-react"

interface TechnicalDetails {
  architecture: string
  deployment: string
  testing: string
  performance?: string
  security?: string
}

interface Project {
  technologies: string[]
  technicalDetails: TechnicalDetails
}

interface ProjectTechnologiesProps {
  project: Project
}

export default function ProjectTechnologies({ project }: ProjectTechnologiesProps) {
  const techCategories = {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "Python", "Django", "Prisma", "MongoDB", "PostgreSQL"],
    blockchain: ["Solidity", "Web3.js", "Ethereum", "IPFS", "MetaMask", "Hardhat", "OpenZeppelin"],
    ai: ["OpenAI API", "TensorFlow.js", "Python"],
    tools: ["Docker", "Redis", "WebSocket", "Socket.io", "Chart.js", "D3.js"],
  }

  const categorizedTechs = {
    frontend: project.technologies.filter((tech) => techCategories.frontend.includes(tech)),
    backend: project.technologies.filter((tech) => techCategories.backend.includes(tech)),
    blockchain: project.technologies.filter((tech) => techCategories.blockchain.includes(tech)),
    ai: project.technologies.filter((tech) => techCategories.ai.includes(tech)),
    tools: project.technologies.filter((tech) => techCategories.tools.includes(tech)),
  }

  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Technologies & Architecture</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Technical stack, architecture decisions, and implementation details
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Technologies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {categorizedTechs.frontend.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm text-muted-foreground">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {categorizedTechs.frontend.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {categorizedTechs.backend.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm text-muted-foreground">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {categorizedTechs.backend.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {categorizedTechs.blockchain.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm text-muted-foreground">Blockchain</h4>
                <div className="flex flex-wrap gap-2">
                  {categorizedTechs.blockchain.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {categorizedTechs.ai.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm text-muted-foreground">AI/ML</h4>
                <div className="flex flex-wrap gap-2">
                  {categorizedTechs.ai.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {categorizedTechs.tools.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm text-muted-foreground">Tools & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {categorizedTechs.tools.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Technical Implementation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Architecture
              </h4>
              <p className="text-sm text-muted-foreground">{project.technicalDetails.architecture}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                Deployment
              </h4>
              <p className="text-sm text-muted-foreground">{project.technicalDetails.deployment}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Testing
              </h4>
              <p className="text-sm text-muted-foreground">{project.technicalDetails.testing}</p>
            </div>

            {project.technicalDetails.performance && (
              <div>
                <h4 className="font-medium mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">{project.technicalDetails.performance}</p>
              </div>
            )}

            {project.technicalDetails.security && (
              <div>
                <h4 className="font-medium mb-2">Security</h4>
                <p className="text-sm text-muted-foreground">{project.technicalDetails.security}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
