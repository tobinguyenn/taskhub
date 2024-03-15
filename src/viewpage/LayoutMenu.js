import { Link, Outlet } from 'react-router-dom';
import { Menubar, MenubarMenu, MenubarTrigger } from 'components/ui/menubar';

function LayoutMenu() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/">Home</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link to="/contact">Contact</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link to="/testpage">Testpage</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Outlet />
    </>
  );
}

export default LayoutMenu;
