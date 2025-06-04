import type { Metadata } from 'next';
import ProjectsHeader from './_components/projects-header';
import ProjectsGrid from './_components/projects-grid';

export const metadata: Metadata = {
  title: 'Projects | Developer Portfolio',
  description:
    'Explore my latest projects and development work across various technologies and domains.'
};

export default function ProjectsPage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto max-w-7xl px-4 py-8'>
        <ProjectsHeader />
        {/* <ProjectsFilters /> */}
        <ProjectsGrid />
      </div>
    </div>
  );
}
