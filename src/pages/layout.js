import React, { useState, useEffect } from 'react';
import innerlogo from './GIS360_logo.png' ; 
import './layout.css';
import { BrowserRouter as Router, Route, Routes, NavLink, HashRouter } from "react-router-dom";
import { Outlet} from "react-router-dom";


function Layout() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading the line first
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (

      <div className="App">
        <header className="App-header">

          <div className="titulo">
            <p>
              SOLUCIONES SIG | ARQUITECTURA | URBANISMO
            </p>
          </div>
          <div className='barraizq'>
            <img src={innerlogo} className="App-inlogo" alt="inlogo" />        
            <div className="line-with-points">
            <div className={`line ${loaded ? 'loaded' : ''}`}></div>
            <ul className="points">
              <li><NavLink to="/nosotros">SOBRE NOSOTROS</NavLink></li>
              <li><NavLink to="/gis">SOLUCIONES GIS</NavLink></li>
              <li><NavLink to="/techs">TECNOLOGIAS UTILIZADAS</NavLink></li>
              <li><NavLink to="/arquitectura">ARQUITECTURA Y URBANISMO</NavLink></li>
              <li><NavLink to="/contacto">CONTACTO</NavLink></li>
            </ul>
          </div>
          </div>
          <div className="content">
              <Outlet />
          </div>
        </header>
      </div>

  );
}

export default Layout;
