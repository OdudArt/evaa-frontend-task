import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const Tabs = TabsPrimitive.Root;

const tabListVariants = cva('inline-flex h-12 items-center justify-center rounded-md bg-tabs p-1 text-tertiary', {
  variants: {
    size: {
      default: 'h-12',
      sm: 'h-[38px]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

export interface TabListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabListVariants> {}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabListProps>(
  ({ className, size, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn(tabListVariants({ size }), className)} {...props} />
  )
);
TabsList.displayName = TabsPrimitive.List.displayName;

const tabTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[22px] px-6 py-3 text-sm tracking-wide ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state="active"]:font-black hover:bg-accent',
  {
    variants: {
      size: {
        default: '',
        sm: 'h-8'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

export interface TabTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabListVariants> {}

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabTriggerProps>(
  ({ className, size, ...props }, ref) => (
    <TabsPrimitive.Trigger ref={ref} className={cn(tabTriggerVariants({ size }), className)} {...props} />
  )
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
