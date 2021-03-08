import React from 'react';
import '../pages/Nosotros.css';

class Nosotros extends React.Component{
    render(){

        
        return(

         <div className="Contenedor_Nosotros">
         <div className='contenedor_nosotros_hero'>
            <img className="nosotros_header" src='/img/nosotros-header.jpg' alt="nosotros"/>
            <h1>Nuestro Propósito</h1>
            <p>Crear valor con la tecnología, para todos los que formamos SmartTelco: clientes, accionistas y nuestra gente, ya que todos somos el mismo equipo</p>
         </div>
            <div className="contenedor_equipo">
                <div className="seccion1">
                    <div className="grupo_texto">
                        <h1>¡Somos el mismo equipo!</h1>
                        <p>Smart TELCO S. A. S. de C.V. surge en el año 2016 como una empresa joven, diversificada, Innovadora y proactiva. Diseñamos la solucion a tu medida ya que percibimos las necesidades de cada cliente, a fin de determinar las herramientas adecuadas para realizar sus proyectos, brindando siempre productos y servicios de alta calidad.
                        </p>
                    </div>
                    <div className="contenedor_listado">
                        <ul>
                        <li>
                            <h3><i className="fas fa-star"></i>Satisfacción</h3>
                            <p>Asesoramos, aportamos ideas y resolvemos las problemáticas presentes, con una gran variedad de soluciones, apuntando a la satisfacción de nuestros clientes.
                            </p>
                        </li>
                        <li>
                            <h3><i className="far fa-check-square"></i>
                            Resultados</h3>
                            <p>Nos gusta lo que hacemos y ponemos lo mejor en nuestra tarea, para que obtengan y perciban un impacto positivo en la rentabilidad y funcionamiento de su negocio.
                            </p>
                        </li>
                        <li>
                            <h3><i className="fas fa-cog"></i>Versatilidad</h3>
                            <p>Cada cliente es un reto, una nueva experiencia, debido a que cada empresa es diferente y personalizada.
                            </p>
                        </li>
                        <li>
                            <h3><i className="fas fa-lightbulb"></i>Creatividad</h3>
                            <p>Apostamos al trabajo en grupo y a integrar las ideas de quienes solicitan nuestros servicios.
                            </p>
                        </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="seccion2">
                    <div>
                        <h3>MISIÓN</h3>
                        <p>Fortalecer el desarrollo de nuestros clientes de manera eficaz, satisfaciendo sus necesidades empresariales y aumentando su productividad, por medio de servicios y desarrollos innovadores en IT.
                        </p>
                    </div>
                    <div>
                        <h3>Vision</h3>
                        <p>Ser una empresa líder en la prestación de servicios de tecnología en el mercado internacional con soluciones y desarrollos innovadores.
                        </p>
                    </div>
                    <div>
                        <h3>Valores</h3>
                        <ul>
                        <li>Excelencia</li>
                        <li>Compromiso</li>
                        <li>Calidad</li>
                        <li>Integridad</li>
                        <li>Responsabilidad</li>
                        <li>Equipo</li>
                        <li>Pasión</li>
                        </ul>
                    </div>
                </div>
         </div>
            
        )
    }
}

export default Nosotros;

