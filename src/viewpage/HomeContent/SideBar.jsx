import { CardContent } from 'components/ui/card';
import { SideBarItem } from 'components/ui/sidebarComponent';
import { cn } from 'lib/utils';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaFlipboard, FaUserAlt } from 'react-icons/fa';

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
  const iconToggle = cn('absolute top-2 right-2 text-2xl text-white cursor-pointer');

  const hiddenItem = cn(isOpen ? 'hidden' : '');

  return (
    <div className={sidebarClassName}>
      {isOpen ? (
        <FaChevronRight className={iconToggle} onClick={onClickHandler} />
      ) : (
        <FaChevronLeft className={iconToggle} onClick={onClickHandler} />
      )}
      <div
        className={`${isOpen ? 'bg-blue-700' : 'bg-transparent'} transition duration-500 h-h_menubar border-b border-white mb-5 shadow-xl `}
      />
      <CardContent className={hiddenItem}>Workspaces Management</CardContent>
      <SideBarItem className={hiddenItem} icon={<FaFlipboard />} title="Boards" />
      <SideBarItem className={hiddenItem} icon={<FaUserAlt />} title="Users" />
      <CardContent className={hiddenItem}>Your Boards</CardContent>
      <SideBarItem className={hiddenItem} icon={<FaFlipboard />} title="Board 1" />
      <SideBarItem className={hiddenItem} icon={<FaFlipboard />} title="Board 2" />
    </div>
  );
}

export default SideBar;
