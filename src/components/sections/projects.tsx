import { PROJECTS } from '@/libs/data/data-projects';
import Container from '../layouts/container';
import ProjectCard from '../general/project-card';

function ProjectsSection() {
  return (
    <Container className='bg-zinc-50 dark:bg-zinc-900'>
      <div className='flex w-full justify-center'>
        <span className='rounded-full bg-zinc-200 px-4 py-1 text-sm dark:bg-zinc-500'>
          Projects
        </span>
      </div>
      {PROJECTS.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            {...project}
            imageAlt='Project Image'
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
          />
        );
      })}
    </Container>
  );
}

export default ProjectsSection;
