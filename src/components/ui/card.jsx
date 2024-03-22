import * as React from 'react';

import { cn } from 'lib/utils';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('font-bold p-3 my-2', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      ' m-2 text-sm text-zinc-700 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
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

const CardContent = React.forwardRef(({ className, content, activity, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('group text-sm font-semibold my-4 pl-4 flex justify-between items-center', className)}
    {...props}
  >
    {content}
    <span className="ml-auto mr-4 opacity-0 duration-300 group-hover:opacity-100 hover:cursor-pointer">{activity}</span>
  </div>
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
