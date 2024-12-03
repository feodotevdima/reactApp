import React from 'react';
import SingUpPaje from '../../pajes/SingUpPaje/SingUpPaje.tsx';
import LoginPaje from '../../pajes/LoginPaje/LoginPaje.tsx';
import MainPaje from '../../pajes/MainPaje/MainPaje.tsx';
import Paje404 from '../../pajes/Paje404/Paje404.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from '../../widgetes/head.tsx';

function App() 
{
  //const json = GetUsers();
  return (
    <div>
      <Head />
      <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Paje404 />} />
          <Route path="/singup" element={<SingUpPaje />} />
          <Route path="/login" element={<LoginPaje />} />
          <Route path="/" element={<MainPaje />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
