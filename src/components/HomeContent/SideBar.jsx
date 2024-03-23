import { Button } from 'components/ui/button';
import { CardContent, CardForm, CardTitle } from 'components/ui/card';
import { Input } from 'components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from 'components/ui/popover';
import { ScrollArea } from 'components/ui/scroll-area';
import { Separator } from 'components/ui/separator';
import { SideBarItem } from 'components/ui/sidebarComponent';
import { cn } from 'lib/utils';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaFlipboard, FaPlus, FaUserAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function SideBar() {
  const [isOpen, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen(!isOpen);
  };

  const sidebarClassName = cn(
    'relative flex flex-col bg-transparent/80 duration-500 text-gray-100',
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

  const [isCreateBoard, setCreateBoard] = useState(false);
  const handleCreateBoard = (e) => {
    e.preventDefault();
    if (newBoardTitle.trim() !== '') {
      const newBoardItem = {
        id: Math.random().toString(36).substring(7),
        title: newBoardTitle,
      };
      setSidebarItems([...sidebarItems, newBoardItem]);
      setNewBoardTitle('');
      setCreateBoard(false);
    }
  };

  const [isDeleteBoard, setDeleteBoard] = useState(false);
  const handleDeleteBoard = (id) => {
    const updatedSidebarItems = sidebarItems.filter((item) => item.id !== id);
    setSidebarItems(updatedSidebarItems);
    setDeleteBoard(false);
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
              <FaPlus onClick={() => setCreateBoard(true)} />
            </PopoverTrigger>
            <PopoverContent className={isCreateBoard ? '' : 'hidden'}>
              <CardForm onSubmit={handleCreateBoard} className="w-full">
                <CardTitle className="text-black font-semibold p-1">Create new board</CardTitle>
                <Separator className="bg-stone-300 w-5/6" />
                <Input
                  label="Title:"
                  value={newBoardTitle}
                  onChange={(e) => setNewBoardTitle(e.target.value)}
                  required
                />
                <div className="flex justify-center items-center">
                  <Button
                    type="button"
                    variant="outline"
                    size="half"
                    className="mb-5 rounded-md h-8 w-1/2"
                    onClick={() => setCreateBoard(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="submit" size="half" className="mb-5 rounded-md h-8 w-1/2">
                    Create
                  </Button>
                </div>
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
            activity={
              <Popover>
                <PopoverTrigger>
                  <MdDelete className="text-red-500" onClick={() => setDeleteBoard(true)} />
                </PopoverTrigger>
                <PopoverContent className={isDeleteBoard ? '' : 'hidden'}>
                  <CardForm onSubmit={() => handleDeleteBoard(item.id)} className="w-full">
                    <CardTitle>
                      Are you sure to delete <span className="text-lg font-medium text-blue-500">{item.title}</span> ?
                    </CardTitle>
                    <div className="flex justify-center items-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="half"
                        className="mb-5 rounded-md h-8 w-1/2"
                        onClick={() => setDeleteBoard(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" variant="destructive" size="half" className="mb-5 rounded-md h-8 w-1/2">
                        Delete
                      </Button>
                    </div>
                  </CardForm>
                </PopoverContent>
              </Popover>
            }
            className={hiddenItem}
          />
        ))}
      </ScrollArea>
    </div>
  );
}

export default SideBar;
