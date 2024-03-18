import * as React from 'react';

import { cn } from 'lib/utils';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      ' m-2 text-sm text-black font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('italic text-xs', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

const CardForm = React.forwardRef(({ className, ...props }, ref) => (
  <form
    ref={ref}
    className={cn('flex flex-col mt-20 w-1/3 m-auto border rounded-xl items-center bg-gray-100 shadow-2xl ', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardForm';

const CardCheckBox = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex w-2/3 m-2 items-center space-x-2', className)} {...props} />
));
CardContent.displayName = 'CardCheckBox';

export { Card, CardCheckBox, CardContent, CardDescription, CardFooter, CardForm, CardHeader, CardTitle };
