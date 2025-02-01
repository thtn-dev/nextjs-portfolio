import type React from 'react';
import { Separator } from '../ui/separator';

function Footer() {
  return (
    <footer>
      <Separator />
      <div className='flex flex-col items-center justify-center py-6 text-center md:flex-row'>
        <p className='text-xs text-gray-500 md:text-base'>
          © {new Date().getFullYear()} | <b>Designed</b> and <b>coded</b> with
          ❤️️ by Trung Nam.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
