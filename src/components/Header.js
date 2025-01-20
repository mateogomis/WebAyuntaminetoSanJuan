import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import LogoPrincipal from '../assets/imagenes/Logos/LogoPrincipal.png'; 
import logoAyuC from '../assets/imagenes/Logos/logoAyuC.png';

// Importación de imágenes correctamente
import mercadoN1 from '../assets/imagenes/mercadoNuevo/mercadoN1.jpg';
import mercadoN2 from '../assets/imagenes/mercadoNuevo/mercadoN2.jpg';
import mercadoN3 from '../assets/imagenes/mercadoNuevo/mercadoN3.jpg';
import mercadoN4 from '../assets/imagenes/mercadoNuevo/mercadoN4.jpg';

const images = [mercadoN1, mercadoN2, mercadoN3, mercadoN4];

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <nav className="navbar">
        <div className="navbar-background"></div>
        <div className="logo-container">
          <a href="#home" className="logo">
            <img src={LogoPrincipal} alt="Logo Principal" className="logo-image" />
          </a>
          <a href="#home" className="logo">
            <img src={logoAyuC} alt="logoAyuC" className="logo-image" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">Historia</a></li>
          <li><a href="#services">Puestos</a></li>
          <li><a href="#sustainability">Sostenibilidad</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="hero">
        {/* <h1 className="hero-title">Mercado Sant Joan</h1> */}
      </div>
    </header>
  );
}

export default Header;