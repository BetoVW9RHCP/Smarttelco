import React, {useState} from 'react';
import {Link} from  'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
//import Dropdown from './Dropdown';//
import logo from '../logo-smart.png';

function Navbar(){
    


    const[click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);




    const showButton = () =>{
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);



    return(
        <>

        
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick=
                    {closeMobileMenu}>
                    <img  className='logotipo' src={logo} alt="logo"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                       
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='Nosotros' className='nav-links' onClick={closeMobileMenu}>
                                Nosotros
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='SVMD' className='nav-links' onClick={closeMobileMenu}>
                            SVMD
                        </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='Nuup' className='nav-links' onClick={closeMobileMenu}>
                        Nuup
                    </Link>
                </li>

                <li className='nav-item'>
                <Link to='Soporte' className='nav-links' onClick={closeMobileMenu}>
                    Soporte Técnico en Telecomunicaciones
                </Link>
            </li>
            <li className='nav-item'>
            <Link to='Software' className='nav-links' onClick={closeMobileMenu}>
               Desarrollo de Software
            </Link>
        </li>
        <li className='nav-item'>
        <Link to='Mms' className='nav-links' onClick={closeMobileMenu}>
            MMS
        </Link>
    </li>

    {/*  <li className='nav-item'>
    <Link to='Blaster' className='nav-links' onClick={closeMobileMenu}>
        Blaster
    </Link>
    </li> */}

                    <li className='nav-item'>
                        <Link to='Contacto' className='nav-links' onClick={closeMobileMenu}>
                            Contacto
                        </Link>
                    </li>


                </ul>
                {/*button && <Button buttonStyle='btn--outline'>Solicitar Paquetes</Button>    lleva otras llaves aparte*/} 
                </div>
            </nav>
        </>
    )
}

export default Navbar;