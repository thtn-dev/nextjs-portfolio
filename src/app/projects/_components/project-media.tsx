'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Images, Video, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectMedia {
  images: string[];
  videos: string[];
  gifs: string[];
}

interface Project {
  media: ProjectMedia;
  title: string;
}

interface ProjectMediaProps {
  project: Project;
}

export default function ProjectMedia({ project }: ProjectMediaProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('images');

  const allMedia = [
    ...project.media.images,
    ...project.media.videos,
    ...project.media.gifs
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setCurrentIndex(allMedia.indexOf(src));
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : allMedia.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allMedia[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < allMedia.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(allMedia[newIndex]);
  };

  return (
    <section className='space-y-8'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold'>Project Gallery</h2>
        <p className='mx-auto max-w-3xl text-muted-foreground'>
          {
            "Visual showcase of the project's interface, features, and functionality"
          }
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Media Gallery</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='images' className='flex items-center gap-1'>
                <Images className='h-4 w-4' />
                Screenshots
                <Badge variant='secondary' className='rounded-full'>
                  {project.media.images.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value='videos' className='flex items-center gap-1'>
                <Video className='h-4 w-4' />
                Videos
                <Badge variant='secondary' className='rounded-full'>
                  {project.media.videos.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value='gifs' className='flex items-center gap-1'>
                <Zap className='h-4 w-4' />
                Demos
                <Badge variant='secondary' className='rounded-full'>
                  {project.media.gifs.length}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value='images' className='mt-6'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {project.media.images.map((image, index) => (
                  <div
                    key={index}
                    className='group relative aspect-video cursor-pointer overflow-hidden rounded-lg'
                    onClick={() => handleImageClick(image)}
                  >
                    <Image
                      src={image || '/placeholder.svg'}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20' />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value='videos' className='mt-6'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {project.media.videos.map((video, index) => (
                  <div
                    key={index}
                    className='group relative aspect-video cursor-pointer overflow-hidden rounded-lg'
                    onClick={() => handleImageClick(video)}
                  >
                    <Image
                      src={video || '/placeholder.svg'}
                      alt={`${project.title} video ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
                      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white/90'>
                        <Video className='ml-1 h-8 w-8 text-black' />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value='gifs' className='mt-6'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {project.media.gifs.map((gif, index) => (
                  <div
                    key={index}
                    className='group relative aspect-video cursor-pointer overflow-hidden rounded-lg'
                    onClick={() => handleImageClick(gif)}
                  >
                    <Image
                      src={gif || '/placeholder.svg'}
                      alt={`${project.title} demo ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                    <div className='absolute right-2 top-2'>
                      <Badge
                        variant='secondary'
                        className='bg-black/50 text-white'
                      >
                        GIF
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className='max-w-5xl overflow-hidden p-0 2xl:max-w-7xl [&>button]:hidden'>
          <div className='relative aspect-video'>
            {selectedImage && (
              <Image
                src={selectedImage || '/placeholder.svg'}
                alt='Project media'
                fill
                className='object-contain'
              />
            )}

            {/* Close Button */}
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-4 top-4 bg-black/50 text-white hover:bg-black/70'
              onClick={() => setSelectedImage(null)}
            >
              <X className='h-4 w-4' />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant='ghost'
              size='icon'
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70'
              onClick={handlePrevious}
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>

            <Button
              variant='ghost'
              size='icon'
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70'
              onClick={handleNext}
            >
              <ChevronRight className='h-4 w-4' />
            </Button>

            {/* Counter */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white'>
              {currentIndex + 1} / {allMedia.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
