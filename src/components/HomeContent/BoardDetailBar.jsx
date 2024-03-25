import { Menubar, MenubarTrigger } from '@radix-ui/react-menubar';
import { Button } from 'components/ui/button';
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
import { MenubarContent, MenubarMenu } from 'components/ui/menubar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'components/ui/select';
import { Separator } from 'components/ui/separator';
import { FaUserPlus } from 'react-icons/fa';
import { IoFilterSharp, IoReorderThree } from 'react-icons/io5';

function BoardDetailBar() {
  return (
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
        <MenubarTrigger>
          <Button
            variant="outline"
            className="text-white p-1 h-8 rounded-sm border-zinc-500 bg-transparent hover:border-white"
          >
            <FaUserPlus className="mr-2" />
            Member
          </Button>
        </MenubarTrigger>

        <MenubarMenu>
          <IoReorderThree className="mx-4" />
        </MenubarMenu>
      </MenubarMenu>
    </Menubar>
  );
}

export default BoardDetailBar;
