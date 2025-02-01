import Link from 'next/link';
import ImageWrapper from './image-wrapper';
import Typography from './typography';

type SkillDetailProps = {
  label: string;
  src: string;
  srcDarkMode?: string;
  url?: string;
};

function SkillDetail({ label, src, srcDarkMode, url }: SkillDetailProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Link href={url || '#'}>
        <ImageWrapper
          src={src}
          srcForDarkMode={srcDarkMode}
          alt={label}
          width={64}
          height={64}
          className='transition-transform duration-300 md:hover:scale-110'
        />
      </Link>
      <Typography variant='body1' className='text-center text-xs md:text-base'>
        {label}
      </Typography>
    </div>
  );
}

export default SkillDetail;
