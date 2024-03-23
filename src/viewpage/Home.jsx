import MainBoardView from '../components/HomeContent/MainBoardView';
import MenuBar from '../components/HomeContent/MenuBar';
import SideBar from '../components/HomeContent/SideBar';

function Home() {
  return (
    <div className="h-screen bg-[linear-gradient(to_right_top,_#a349a7,_#9a55ae,_#9160b4,_#8969b8,_#8271ba)]">
      <MenuBar />
      <div className="flex h-h_mainbar">
        <SideBar />
        <MainBoardView />
      </div>
    </div>
  );
}

export default Home;
