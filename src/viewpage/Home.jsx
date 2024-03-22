import MainBoardView from './HomeContent/MainBoardView';
import MenuBar from './HomeContent/MenuBar';
import SideBar from './HomeContent/SideBar';

function Home() {
  return (
    <div className="h-screen bg-gradient-to-bl from-purple-400 via-pink-300 to-blue-200">
      <MenuBar />
      <div className="flex h-h_mainbar">
        <SideBar />
        <MainBoardView />
      </div>
    </div>
  );
}

export default Home;
