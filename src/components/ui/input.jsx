import * as React from 'react';

import { cn } from 'lib/utils';

const Input = React.forwardRef(({ className, label, icon, type, ...props }, ref) => {
  return (
    <div className={cn('w-3/4 focus:outline-none bg-transparent text-sm font-semibold', className)}>
      <div className="text-xs font-bold">{label}</div>
      <div className="flex justify-center items-center bg-transparent/5 shadow-md h-10 ">
        <span className="w-1/4 pl-3 text-sm font-semibold">{icon}</span>
        <input
          type={type}
          className="w-3/4 focus:outline-none bg-transparent text-sm font-semibold"
          ref={ref}
          {...props}
        />
      </div>
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
