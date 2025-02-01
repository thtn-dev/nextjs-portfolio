import { EXPERIENCES } from '@/libs/data/data-experiences';
import Container from '../layouts/container';
import { ExperienceCard } from '../general/experience-card';

function ExperiencesSection() {
  return (
    <Container>
      <div className='flex w-full justify-center'>
        <span className='rounded-full bg-zinc-200 px-4 py-1 text-sm dark:bg-zinc-500'>
          Experience
        </span>
      </div>

      <div className='flex flex-col items-center justify-center space-y-4 md:space-y-8 md:px-24'>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </Container>
  );
}

export default ExperiencesSection;
