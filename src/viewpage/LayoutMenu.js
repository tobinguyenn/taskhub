import { Link, Outlet } from 'react-router-dom';
import { IoSettings } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

function LayoutMenu() {
  return (
    <>
      <nav className="flex justify-between px-20 py-5 items-center bg-white shadow-lg">
        <h1 className="text-xl text-gray-800 font-bold">TaskHub</h1>
        <div className="flex items-center">
          <div className="flex items-center border border-white p-2 mr-3 hover:border-black hover:rounded-xl ">
            <IoIosSearch />
            <input
              className="ml-2 outline-none bg-transparent font-"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-gray-700">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-gray-700">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-semibold text-gray-700">
              <Link to="/testpage">Testpage</Link>
            </li>
            <li>
              <IoSettings />
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default LayoutMenu;
