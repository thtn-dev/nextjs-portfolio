'use client';
import useScroll from '@/hooks/use-scroll';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const scrolled = useScroll(160);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    scrolled && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-[50] rounded-full bg-primary p-2 text-primary-foreground opacity-60 shadow-lg transition-all duration-300 ease-in-out hover:bg-primary/90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 md:bottom-6 md:right-6`}
        aria-label='Back to top'
      >
        <ArrowUp className='size-6 md:size-8' />
      </button>
    )
  );
}

export default BackToTop;
