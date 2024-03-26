import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'components/ui/select';
import { cn } from 'lib/utils';
import React from 'react';

const MemberItem = React.forwardRef(({ className, avatar, name, email, permision, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex w-full p-2 my-2 group justify-center items-center shadow-md bg-transparent/5', className)}
    {...props}
  >
    <span className=" text-xl pl-3 w-1/6 text-center">{avatar}</span>
    <div className="flex flex-col justify-start items-center w-3/6">
      <div className="h-2/3 text-sm font-medium w-full">{name}</div>
      <div className="h-1/3 text-xs w-full">{email}</div>
    </div>
    <Select>
      <SelectTrigger className="w-2/6">
        <SelectValue placeholder={permision} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Member">Member</SelectItem>
        <SelectItem value="Viewer">Viewer</SelectItem>
        <SelectItem value="Admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  </div>
));
MemberItem.displayName = 'MemberItem';

export { MemberItem };
