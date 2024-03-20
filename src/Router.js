import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'viewpage/Login';
import Register from 'viewpage/Register';
import Home from './viewpage/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
