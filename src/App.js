import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto';
import Footer from './components/Footer';
import Svmd from './components/pages/Svmd';
import Nuup from './components/pages/Nuup';
import Soporte from './components/pages/Soporte';
import Software from './components/pages/Software';
import Mms from './components/pages/Mms';
import Blaster from './components/pages/Blaster';
/*import Nav2 from './components/Nav2';
/* import NavItem from './components/Nav2Item' */

function App() {
  return (
    <>
      <Router>
        <Navbar /> 

      {/*  <Nav2 /> */}



        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/Contacto' component={Contacto} />
          <Route path='/svmd' component={Svmd} />
          <Route path='/nuup' component={Nuup} />
          <Route path='/soporte' component={Soporte} />
          <Route path='/software' component={Software} />
          <Route path='/mms' component={Mms} />
          <Route path='/blaster' component={Blaster} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;