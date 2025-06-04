'use client';
import Container from '../layouts/container';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import projectsData from '@/data/projects.json';
import ProjectCard from '@/app/projects/_components/project-card';

function ProjectsSection() {
  const [projects] = useState(projectsData.projects);

  return (
    <Container className='bg-zinc-50 dark:bg-zinc-900'>
      <div className='flex w-full justify-center'>
        <span className='rounded-full bg-secondary px-4 py-1 text-sm'>
          Projects
        </span>
      </div>
      <section>
        <div className='mb-8 flex items-center gap-3'>
          <h2 className='text-2xl font-bold'>All Projects</h2>
          <Badge variant='outline'>{projects.length}</Badge>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Button asChild className='mx-auto mt-8 w-full max-w-md'>
        <Link href='/projects' className='text-center'>
          View All Projects
        </Link>
      </Button>
    </Container>
  );
}

export default ProjectsSection;
