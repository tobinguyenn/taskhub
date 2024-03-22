import { cn } from 'lib/utils';
import React from 'react';

const SideBarItem = React.forwardRef(({ className, icon, title, activity, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex group items-center justify-center w-full h-10 my-1 bg-transparent cursor-pointer hover:bg-zinc-700',
      className
    )}
    {...props}
  >
    <span className="text-white text-sm w-1/5 pl-4 text-center">{icon}</span>
    <div className="text-sm font-extralight w-3/5">{title}</div>
    <span className="text-white text-sm w-1/5 text-center opacity-0 duration-300 group-hover:opacity-100">
      {activity}
    </span>
  </div>
));
SideBarItem.displayName = 'SideBarItem';

export { SideBarItem };
