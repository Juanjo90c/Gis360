import React from 'react';
import './contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';


function Contacto() {

    return (
        <div className="contactodiv">
          <p className="titulo_cont">Contacto</p>
          <ul className="lista">
            <li><FontAwesomeIcon icon={faWhatsapp} size="1x" /><a href="https://api.whatsapp.com/send?phone=543624375764&text=Hola" target="_blank">+54 9 3624375764</a></li>
            <li><FontAwesomeIcon icon={faWhatsapp} size="1x" /><a href="https://api.whatsapp.com/send?phone=543794391235&text=Hola" target="_blank">+54 9 3794391235</a></li>
            <li><FontAwesomeIcon icon={faEnvelope} size="1x" /><a href = "mailto: gis360consultoria@gmail.com">gis360consultoria@gmail.com</a></li>
            <li><FontAwesomeIcon icon={faMapMarker} size="1x"/>Argentina</li>
          </ul>
        </div>
  );
}

export default Contacto;