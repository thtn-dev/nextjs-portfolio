import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building2 } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  logoUrl: string;
}

export function ExperienceCard({
  company,
  position,
  startDate,
  endDate,
  description,
  skills,
  logoUrl
}: ExperienceCardProps) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <div className='flex flex-col items-start justify-between gap-4 sm:flex-row'>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
            <div className='relative h-16 w-16 flex-shrink-0'>
              <Image
                src={logoUrl || '/placeholder.svg'}
                alt={`${company} logo`}
                fill
                style={{ objectFit: 'contain', position: 'absolute' }}
                className='rounded-md'
              />
            </div>
            <div>
              <CardTitle className='text-xl font-bold'>{position}</CardTitle>
              <CardDescription className='mt-1 flex items-center'>
                <Building2 className='mr-1 h-4 w-4 flex-shrink-0' />
                {company}
              </CardDescription>
            </div>
          </div>
          <div className='flex items-center text-sm text-muted-foreground'>
            <CalendarDays className='mr-1 h-4 w-4 flex-shrink-0' />
            <span className='whitespace-nowrap'>
              {startDate} - {endDate}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className='mb-4 text-sm text-muted-foreground md:text-base'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant='secondary'
              className='whitespace-nowrap'
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
