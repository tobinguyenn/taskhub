import { cn } from 'lib/utils';
import React from 'react';

const SideBarItem = React.forwardRef(({ className, icon, title, activity, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center justify-center w-full h-h_menubar my-1 bg-transparent hover:bg-transparent/30',
      className
    )}
    {...props}
  >
    <span className="text-white text-sm w-1/5 pl-4">{icon}</span>
    <div className="text-sm w-3/5">{title}</div>
    <span className="text-white text-sm w-1/5">{activity}</span>
  </div>
));
SideBarItem.displayName = 'SideBarItem';

export { SideBarItem };
