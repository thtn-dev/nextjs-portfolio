import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, ExternalLink, Calendar, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  status: string;
  githubUrl: string;
  liveUrl: string | null;
  startDate: string;
  endDate: string | null;
  featured: boolean;
  highlights: string[];
}

interface FeaturedProjectProps {
  project: Project;
  reverse?: boolean;
}

export default function FeaturedProject({
  project,
  reverse = false
}: FeaturedProjectProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className='overflow-hidden border-2 transition-all duration-300 hover:border-primary/20'>
      <CardContent className='p-0'>
        <div
          className={`grid gap-0 lg:grid-cols-2 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}
        >
          {/* Image Section */}
          <div
            className={`relative aspect-video lg:aspect-square ${reverse ? 'lg:col-start-2' : ''}`}
          >
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              fill
              className='object-cover'
            />
            <div className='absolute left-4 top-4 flex gap-2'>
              <Badge
                variant='secondary'
                className='bg-background/90 backdrop-blur-sm'
              >
                <Star className='mr-1 h-3 w-3' />
                Featured
              </Badge>
              <Badge
                variant={
                  project.status === 'Completed' ? 'default' : 'secondary'
                }
                className='bg-background/90 backdrop-blur-sm'
              >
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className='flex flex-col justify-between p-8'>
            <div className='space-y-6'>
              {/* Header */}
              <div className='space-y-3'>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Calendar className='h-4 w-4' />
                  <span>
                    {formatDate(project.startDate)} -{' '}
                    {project.endDate ? formatDate(project.endDate) : 'Present'}
                  </span>
                  <Separator orientation='vertical' className='h-4' />
                  <Badge variant='outline' className='text-xs'>
                    {project.category}
                  </Badge>
                </div>

                <Link href={`/projects/${project.id}`}>
                  <h3 className='cursor-pointer text-2xl font-bold transition-colors hover:text-primary'>
                    {project.title}
                  </h3>
                </Link>
                <p className='leading-relaxed text-muted-foreground'>
                  {project.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className='space-y-3'>
                <h4 className='text-sm font-semibold'>Key Highlights</h4>
                <ul className='space-y-2'>
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-2 text-sm text-muted-foreground'
                    >
                      <div className='mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary' />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className='space-y-3'>
                <h4 className='text-sm font-semibold'>Technologies Used</h4>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant='secondary' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className='mt-6 flex gap-3 border-t pt-6'>
              <Button asChild className='flex-1'>
                <Link
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='mr-2 h-4 w-4' />
                  View Code
                </Link>
              </Button>
              {project.liveUrl && (
                <Button asChild variant='outline' className='flex-1'>
                  <Link
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='mr-2 h-4 w-4' />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
