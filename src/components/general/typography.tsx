import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('typography', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px]',
      h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em]',
      h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em]',
      subtitle: 'text-lg md:text-xl',
      body1: 'text-base md:text-lg',
      body2: 'text-base',
      body3: 'text-sm'
    }
  },
  defaultVariants: {
    variant: 'body2'
  }
});

interface TypographyProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
}

const elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p'
};

type ComponentElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(
  (
    { component, className = '', variant, children, ...props }: TypographyProps,
    ref
  ) => {
    const Comp = (
      component ? component : variant ? elementMapping[variant] : 'p'
    ) as ComponentElement;

    return (
      <Comp
        className={cn(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
