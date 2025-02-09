import React from 'react';
import SingUpPaje from '../pajes/SingUpPaje/SingUpPaje.tsx';
import LoginPaje from '../pajes/LoginPaje/LoginPaje.tsx';
import MainPaje from '../pajes/MainPaje/MainPaje.tsx';
import Paje404 from '../pajes/Paje404/Paje404.tsx';
import AddWishPaje from '../pajes/AddWishPaje/AddWishPaje.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from '../widgetes/head.tsx';
import WishsPaje from '../pajes/WishsPaje/WishsPaje.tsx';
import ProfilePaje from '../pajes/ProfilePaje/ProfilePaje.tsx';
import ReservPaje from '../pajes/ReservPaje/ReservPaje.tsx';
import ChangePage from '../pajes/ChangePaje/ChangePaje.tsx';

function App() 
{
  return (
    <div>
      <Head />
      <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Paje404 />} />
          <Route path="/eror" element={<Paje404 />} />
          <Route path="/singup" element={<SingUpPaje />} />
          <Route path="/login" element={<LoginPaje />} />
          <Route path="/" element={<MainPaje />} />
          <Route path="/add" element={<AddWishPaje />} />
          <Route path="/wishs/:id" element={<WishsPaje />} />
          <Route path="/reserv/:id" element={<ReservPaje />} />
          <Route path="/profile/:id" element={<ProfilePaje />} />
          <Route path="/change/:id" element={<ChangePage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;