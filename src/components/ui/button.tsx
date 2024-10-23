import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import withHapticFeedback from '../hocs/withHapticFeedback';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.95]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input text-foreground hover:text-accent-foreground',
        active: 'text-primary hover:bg-accent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-primary',
        ghost: 'bg-card-shadow text-[#8c8c8c] hover:bg-accent hover:text-accent-foreground',
        card: 'bg-accent text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        navItem: 'gap-0.5 flex-col py-0 px-3 text-[0.6875rem] hover:bg-transparent hover:opacity-90',
        text: 'text-secondary'
      },
      size: {
        fit: 'h-fit	w-fit',
        default: 'h-12 px-5 py-2',
        sm: 'h-9 rounded-md px-3 text-sm',
        lg: 'h-11 rounded-sm px-8 py-4 text-lg',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = withHapticFeedback(
  React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }),
  'light'
);
Button.displayName = 'Button';

export { Button, buttonVariants };
