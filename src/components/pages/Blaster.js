import React from 'react';
import './Nosotros.css';

class Blaster extends React.Component{
    render(){
        return(
            <>
                <div className='Contenedor_Nosotros'>
                    <div className='contenedor_nosotros_hero'>
                        <img className='nosotros_header' src='/img/blaster-hero.jpg' alt='Blaster' />
                        <p>Mensajes pregrabados</p>
                        <h1>Blaster</h1>
                        <p>Interfaz potente y sencilla para que admistres tus campañas</p>
                    </div>
                    <div className='contenedor_equipo'>
                        <div className='seccion1'>
                            <div className='grupo_texto caja_svmd'>
                                <h1>Blaster</h1>
                                <p>​Es una plataforma de envió masivo de campañas telefónicas, la cual cuenta con una interfaz web de usuario que facilita la creación, administración y programación de campañas, además de la visualización de estadísticas en tiempo real.</p>
                            </div>
                            <img className='img_svmd' src='/img/blaster-contenedor.png' alt='blaster' />
                        </div>
                    </div>
                    <div className='seccion3'>
                        <div>
                            <i className="fas fa-random"></i>
                            <h3>Conectividad y marcación predictiva</h3>
                            <p>Aumenta la conectividad en la marcación predictiva y mejora los resultados</p>
                        </div>
                        <div>
                            <i className="fas fa-chart-line"></i>
                            <h3>Ahorra costos de telefonía</h3>
                            <p>No más cargos por teléfonia, evita costos y aprovecha mejor esos recursos</p>
                        </div>
                        <div>
                            <i className="fas fa-user"></i>
                            <h3>Ahorro de recursos de nómina</h3>
                            <p>No mas personal para una labor que puedes automatizar, házlo mas inteligente</p>
                        </div>
                        <div>
                            <i className="fas fa-bolt"></i>
                            <h3>Estabilidad y rendimiento</h3>
                            <p>Opera la plataforma desde sus centros de mantenimiento garantizando estabilidad</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Blaster;