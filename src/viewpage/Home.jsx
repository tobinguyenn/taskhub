import MainBoardView from './HomeContent/MainBoardView';
import MenuBar from './HomeContent/MenuBar';
import SideBar from './HomeContent/SideBar';

function Home() {
  return (
    <div className="h-screen">
      <MenuBar />
      <div className="flex h-h_mainbar">
        <SideBar />
        <MainBoardView />
      </div>
    </div>
  );
}

export default Home;
