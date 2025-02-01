import SKILLS from '@/libs/data/data-skills';
import Container from '../layouts/container';
import SkillDetail from '../general/skill';

function SkillSection() {
  return (
    <Container id='skills'>
      <div className='flex w-full justify-center'>
        <span className='rounded-full bg-zinc-200 px-4 py-1 text-sm dark:bg-zinc-500'>
          Skills
        </span>
      </div>
      <div className='mt-8 grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8'>
        {SKILLS.map((skill, index) => {
          return <SkillDetail key={index} {...skill} />;
        })}
      </div>
    </Container>
  );
}

export default SkillSection;
