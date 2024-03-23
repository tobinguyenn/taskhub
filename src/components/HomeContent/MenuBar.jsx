import { CardHeader, CardTitle } from 'components/ui/card';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'components/ui/menubar';
import { SideBarItem } from 'components/ui/sidebarComponent';
import { FaBell, FaFlipboard, FaSearch, FaShareSquare, FaUser } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { PiDotOutlineFill } from 'react-icons/pi';

function MenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <CardHeader className="flex items-center mx-4">
          <FaFlipboard className="text-border mx-1" />
          TASKHUB
        </CardHeader>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="w-auto ">
          WorkSpace
          <MenubarShortcut>
            <MdOutlineKeyboardArrowDown className="text-border ml-1" />
          </MenubarShortcut>
        </MenubarTrigger>
        <MenubarContent>
          <CardTitle className="text-border font-bold text-base">Current Work Space</CardTitle>
          <SideBarItem title="Board1" icon={<FaFlipboard />} />
          <MenubarSeparator />
          <CardTitle className="text-border font-bold text-base">Your Boards</CardTitle>
          <SideBarItem title="Board1" icon={<FaFlipboard />} />
          <SideBarItem title="Board2" icon={<FaFlipboard />} />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          Recent
          <MenubarShortcut>
            <MdOutlineKeyboardArrowDown className="text-border ml-1" />
          </MenubarShortcut>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <div className="w-2/3" />

      <MenubarMenu>
        <div className="flex items-center border border-white p-2 rounded-md mx-10">
          <FaSearch />
          <input
            type="search"
            placeholder="Search"
            className="mx-1 bg-transparent outline-none text-sm font-semibold"
          />
        </div>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <FaBell />
        </MenubarTrigger>
        <MenubarContent>
          <CardTitle className="text-border font-bold text-base">Notification</CardTitle>
          <MenubarSeparator />
          <MenubarItem inset>
            Notification 1<PiDotOutlineFill />
          </MenubarItem>
          <MenubarItem inset>
            Notification 2<PiDotOutlineFill />
          </MenubarItem>
          <MenubarItem inset>Notification 3</MenubarItem>
          <MenubarItem inset>Notification 4</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <FaUser />
        </MenubarTrigger>
        <MenubarContent>
          <CardTitle className="text-border font-bold text-base">Account</CardTitle>
          <MenubarItem>Switch account</MenubarItem>
          <MenubarItem>
            Manage account
            <FaShareSquare className="ml-12" />
          </MenubarItem>
          <MenubarSeparator />
          <CardTitle className="text-border font-bold text-base">Trello</CardTitle>
          <MenubarItem>Profile and visibility</MenubarItem>
          <MenubarItem>Activity</MenubarItem>
          <MenubarItem>Card</MenubarItem>
          <MenubarItem>Setting</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Theme</MenubarSubTrigger>
            <MenubarSubContent>
              <CardTitle className="text-border text-center">Choose Theme</CardTitle>
              <MenubarSeparator />
              <MenubarItem inset>Theme 1</MenubarItem>
              <MenubarItem inset>Theme 2</MenubarItem>
              <MenubarItem inset>Theme 3</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Help</MenubarItem>
          <MenubarItem>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default MenuBar;
