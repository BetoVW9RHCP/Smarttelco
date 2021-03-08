import React from 'react';
import './Nosotros.css';

class Mms extends React.Component{
    render(){
        return(
            <>
                <div className='Contenedor_Nosotros'>
                    <div className='contenedor_nosotros_hero'>
                        <img className='nosotros_header' src='/img/mms-header.jpg' alt='nuupnpm' />
                        <p>Campañas efectivas</p>
                        <h1>Mensajeria Masiva MMS</h1>
                        <p>Administra todas tus campañas desde la nube</p>
                    </div>
                    <div className='contenedor_equipo'>
                        <div className='seccion1'>
                            <div className='grupo_texto caja_svmd'>
                                <h1>Mensajería Masiva SMS</h1>
                                <p>Es una plataforma en la nube que de manera sencilla envía campañas SMS reduciendo los costos de comunicación, automatizando el envío y garantizando la entrega de SMS personalizados.</p>
                                <br />
                                <p>Con este servicio podrán integrar los SMS a una campaña de VENTAS, POLÍTICA, FIDELIDAD, MARKETING, TRANSACCIONAL, COBRANZA entre otras formas de comunicación con clientes y prospectos, haciendo uso de números largos y números cortos de 5 dígitos.</p>
                            </div>
                            <video className='video-contenedor' src="/videos/mms-video.mp4" autoPlay loop muted />
                        </div>
                    </div>
                    <div className='seccion3'>
                        <div>
                        <i className="fas fa-tools"></i>
                            <h3>Disponibilidad</h3>
                            <p>Accede de manera sencilla y programa campañas en minutos con alta eficiencia</p>
                        </div>
                        <div>
                        <i className="fas fa-puzzle-piece"></i>
                            <h3>Flexibilidad</h3>
                            <p>Puedes usarla para cualquier tipo de campaña y proyectarla de manera versátil</p>
                        </div>
                        <div>
                        <i className="fas fa-plus"></i>
                            <h3>Ahorros</h3>
                            <p>Campañas más efectivas y a una fracción del costo en campañas de otro tipo</p>
                        </div>
                        <div>
                            <h3>Seguridad</h3>
                            <i className="fas fa-lock"></i>
                            <p>Sistema de alta finelidad y estabilidad, con acceso desde cualquier equipo con acceso a internet</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Mms;