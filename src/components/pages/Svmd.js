import React from 'react';
import './Nosotros.css';

class Svmd extends React.Component{
    render(){
        return(
            <>
                <div className='Contenedor_Nosotros'>
                    <div className='contenedor_nosotros_hero'>
                        <img className='nosotros_header' src='/img/voz.jpg' alt='voz' />
                        <h1>SmartVMD</h1>
                        <p>Gestiona de manera eficaz las comunicaciones de tu empresa. Ahorra y automatiza fácilmente</p>
                    </div>
                    <div className='contenedor_equipo'>
                        <div className='seccion1'>
                            <div className='grupo_texto caja_svmd'>
                                <h1>Smart VMD</h1>
                                <p>Es un producto dirigido al ámbito de call centers que consta de un potente algoritmo, capaz de identificar patrones de audio previo al desvío de buzón, que le permitirá gestionar de manera eficaz las comunicaciones para su empresa con un ahorro de hasta el 60% garantizado en la factura de teléfono, evitando cobros excedentes por llamadas de duración corta contestadas por servicios de buzón en redes VoIP de grandes operadores telefónicos.</p>
                            </div>
                            <img className='img_svmd' src='/img/svmd-contenedor.png' alt='svmd' />
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

export default Svmd;