import { cn } from 'lib/utils';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function SideBar() {
  const [isOpen, setOpen] = useState(true);

  const onClickHandler = () => {
    setOpen(!isOpen);
  };

  const sidebarClassName = cn(
    'relative',
    'bg-gray-400',
    isOpen ? 'w-12' : 'w-1/4',
    'duration-500',
    'text-gray-100',
    'px-4'
  );

  return (
    <div className={sidebarClassName}>
      {isOpen ? (
        <FaChevronRight className=" text-2xl text-black cursor-pointer" onClick={onClickHandler} />
      ) : (
        <FaChevronLeft className="text-2xl text-black cursor-pointer" onClick={onClickHandler} />
      )}
    </div>
  );
}

export default SideBar;
