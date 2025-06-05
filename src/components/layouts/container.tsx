import * as React from 'react';

import { cn } from '@/lib/utils';

const Container = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <section
      className={cn('bg-gray 2xl:py-18 w-full py-14 md:py-16', className)}
      ref={ref}
      {...props}
    >
      <div className='app-container flex flex-col gap-6 md:gap-8'>
        {children}
      </div>
    </section>
  );
});

Container.displayName = 'Container';

export default Container;
