import React from 'react';
import './Footer.css'
import {Link} from  'react-router-dom';

function Footer (){
    return(
        <div className='footer-container'>
            <div className="contenedor-logo-texto">
              <img className='smart-blanca' src='/img/smarttelco-blanco.png' alt='svmd' />
              <p className="texto-foot"> Smart TELCO S. A. S. de C.V. surge en el año 2016 como una empresa joven, diversificada, Innovadora, pero sobre todo confiable, diseñamos la solucion a tu medida ya que percibimos las necesidades de cada cliente, para poder determinar las herramientas adecuadas para realizar sus proyectos, brindando siempre productos y servicios de alta calidad.</p>
            </div>
            <div className="contenedor-politicas">
                <ul className="politicas-items">
                    <li className='foot-item'>
                      <Link to='/' className='foot-links'>
                          Términos y condiciones
                      </Link>
                     </li>
                     <li className='foot-item'>
                     <Link to='/' className='foot-links'>
                         Políticas
                     </Link>
                    </li>
                    <li className='foot-item'>
                    <Link to='Contacto' className='foot-links'>
                        Contacto
                    </Link>
                   </li>
                </ul>
            </div>
            <div className="contenedor-redes">
                <h5>Siguenos en redes sociales</h5>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-linkedin"></i>
            
            </div>
        </div>
    )
}

export default Footer;