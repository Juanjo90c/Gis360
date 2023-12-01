import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './pages/layout'
import Home from './pages/home'
import Nosotros from './pages/nosotros'
import Gis from './pages/gis'
import Techs from './pages/techs'
import Arq from './pages/arquitectura'
import Contacto from './pages/contacto'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="gis" element={<Gis />} />
      <Route path="techs" element={<Techs />} />
      <Route path="arquitectura" element={<Arq />} />
      <Route path="contacto" element={<Contacto />} />
    </Route>
  </Routes>
</HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
