'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import FeaturedProject from './featured-project';
import { Badge } from '@/components/ui/badge';
import projectsData from '@/data/projects.json';

export default function ProjectsGrid() {
  const [projects] = useState(projectsData.projects);
  const featuredProjects = projects.filter((project) => project.featured);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <div className='space-y-12'>
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section>
          <div className='mb-8 flex items-center gap-3'>
            <h2 className='text-2xl font-bold'>Featured Projects</h2>
            <Badge variant='secondary'>{featuredProjects.length}</Badge>
          </div>

          <div className='space-y-8'>
            {featuredProjects.map((project, index) => (
              <FeaturedProject
                key={project.id}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Projects Section */}
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
    </div>
  );
}
