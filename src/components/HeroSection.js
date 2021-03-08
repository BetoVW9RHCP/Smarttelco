import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className='hero-container'>
            <video src="/videos/desarrollo-inicio.mp4" autoPlay loop muted />
            <h1>Siempre en contacto</h1>
      <p>¿Que esperas para tener los mejores servicios para tu Contact Center?</p> 

            <div className="hero-btns">

    {/*   <Button className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Empezar
    </Button> */}
                
        <Button className="btns" 
                buttonStyle='btn-primary'
                buttonSize='btn--large'>
                Saber más <i className="fas fa-mobile-alt"/>
                </Button>

            </div>
        </div>
    )
}

export default HeroSection