'use client';

import { useState, useEffect } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { useTruncateText } from '@/hooks/use-truncate-text';

interface CollapsibleTextProps {
  text: string;
  maxLength?: number;
}

export function CollapsibleText({
  text,
  maxLength = 100
}: CollapsibleTextProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const truncatedText = useTruncateText(text, maxLength);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is the default breakpoint for 'md' in Tailwind
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isSmallScreen) {
    return <div>{text}</div>;
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div>{isOpen ? text : truncatedText}</div>
      <CollapsibleContent>
        {/* This is empty because we're showing the full text above when open */}
      </CollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button variant='link' className='h-auto p-0'>
          {isOpen ? 'Show Less' : 'Read More'}
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
