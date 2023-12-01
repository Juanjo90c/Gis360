import React, { useState, useEffect }  from 'react';
import Lucas from './lucas.png';
import Tania from './tania.png';
import Lucia from './lucia.png';
import Juanjo from './juanjo.png';
import './nosotros.css';

function Nosotros() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading the line first
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
      <div className = "nosotrosdiv">
        <div className = "fototexto">
          <div className={`line2 ${loaded ? 'loaded' : ''}`}></div>
          <div className = "fotos">
            <img src={Lucas} className="foto"/>
            <img src={Tania} className="foto"/>
            <img src={Lucia} className="foto"/>
            <img src={Juanjo} className="foto"/>
          </div>
            <div className = "textos">
              <div className='descripcion'>
                <h3>LEONCZYK, LUCAS</h3>
                <p>
                  Arquitecto<br></br>
                  Urbanista<br></br>
                  Especialista en SIG<br></br>
                </p>
              </div>
              <div className='descripcion'>
                <h3>MALDONADO, TANIA</h3>
                <p>
                  Arquitecta<br></br>
                  Urbanista<br></br>
                  Especialista en SIG<br></br>
                </p>
              </div>
              <div className='descripcion'>
                <h3>MISIASZEK, LUCIA</h3>
                <p>
                  Arquitecta<br></br>
                  Urbanista<br></br>
                  Especialista en SIG<br></br>
                </p>
              </div>
              <div className='descripcion'>
                <h3>COCHIA, JUAN JOSE</h3>
                <p>
                  Software Developer<br></br>
                </p>
              </div>  
          </div>
        </div>
        <div className = "aboutus">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Somos un equipo de trabajo con experiencia de
            abordaje en múltiples campos disciplinarios, 
            ofrecemos <b>soluciones integrales</b> a través de la construcción 
            y análisis de datos, la automatización de
            procesos y la identificación de necesidades y
            demandas específicas de cada usuario, empresa
            u organización con el fin de diseñar respuestas a
            medida.
            Uno de nuestros principales servicios es la capacitación de 
            equipos de trabajo para el manejo de
            los SIG, ya que entendemos que <b>la informacion
            debe ser una fuente de datos publica e independiente.</b>
          </p>
        </div>
      </div>
  );
}

export default Nosotros;