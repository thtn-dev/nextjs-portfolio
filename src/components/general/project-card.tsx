import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Github,
  Globe,
  Lock,
  SquareArrowOutUpRight,
  Users2
} from 'lucide-react';
import Link from 'next/link';
import { ProjectType } from '@/lib/data/data-projects';
import { CollapsibleText } from './collapsible-text';
import { ShineBorder } from '../magicui/shine-border';

interface ProjectCardProps extends ProjectType {
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

function ProjectCard({
  name,
  description,
  image,
  imageAlt,
  imagePosition = 'left',
  technologies = [],
  demo,
  github,
  member,
  privacy,
  role
}: ProjectCardProps) {
  return (
    <Card className='relative overflow-hidden border-none shadow-none'>
      <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
      <CardContent className='flex flex-col p-6 lg:flex-row'>
        <div
          className={cn(
            'flex flex-col md:flex-row',
            imagePosition === 'right' && 'md:flex-row-reverse'
          )}
        >
          <div className='h-64 md:h-auto md:w-2/5 md:p-4'>
            <div className='relative h-full w-full'>
              <Image
                src={image || '/placeholder.svg'}
                alt={imageAlt}
                fill
                style={{ objectFit: 'cover', position: 'absolute' }}
                className='cursor-pointer rounded-lg transition-transform duration-300 md:hover:scale-105'
              />
            </div>
          </div>
          <div className='flex flex-col justify-between py-4 md:w-3/5 md:p-6'>
            <div>
              <h3 className='mb-2 text-2xl font-bold'>{name}</h3>
              <div className='mb-4 flex items-center gap-2'>
                <Badge variant='secondary'>
                  {privacy === 'public' ? (
                    <span className='flex items-center gap-1'>
                      <Globe size={16} />
                      Public
                    </span>
                  ) : (
                    <span className='flex items-center gap-1'>
                      <Lock size={16} />
                      Private
                    </span>
                  )}
                </Badge>
                <Badge variant='secondary'>
                  <span className='flex items-center gap-1'>
                    <Users2 size={16} />
                    {member}
                  </span>
                </Badge>
                <Badge variant='secondary'>{role}</Badge>
              </div>
              <div className='mb-4 text-sm text-muted-foreground md:text-base'>
                <CollapsibleText text={description} maxLength={100} />
              </div>
              {technologies.length > 0 && (
                <div className='mb-4 flex flex-wrap gap-2'>
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='whitespace-nowrap'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className='mt-4 flex items-center gap-2'>
              {github && (
                <Button variant={'default'} asChild>
                  <Link target='_blank' href={github}>
                    <Github />
                  </Link>
                </Button>
              )}

              {demo && (
                <Button variant={'default'} asChild>
                  <Link href={demo}>
                    <SquareArrowOutUpRight />
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

export default ProjectCard;
