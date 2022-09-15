import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import './components/estilos.css';
import Final from './components/Final';
import "./components/css/bootstrap.css";
import "./components/css/bootstrap.min.css";
import "./components/css/bootstrap-grid.css";
import "./components/css/bootstrap-grid.css";
import "./components/css/bootstrap-grid.min.css";
import "./components/css/bootstrap-reboot.css";
import "./components/css/bootstrap-reboot.min.css";
import Nosotros from './pages/Nosotros';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
