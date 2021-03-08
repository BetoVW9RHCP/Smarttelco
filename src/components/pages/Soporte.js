import React from 'react';
import './Nosotros.css';

class Soporte extends React.Component{
    render(){
        return(
            <>
                <div className='Contenedor_Nosotros'>
                    <div className='contenedor_nosotros_hero'>
                        <img className='nosotros_header' src='/img/soporte-inicio.jpg' alt='nuupnpm' />
                        <p>Telecomunicaciones</p>
                        <h1>Soporte IT</h1>
                        <p>Contamos con ingeneros capacitados en las diferentes áreas</p>
                    </div>
                    <div className='contenedor_equipo'>
                        <div className='seccion1'>
                            <div className='grupo_texto caja_svmd'>
                                <h1>Soporte IT</h1>
                                <p>Resolvemos sus problemas de IT. Estamos en la capacidad de brindar servicios de instalación cableado estructurado, administración de su centro de datos, resolución de problemas de voz incluyendo IPPBX hasta plataformas de Carrier.</p>
                                <br></br>
                                <p>Contamos con ingenieros capacitados en las diferentes áreas de la informática y las telecomunicaciones brindando soporte de primera mano con las tecnologías de vanguardia en el mercado.</p>
                            </div>
                            <img className='img_svmd' src='/img/soporte-contenedor.png' alt='soporte' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Soporte;