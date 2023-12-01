import logo from './Opcion sin patitas_.png';
import React, { useState, useEffect } from 'react';
import './home.css';
import Roman from './roman.jpg'


function Home() {
  return (
      <div className="App">
              <img src={Roman} className="Roman" alt="logo" />
              <img src={logo} className="App-logo" alt="logo" />
      </div>
  );
}

export default Home;