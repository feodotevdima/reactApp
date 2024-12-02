import React from 'react';

import SingUpPaje from '../../pajes/SingUpPaje/SingUpPaje.tsx';
import LoginPaje from '../../pajes/LoginPaje/LoginPaje.tsx';
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
          <Route path="/singup" element={<SingUpPaje />} />
          <Route path="/login" element={<LoginPaje />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
