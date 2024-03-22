import MainBoardView from '../components/HomeContent/MainBoardView';
import MenuBar from '../components/HomeContent/MenuBar';
import SideBar from '../components/HomeContent/SideBar';

function Home() {
  return (
    <div className="h-screen bg-gradient-to-tr from-purple-500 via-pink-300 to-blue-400">
      <MenuBar />
      <div className="flex h-h_mainbar">
        <SideBar />
        <MainBoardView />
      </div>
    </div>
  );
}

export default Home;
