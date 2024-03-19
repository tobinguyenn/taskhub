import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

function SideBar() {
  const [open, setOpen] = useState(true);
  return (
    <div className={`relative bg-gray-400 ${open ? 'w-1/4' : 'w-12'} duration-500 text-gray-100 px-4`}>
      <HiMenuAlt3
        className="absolute top-4 right-4 text-2xl text-black cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      Side bar here
    </div>
  );
}
export default SideBar;
