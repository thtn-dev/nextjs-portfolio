import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Zap, Star, Quote } from 'lucide-react';

interface Metrics {
  [key: string]: string | number | undefined;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface Project {
  metrics: Metrics;
  testimonial?: Testimonial;
}

interface ProjectMetricsProps {
  project: Project;
}

export default function ProjectMetrics({ project }: ProjectMetricsProps) {
  const getMetricIcon = (key: string) => {
    switch (key.toLowerCase()) {
      case 'users':
        return <Users className='h-5 w-5' />;
      case 'performance':
      case 'accuracy':
        return <TrendingUp className='h-5 w-5' />;
      case 'uptime':
      case 'loadtime':
        return <Zap className='h-5 w-5' />;
      case 'satisfaction':
        return <Star className='h-5 w-5' />;
      default:
        return <TrendingUp className='h-5 w-5' />;
    }
  };

  const formatMetricKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <section className='space-y-8'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold'>Project Impact & Results</h2>
        <p className='mx-auto max-w-3xl text-muted-foreground'>
          {
            "Measurable outcomes and user feedback demonstrating the project's success"
          }
        </p>
      </div>

      <div className='mb-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
        {Object.entries(project.metrics).map(([key, value]) => (
          <Card key={key}>
            <CardContent className='p-6 text-center'>
              <div className='mb-2 flex items-center justify-center text-primary'>
                {getMetricIcon(key)}
              </div>
              <div className='mb-1 text-2xl font-bold'>{value}</div>
              <div className='text-sm text-muted-foreground'>
                {formatMetricKey(key)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {project.testimonial && (
        <Card className='border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Quote className='h-5 w-5' />
              User Testimonial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className='mb-4 text-lg italic'>
              &quot;{project.testimonial.text}&quot;
            </blockquote>
            <div className='flex items-center gap-2'>
              <div>
                <div className='font-medium'>{project.testimonial.author}</div>
                <div className='text-sm text-muted-foreground'>
                  {project.testimonial.role}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
