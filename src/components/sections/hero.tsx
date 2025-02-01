'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PingDot from '../general/ping-dot';
import { Github, Linkedin, MapPinned } from 'lucide-react';
import { Button } from '../ui/button';
import Container from '../layouts/container';

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container className='bg-zinc-50 dark:bg-zinc-900'>
      <div className='flex flex-col-reverse items-center justify-between gap-4 md:flex-row'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className='mb-8 w-full md:mb-0 md:w-1/2'
        >
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>
            {"Hi I'am Trung Nam"}
          </h1>
          <p className='mb-6'>
            {
              "I'm a software engineer based in Ho Chi Minh City, Vietnam. I have a passion for software development and love to create things that make people's lives easier."
            }
          </p>
          <ul className='mb-4 flex flex-col gap-2'>
            <li className='flex items-center gap-2'>
              <MapPinned className='w-[1.5rem]' /> Go Vap, Ho Chi Minh City
            </li>
            <li className='flex items-center gap-2'>
              <span className='flex w-[1.5rem] justify-center'>
                <PingDot />
              </span>
              Available for new projects
            </li>
          </ul>
          <div className='flex gap-2'>
            <Button size={'default'} variant={'outline'}>
              <Github />
            </Button>
            <Button size={'default'} variant={'outline'}>
              <Linkedin />
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex w-full justify-center md:w-1/2 md:justify-end'
        >
          <div className='relative h-80 w-64 overflow-hidden rounded-lg shadow-xl md:h-96 md:w-72'>
            <Image
              src='/images/simson.jpeg'
              alt='John Doe Portrait'
              fill
              style={{ objectFit: 'cover', position: 'absolute' }}
              className='rounded-lg'
            />
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
