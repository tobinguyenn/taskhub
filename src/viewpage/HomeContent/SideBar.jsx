import { CardContent } from 'components/ui/card';
import { ScrollArea } from 'components/ui/scroll-area';
import { SideBarItem } from 'components/ui/sidebarComponent';
import { cn } from 'lib/utils';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

import { FaChevronLeft, FaChevronRight, FaFlipboard, FaPlus, FaUserAlt } from 'react-icons/fa';

function SideBar() {
  const [isOpen, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen(!isOpen);
  };

  const sidebarClassName = cn(
    'relative flex flex-col bg-stone-900 duration-500 text-gray-100',
    isOpen ? 'w-11' : 'w-1/4',
    'overflow-hidden'
  );
  const iconToggle = cn(
    'absolute top-2 right-2 text-2xl text-white p-1 cursor-pointer border border-white-xs rounded-sm ',
    isOpen ? 'hover:bg-green-500' : 'hover:bg-red-500'
  );

  const hiddenItem = cn(isOpen ? 'opacity-0' : 'opacity-100');

  return (
    <div className={sidebarClassName}>
      {isOpen ? (
        <FaChevronRight className={iconToggle} onClick={onClickHandler} />
      ) : (
        <FaChevronLeft className={iconToggle} onClick={onClickHandler} />
      )}
      <div className=" border-b border-white bg-transparent transition duration-500 h-h_menubar mb-5 shadow-xl" />
      <CardContent content="Board Management" className={hiddenItem} />
      <SideBarItem icon={<FaFlipboard />} title="Boards" className={hiddenItem} />
      <SideBarItem icon={<FaUserAlt />} title="Users" className={hiddenItem} />
      <CardContent content="Your Board" activity={<FaPlus />} className={hiddenItem} />
      <ScrollArea className="h-1/4">
        <SideBarItem icon={<FaFlipboard />} title="Board 1" activity={<BsThreeDots />} className={hiddenItem} />
        <SideBarItem icon={<FaFlipboard />} title="Board 2" activity={<BsThreeDots />} className={hiddenItem} />
        <SideBarItem icon={<FaFlipboard />} title="Board 3" activity={<BsThreeDots />} className={hiddenItem} />
        <SideBarItem icon={<FaFlipboard />} title="Board 4" activity={<BsThreeDots />} className={hiddenItem} />
        <SideBarItem icon={<FaFlipboard />} title="Board 5" activity={<BsThreeDots />} className={hiddenItem} />
      </ScrollArea>
    </div>
  );
}

export default SideBar;
