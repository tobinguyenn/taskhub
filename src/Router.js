import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutMenu from './viewpage/LayoutMenu';
import Home from './viewpage/Home';
import Contact from './viewpage/Contact';
import Testpage from './viewpage/Testpage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMenu />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testpage" element={<Testpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
