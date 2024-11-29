import React, { useEffect, useState } from 'react';
import '../sytles/Header.css';

function Header() {
  const images = [
    '../assets/imagenes/mercadoAntiguo/mercadoA1.jpg',
    '../assets/imagenes/mercadoAntiguo/mercadoA2.jpg',
    '../assets/imagenes/mercadoAntiguo/mercadoA3.jpg'
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
        <a href="#" className="logo">Logo</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Historia</a></li>
          <li><a href="#services">Puestos</a></li>
          <li><a href="#sustainability">Sostenibilidad</a></li> {/* Corregido aquí */}
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <a href="#booking" className="cta-button">Posible boton delivery</a>
      </nav>
      <div className="hero">
        <h1 className="hero-title"></h1>
        {/* <p className="hero-subtitle">Mercat Sant Joan</p> */}
      </div>
    </header>
  );
}

export default Header;
