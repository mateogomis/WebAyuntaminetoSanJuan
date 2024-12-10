import React from 'react';
import '../sytles/PiePagina.css'; // Crea este archivo para los estilos
import LogoPrincipal from '../assets/imagenes/Logos/LogoPrincipal.png';
import LogoNegativo from '../assets/imagenes/Logos/LogoNegativo.png';

function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="pie-container">
        {/* Navegación */}
        <div className="pie-nav">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#about">Historia</a></li>
            <li><a href="#services">Puestos</a></li>
            <li><a href="#sustainability">Sostenibilidad</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="pie-social">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        {/* Información Legal */}
        <div className="pie-legal">
          <h3>Información Legal</h3>
          <ul>
            <li><a href="#privacy-policy">Política de Privacidad</a></li>
            <li><a href="#cookies-policy">Cookies</a></li>
          </ul>
        </div>

        {/* Logos */}
        <div className="pie-logos">
          <h3>Logos</h3>
          <img src={LogoPrincipal} alt="Logo 1" className="logo" />
          <img src={LogoNegativo} alt="Logo 2" className="logo" />
        </div>
      </div>
      <div className="pie-bottom">
        <p>&copy; {new Date().getFullYear()} Mercado Municipal de Sant Joan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default PiePagina;