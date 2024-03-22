import { Button } from 'components/ui/button';
import { CardContent, CardForm, CardHeader } from 'components/ui/card';
import { Input } from 'components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from 'components/ui/popover';
import { ScrollArea } from 'components/ui/scroll-area';
import { Separator } from 'components/ui/separator';
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
  const hiddenItem = cn(isOpen ? 'hidden' : '');

  const [sidebarItems, setSidebarItems] = useState([]);
  const [newBoardTitle, setNewBoardTitle] = useState('');
  const [isPopoverContentOpen, setPopoverContentOpen] = useState(false);

  const handleCreateBoard = (e) => {
    e.preventDefault();
    const newBoardItem = {
      id: Math.random().toString(36).substring(7),
      title: newBoardTitle,
      activity: <BsThreeDots />,
    };
    setSidebarItems([...sidebarItems, newBoardItem]);
    setNewBoardTitle('');
    setPopoverContentOpen(false);
  };

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
      <CardContent
        content="Your Board"
        activity={
          <Popover>
            <PopoverTrigger>
              <FaPlus onClick={() => setPopoverContentOpen(!isPopoverContentOpen)} />
            </PopoverTrigger>
            <PopoverContent className={isPopoverContentOpen ? '' : 'hidden'}>
              <CardForm onSubmit={handleCreateBoard} className="w-full">
                <CardHeader>Create new board</CardHeader>
                <Separator className="bg-stone-300 w-5/6" />
                <Input
                  label="Title:"
                  value={newBoardTitle}
                  onChange={(e) => setNewBoardTitle(e.target.value)}
                  required
                />
                <Button type="submit" variant="submit" size="half" className="mb-5 rounded-md h-8">
                  Create
                </Button>
              </CardForm>
            </PopoverContent>
          </Popover>
        }
        className={hiddenItem}
      />
      <ScrollArea className="h-1/4">
        {sidebarItems.map((item) => (
          <SideBarItem
            key={item.id}
            icon={<FaFlipboard />}
            title={item.title}
            activity={item.activity}
            className={hiddenItem}
          />
        ))}
      </ScrollArea>
    </div>
  );
}

export default SideBar;
