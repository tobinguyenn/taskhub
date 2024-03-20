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
  const iconClassName = cn('absolute top-3 right-3 text-2xl text-black cursor-pointer');

  return (
    <div className={sidebarClassName}>
      {isOpen ? (
        <FaChevronRight className={iconClassName} onClick={onClickHandler} />
      ) : (
        <FaChevronLeft className={iconClassName} onClick={onClickHandler} />
      )}
    </div>
  );
}

export default SideBar;
