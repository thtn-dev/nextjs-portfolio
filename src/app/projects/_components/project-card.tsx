'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className='group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
        <CardHeader className='p-0'>
          <div className='relative aspect-video overflow-hidden'>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute left-3 top-3 flex gap-2'>
              {project.featured && (
                <Badge
                  variant='secondary'
                  className='bg-background/90 text-xs backdrop-blur-sm'
                >
                  <Star className='mr-1 h-3 w-3' />
                  Featured
                </Badge>
              )}
              <Badge
                variant={
                  project.status === 'Completed' ? 'default' : 'secondary'
                }
                className='bg-background/90 text-xs backdrop-blur-sm'
              >
                {project.status}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className='space-y-4 p-6'>
          {/* Header Info */}
          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-xs text-muted-foreground'>
              <Calendar className='h-3 w-3' />
              <span>
                {formatDate(project.startDate)} -{' '}
                {project.endDate ? formatDate(project.endDate) : 'Present'}
              </span>
              <Badge variant='outline' className='ml-auto text-xs'>
                {project.category}
              </Badge>
            </div>

            <h3 className='text-xl font-bold transition-colors group-hover:text-primary'>
              {project.title}
            </h3>

            <p className='line-clamp-3 text-sm leading-relaxed text-muted-foreground'>
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className='space-y-2'>
            <div className='flex flex-wrap gap-1'>
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant='secondary' className='text-xs'>
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant='outline' className='text-xs'>
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Key Highlights */}
          <div className='space-y-2'>
            <h4 className='text-sm font-medium'>Key Features</h4>
            <ul className='space-y-1'>
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <li
                  key={index}
                  className='flex items-start gap-2 text-xs text-muted-foreground'
                >
                  <div className='mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary' />
                  <span className='line-clamp-1'>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className='flex gap-2 p-6 pt-0'>
          <Button
            asChild
            size='sm'
            className='flex-1'
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='mr-2 h-4 w-4' />
              Code
            </a>
          </Button>
          {project.liveUrl && (
            <Button
              asChild
              variant='outline'
              size='sm'
              className='flex-1'
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ExternalLink className='mr-2 h-4 w-4' />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
