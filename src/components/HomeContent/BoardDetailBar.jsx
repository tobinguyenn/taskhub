import { Menubar, MenubarTrigger } from '@radix-ui/react-menubar';
import { Button } from 'components/ui/button';
import { CardHeader } from 'components/ui/card';
import { Checkbox } from 'components/ui/checkbox';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/ui/dialog';
import { Input } from 'components/ui/input';
import { MemberItem } from 'components/ui/memberItem';
import { MenubarContent, MenubarMenu } from 'components/ui/menubar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'components/ui/select';
import { Separator } from 'components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';
import { cn } from 'lib/utils';
import { useState } from 'react';
import { FaCopy, FaUser, FaUserPlus } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { IoCloseSharp, IoFilterSharp, IoReorderThree } from 'react-icons/io5';
import { MdAttachEmail } from 'react-icons/md';

function BoardDetailBar() {
  const [showActionBar, setShowActionBar] = useState(true);

  const handleToggleActionBar = () => {
    setShowActionBar(!showActionBar);
  };
  const classNameActionBar = cn(
    'right-0 flex flex-col justify-center items-center float-right bg-stone-900 duration-500 text-gray-100 rounded-tl rounded-b',
    showActionBar ? 'w-0' : 'w-1/4',
    'overflow-hidden'
  );
  return (
    <di>
      <Menubar className="bg-transparent/50 flex h-h_menubar items-center">
        <MenubarMenu>
          <div className="text-lg font-bold mr-auto mx-5">Board 1</div>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Button
              variant="outline"
              className="text-white p-1 h-8 rounded-sm border-zinc-500 bg-transparent hover:border-white"
            >
              <IoFilterSharp className="mr-2" />
              Filters
            </Button>
          </MenubarTrigger>
          <MenubarContent className="p-0">
            <Command className="text-black">
              <CommandInput placeholder="Choose a filter" />
              <CommandList className="text-black max-h-fit">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Member">
                  <CommandItem>
                    <Checkbox label="No one" />
                  </CommandItem>
                  <CommandItem>
                    <Checkbox label="Me" />
                  </CommandItem>
                  <CommandItem>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Member" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All Member">All Member</SelectItem>
                        <SelectItem value="Member1">Member 1</SelectItem>
                        <SelectItem value="Member2">Member 2</SelectItem>
                        <SelectItem value="Member3">Member 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Due Date">
                  <CommandItem>
                    <Checkbox label="No date" />
                  </CommandItem>
                  <CommandItem>
                    <Checkbox label="Due date" />
                  </CommandItem>
                  <CommandItem>
                    <Checkbox label="Due date in next day" />
                  </CommandItem>
                  <CommandItem>
                    <Checkbox label="Due date in next week" />
                  </CommandItem>
                  <CommandItem>
                    <Checkbox label="Due date in next month" />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </MenubarContent>
        </MenubarMenu>
        <Separator orientation="vertical" className="h-2/3 mx-3 bg-zinc-500" />
        <MenubarMenu>
          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                className="text-white p-1 h-8 rounded-sm border-zinc-500 bg-transparent hover:border-white"
              >
                <FaUserPlus className="mr-2" />
                Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share Board</DialogTitle>
                <DialogDescription>Anyone who has this link will be able to view this Board</DialogDescription>
                <div className="flex items-center space-x-2 w-full">
                  <Input icon={<FaLink />} defaultValue="https://linkdemo.com" className="w-5/6" readOnly />
                  <Button type="submit" className="w-1/6 rounded-sm">
                    <FaCopy className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <Input icon={<MdAttachEmail />} placeholder="Enter email or name" />
                <Select>
                  <SelectTrigger className="w-1/4">
                    <SelectValue placeholder="Member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Member">Member</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" variant="submit" className="w-1/5 rounded-md">
                  Invite
                </Button>
              </div>
              <div>
                <MemberItem avatar={<FaUser />} name="Do Thanh Vinh (you)" email="vinh@gmail.com" permision="Member" />
                <MemberItem avatar={<FaUser />} name="Nguyen Tuan Anh" email="anhnt@gmail.com" permision="Admin" />
              </div>
            </DialogContent>
          </Dialog>
        </MenubarMenu>
        <MenubarMenu>
          <button
            type="button"
            className={`w-20 h-full ml-5 rounded-tl flex justify-center duration-500 items-center ${showActionBar ? 'bg-transparent' : 'bg-stone-900'}`}
            onClick={handleToggleActionBar}
          >
            {showActionBar ? <IoReorderThree className="text-xl" /> : <IoCloseSharp className=" text-white text-xl" />}
          </button>
        </MenubarMenu>
      </Menubar>
      <div className={classNameActionBar}>
        <CardHeader>Menu</CardHeader>
        <Separator className="h-[0.5px] bg-zinc-400 w-11/12" />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full bg-transparent">
            <TabsTrigger value="account" className="rounded-sm">
              Log Activity
            </TabsTrigger>
            <TabsTrigger value="password">Labels and Tags</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </di>
  );
}
export default BoardDetailBar;
