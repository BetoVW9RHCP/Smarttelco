import React, { Component } from 'react';
import {Link} from  'react-router-dom'; 

class Nav2 extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <ul>
        <li>Nosotros</li>

        <li onClick={this.showMenu}>
          Productos y servicios
        </li>

        <li>contacto</li>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu2"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <li>SVMD</li>
                <li>Nuup</li>
                <li>Soporte Técnico en Telecomunicaciones</li>
                <li>Desarrollo de Software</li>
                <li>Mensajería Masiva MMS</li>
                <li>Blaster</li>
              </div>
            )
            : (
              null
            )
        }
      </ul>
    );
  }
}

export default Nav2;