import * as React from 'react';

import { cn } from 'lib/utils';

const Input = React.forwardRef(({ className, icon, type, ...props }, ref) => {
  return (
    <div className="flex justify-center items-center bg-gray-200 shadow-md h-10 w-2/3 my-3 ">
      <span className="w-1/6 pl-4">{icon}</span>
      <input
        type={type}
        className={cn('w-5/6 focus:outline-none bg-transparent text-sm', className)}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
