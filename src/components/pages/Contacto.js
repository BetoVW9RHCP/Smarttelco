import React from 'react';

import './Contacto.css';

class Contacto extends React.Component{
    render(){
        return(
            <>
                <div className='Contenedor_Nosotros2'>
                    <div className='contenedor_nosotros_hero2'>
                        <img className='nosotros_header2' src='/img/contacto.jpg' alt='voz' />
                        <h1>Contacto</h1>
                        <p>Tu opninión nos interesa y nos pondremos en contacto contigo tan rápido como sea posible</p>
                    </div>
                    <div className='contenedor_equipo2'>
                        <div className='seccion12'>
                            <div className='grupo_texto2 caja_svmd2'>
                                <h1>Tu opinion nos interesa!</h1>
                                <p>Puedes revisar nuestros productos para encontrar toda nuestra información o puedes dejarnos tus datos y en breve nos pondremos en contascto contigo.</p>
                            </div>

                            <div className="contact-form">
                                <h5>Nombre Completo</h5>
                                <input className="nombre"></input>
                                <h5>Email</h5>
                                <input className="email"></input>
                                <h5>Número telefónico</h5>
                                <input className="telefono"></input>
                                <h5>Comentarios</h5>
                                <input className="comentarios"></input>
                            </div>
                        </div>
                    
                    </div>
                    <div className="contenedor-mapa">
                    <img className='img_map' src='/img/map.jpg' alt='svmd' />
                    <div className='seccion32'>
                   
                        <h1 className="telefonos">Llámanos</h1>
                        <div>
                        <img className='bandera' src='/img/mexico.png' alt='flag' />
                            <p>(+52) 01800 26 76278</p>
                        </div>
                        <div>
                        <img className='bandera' src='/img/colombia.png' alt='flag' />
                            <p>(+57) (1) 381 0661</p>
                        </div>
                        <div>
                        <img className='bandera' src='/img/peru.png' alt='flag' />
                            <p>(+51) (1) 641 9507</p>
                        </div>
                        <div>
                        <img className='bandera' src='/img/eua.png' alt='flag' />
                            <p>(+1) 650 457 0252</p>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contacto;