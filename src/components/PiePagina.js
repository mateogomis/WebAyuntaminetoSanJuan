import React from 'react';
import '../styles/PiePagina.css'; // Crea este archivo para los estilos
import LogoPrincipal from '../assets/imagenes/Logos/LogoPrincipal.png';
import LogoNegativo from '../assets/imagenes/Logos/LogoNegativo.png';
import logoAyto from '../assets/imagenes/Logos/logoAyto.png';

function PiePagina() {
  // Función para desplazarse al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <h3></h3>
          <img src={LogoPrincipal} alt="Logo 1" className="logo" />
          <img src={LogoNegativo} alt="Logo 2" className="logo" />
          <img src={logoAyto} alt="Logo 3" className="logo tamano-grande" />
        </div>
      </div>
      <div className="pie-bottom">
        <p>&copy; {new Date().getFullYear()} Mercado Municipal de Sant Joan. Todos los derechos reservados.</p>
      </div>

      {/* Botón de flecha para ir al inicio */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
          <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
        </svg>
      </button>
    </footer>
  );
}

export default PiePagina;
