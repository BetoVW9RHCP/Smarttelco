import React from 'react';
import './Nosotros.css';

class Nuup extends React.Component{
    render(){
        return(
            <>
                <div className='Contenedor_Nosotros'>
                    <div className='contenedor_nosotros_hero'>
                        <img className='nosotros_header' src='/img/nuup-hero.jpg' alt='nuupnpm' />
                        <p>Comunicación mas eficiente</p>
                        <h1>NuUp.Me</h1>
                        <p>Herramienta PBX con increíbles funcionalidades para su empresa</p>
                    </div>
                    <div className='contenedor_equipo'>
                        <div className='seccion1'>
                            <div className='grupo_texto caja_svmd'>
                                <h1>Nuup.me</h1>
                                <p>Es una plataforma de comunicación para telefonía analógica, digital e IP, que busca dar de manera intuitiva y fácil funcionalidades de grandes soluciones PBX, ampliando sus características sin llegar a tener los enormes costos que estas generan.</p>
                            </div>
                            <img className='img_svmd' src='/img/svmd-contenedor.png' alt='svmd' />
                        </div>
                    </div>
                    <div className='seccion3'>
                        <div>
                        <i className="fas fa-phone"></i>
                            <h3>Buzones de correo de voz</h3>
                            <p>Controla todas las llamadas que vayan a tu buzon desde un mismo lugar</p>
                        </div>
                        <div>
                            <i className="fas fa-chart-line"></i>
                            <h3>Detalle de llamadas</h3>
                            <p>Obtén la mayor cantidad de información posible en cada llamada</p>
                        </div>
                        <div>
                            <i className="fas fa-microphone-alt"></i>
                            <h3>Contestador automático</h3>
                            <p>Personalizar la contestadora te tu linea coporativa nunca fue tan fácil</p>
                        </div>
                        <div>
                            <i className="fas fa-exchange-alt"></i>
                            <h3>Soporta líneas digitales</h3>
                            <p>Cuenta con soporte para líneas digitales E1 / T1 y tradicionales</p>
                        </div>

                        <br></br>
                        <div>
                            <i className="fas fa-th-large"></i>
                            <h3>Creación de extensiones</h3>
                            <p>Gestiona las extensiones de tu linea corporativa facilmente</p>
                        </div>
                        <div>
                            <i className="fas fa-eye"></i>
                            <h3>PIN de seguridad</h3>
                            <p>La seguridad es importante, configura tu PIN de acceso</p>
                        </div>
                        <div>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                            <h3>Cola llamadas</h3>
                            <p>Contamos con soporte para cola de llamadas y grupos de timbrado</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Nuup;