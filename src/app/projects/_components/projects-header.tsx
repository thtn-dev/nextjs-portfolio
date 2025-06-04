import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ProjectsHeader() {
  return (
    <div className='mb-12 text-center'>
      <div className='mb-4 flex items-center justify-center gap-2'>
        <Badge variant='secondary' className='text-sm'>
          Portfolio
        </Badge>
        <Separator orientation='vertical' className='h-4' />
        <Badge variant='outline' className='text-sm'>
          {new Date().getFullYear() > 2023 ? '2023 - Present' : '2023'}
        </Badge>
      </div>

      <h1 className='mb-6 text-4xl font-bold tracking-tight md:text-6xl'>
        My Projects
      </h1>

      <p className='mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground'>
        A collection of projects showcasing my expertise in full-stack
        development, AI/ML integration, and modern web technologies. Each
        project represents a unique challenge and learning experience.
      </p>
    </div>
  );
}
