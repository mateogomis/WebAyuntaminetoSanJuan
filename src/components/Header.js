import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import LogoPrincipal from '../assets/imagenes/Logos/LogoPrincipal.png'; // Ruta del logo

function Header() {
  const images = [
    '../assets/imagenes/mercadoAntiguo/mercadoA1.jpg',
    '../assets/imagenes/mercadoAntiguo/mercadoA2.jpg',
    '../assets/imagenes/mercadoAntiguo/mercadoA3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <nav className="navbar">
        <div className="navbar-background"></div> {/* Fondo translúcido detrás del navbar */}
        <a href="#home" className="logo">
          <img src={LogoPrincipal} alt="Logo Principal" className="logo-image"  href="#home" />
        </a>
        <ul className="nav-links">
          {/* <li><a href="#home">Home</a></li> */}
          <li><a href="#about">Historia</a></li>
          <li><a href="#services">Puestos</a></li>
          <li><a href="#sustainability">Sostenibilidad</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        {/* <a href="#booking" className="cta-button">Posible botón delivery</a> */}
      </nav>
      <div className="hero">
        <h1 className="hero-title"></h1>
        {/* <p className="hero-subtitle">Mercat Sant Joan</p> */}
      </div>
    </header>
  );
}

export default Header;
