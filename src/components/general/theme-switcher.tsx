'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <Button variant={'ghost'}>
        <Sun />
      </Button>
    );
  }

  return (
    <Button onClick={toggleTheme} variant={'ghost'} size={'icon'}>
      {theme === 'dark' ? <Sun /> : <MoonStar />}
    </Button>
  );
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
