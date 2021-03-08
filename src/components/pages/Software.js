import React from 'react';
import './Nosotros.css';

class Software extends React.Component{
    render(){
        return(
            <>
                <div className='Contenedor_Nosotros'>
                    <div className='contenedor_nosotros_hero'>
                        <img className='nosotros_header' src='/img/desarrollo-header.jpg' alt='nuupnpm' />
                        <p>Herramientas personalizadas</p>
                        <h1>Desarrollo de Software</h1>
                        <p>Contamos con toda la experiencia y el personal para hacer de tus ideas una herramienta de alta eficiencia</p>
                    </div>
                    <div className='contenedor_equipo'>
                        <div className='seccion1'>
                            <div className='grupo_texto caja_svmd'>
                                <h1>Desarrollo de Software</h1>
                                <p>Realizamos proyectos de desarrollo e integración de software a medida, desarrollos en telecomunicaciones (soluciones VOIP para carriers y todo tipo de empresas) backend, frontend, aplicaciones móviles, sitios web, tiendas en línea, entre otros.

 

                                Dimensionamos
                                Planeamos
                                Ejecutamos con eficiencia</p>
                            </div>
                            <img className='img_svmd' src='/img/desarrollo-contenedor.png' alt='Desarrollo' />
                        </div>
                    </div>
                    <div className='seccion3'>
                        <div>
                        <i className="fas fa-check"></i>
                            <h3>Optimizamos los recursos</h3>
                            <p>Dimensionamos tu proyecto para hacer una estimación correcta de los recursos y tiempo de desarrollo teniendo en cuenta tus reglas de negocio.</p>
                        </div>
                        <div>
                        <i className="fas fa-users"></i>
                            <h3>Calidad y eficiencia</h3>
                            <p>Contamos con personal altamente capacitado y especializado en el área, todo esto con la finalidad de hacer crecer su negocio con herramientas de la más alta calidad.</p>
                        </div>
                        <div>
                        <i className="fas fa-list-ul"></i>
                            <h3>Metódicos y organizados</h3>
                            <p>Utilizamos metodologías de desarrollo ágiles para administrar el ciclo de vida del desarrollo.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Software;