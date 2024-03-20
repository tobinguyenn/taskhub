import { cn } from 'lib/utils';
import React from 'react';

const SideBarItem = React.forwardRef(({ className, icon, title, activity, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex group items-center justify-center w-full h-10 my-1 bg-transparent cursor-pointer hover:bg-transparent/30',
      className
    )}
    {...props}
  >
    <span className="text-white text-sm w-1/5 pl-4">{icon}</span>
    <div className="text-sm w-3/5">{title}</div>
    <span className="text-white text-sm w-1/5 opacity-0 duration-300 group-hover:opacity-100">{activity}</span>
  </div>
));
SideBarItem.displayName = 'SideBarItem';

export { SideBarItem };
