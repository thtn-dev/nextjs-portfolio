'use client';
import Link from 'next/link';
import Logo from '../general/logo';
import ThemeSwitcher from '../general/theme-switcher';
import { NAV_LINKS } from '@/libs/data/nav-links';
import MyCV from '../general/my-cv';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet';
import useScroll from '@/hooks/use-scroll';
import { useEffect, useState } from 'react';
import useWindowSize from '@/hooks/use-window-size';
import { cn } from '@/libs/utils';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

function Header() {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 w-full border-b bg-background transition-all duration-300',
        scrolled ? 'bg-background/50 backdrop-blur-md' : ''
      )}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <ul className='hidden items-center md:flex'>
          {NAV_LINKS.map((navLink) => (
            <li key={navLink.name} className='mx-4 inline-block'>
              <a
                href={navLink.href}
                className='font-medium text-primary hover:text-primary/80'
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden items-center gap-2 md:flex'>
          <ThemeSwitcher />
          <MyCV />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            asChild
            className='flex items-center justify-center md:hidden'
          >
            <Button size='icon' variant={'ghost'}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={'right'} className='m-0 p-0'>
            <SheetHeader className='flex items-start justify-center border-b px-3 pb-4'>
              <SheetTitle />
              <Logo />
            </SheetHeader>
            <ul className='mx-3 my-4 flex flex-col items-start gap-4'>
              {NAV_LINKS.map((navLink) => (
                <li key={navLink.name}>
                  <a
                    href={navLink.href}
                    className='font-semibold text-primary hover:text-primary/80'
                  >
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>
            <SheetFooter className='mx-4 mt-4 flex gap-2 border-t pt-2'>
              <MyCV />
              <ThemeSwitcher />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
