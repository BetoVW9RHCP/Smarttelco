import React from 'react';
import './Cards.css';
import Carditem from './Carditem'


function Cards() {
    return (
      <div className='cards'>
        <h1>Que es</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>

          <ul className='cards__items'>
          <Carditem
            src='img/nuup-inicio.jpg'
            label='Nuup.Me'
            text='Es una plataforma de comunicación para telefonía analógica, digital e IP, que busca dar de manera intuitiva y fácil grandes funcionalidades sin llegar a tener los enormes costos que estas generan.'
            
            path='/services'
          />
          <Carditem
            src='img/smartvmd-inicio.jpg'
            label='SmartVMD'
            text='Ahorre hasta un 60% garantizado en la factura de teléfono de su empresa'
            
            path='/services'
          />
         </ul>
        {/*<ul className='cards__items'>
          <Carditem
            src='images/img-3.jpg'
            text='lorem ipsum'
            label='lorem ipsum'
            path='/services'
          />
          <Carditem
            src='images/img-4.jpg'
            text='lorem ipsum'
            label='lorem ipsum'
            path='/products'
          />
          <Carditem
            src='images/img-8.jpg'
            text='lorem ipsum'
            label='lorem ipsum'
            path='/sign-up'
          />
        </ul>
    */}

          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;