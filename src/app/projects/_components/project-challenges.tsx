import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle } from "lucide-react"

interface Challenge {
  challenge: string
  solution: string
}

interface Project {
  challenges: Challenge[]
}

interface ProjectChallengesProps {
  project: Project
}

export default function ProjectChallenges({ project }: ProjectChallengesProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Challenges & Solutions</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Key technical challenges encountered during development and the innovative solutions implemented
        </p>
      </div>

      <div className="space-y-6">
        {project.challenges.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Challenge */}
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-r">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <Badge variant="destructive" className="text-xs">
                        Challenge
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg">{item.challenge}</h3>
                  </div>
                </div>

                {/* Solution */}
                <div className="p-6 bg-green-50 dark:bg-green-950/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <Badge variant="default" className="text-xs bg-green-600">
                        Solution
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
