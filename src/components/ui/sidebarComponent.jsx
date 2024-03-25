import { cn } from 'lib/utils';
import React from 'react';

const SideBarItem = React.forwardRef(({ className, icon, title, activity, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex group justify-center items-center h-14 my-2 mx-1 cursor-default rounded-sm p-1 text-sm outline-none hover:bg-accent hover:text-black duration-500',
      className
    )}
    {...props}
  >
    <span className=" text-sm w-1/5 pl-4 text-center">{icon}</span>
    <div className="text-sm font-semibold w-3/5">{title}</div>
    <span className="text-red-800 text-sm w-1/5 text-center opacity-0 duration-300 group-hover:opacity-100">
      {activity}
    </span>
  </div>
));
SideBarItem.displayName = 'SideBarItem';

export { SideBarItem };
