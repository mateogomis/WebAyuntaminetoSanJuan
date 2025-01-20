import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';  // Importamos useLocation para obtener la ruta actual
import '../styles/Header.css';
import LogoPrincipal from '../assets/imagenes/Logos/LogoPrincipal.png'; 
import logoAyuC from '../assets/imagenes/Logos/logoAyuC.png';

const images = [
  '/mercadoNuevo/mercadoN1.jpg',
  '/mercadoNuevo/mercadoN2.jpg',
  '/mercadoNuevo/mercadoN3.jpg',
  '/mercadoNuevo/mercadoN4.jpg'
];

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();  // Usamos useLocation para obtener la ruta actual

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Verificar si estamos en una de las rutas específicas para mostrar el menú
  const showMenu = location.pathname === '/mercado-nuevo' || location.pathname === '/mercado-antiguo' || location.pathname === '/mercado-provisional';

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <nav className="navbar">
        <div className="navbar-background"></div>
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={LogoPrincipal} alt="Logo Principal" className="logo-image" />
          </a>
          <a href="#home" className="logo">
            <img src={logoAyuC} alt="logoAyuC" className="logo-image" />
          </a>
        </div>
        {showMenu && (
          <ul className="nav-links">
            <li><a href="/mercado-nuevo">Mercado Nuevo</a></li>
            <li><a href="/mercado-antiguo">Mercado Antiguo</a></li>
            <li><a href="/mercado-provisional">Mercado Provisional</a></li>
          </ul>
        )}
        {!showMenu && (
          <ul className="nav-links">
            <li><a href="#about">Historia</a></li>
            <li><a href="#services">Puestos</a></li>
            <li><a href="#sustainability">Sostenibilidad</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;