import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import inicio from './pages/inicio';
import Login from './pages/login';
import ListaCliente from './pages/ListaCliente';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<inicio />}  />
        <Route path='/Login' element={<Login />} />
        <Route path='/Login/:id' element={<Login />} />
        <Route path='/ListaCliente' element={<ListaCliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);