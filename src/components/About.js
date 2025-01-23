import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css'; // Asegúrate de que el archivo CSS sea correcto
import mercadoA2 from '../assets/imagenes/mercadoAntiguo/mercadoA2.jpg';
import banner1 from '../assets/imagenes/Logos/fondos_europeos.png';
import banner2 from '../assets/imagenes/Logos/descarga.png';
import banner3 from '../assets/imagenes/Logos/plan_recuperación.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        
        {/* Banner de imágenes */}
        <div className="about-banner">
          <img src={banner1} alt="Banner 1" className="banner-image" />
          <img src={banner2} alt="Fondos Europeos" className="banner-image fondos-europeos" />
          <img src={banner3} alt="Banner 3" className="banner-image" />
        </div>

        <h2>Historia</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              <span className="highlight">El Mercado Municipal de Sant Joan d'Alacant</span>, inaugurado en 1968, ha sido un pilar fundamental en la vida comercial y social del municipio. Durante más de cinco décadas, ha ofrecido productos frescos y de calidad, convirtiéndose en un punto de encuentro para vecinos y visitantes.
            </p>
            <p className="about-description">
              Actualmente, el mercado se encuentra en proceso de reforma, adaptándose a las necesidades contemporáneas sin perder su esencia tradicional.
            </p>
          </div>
          <div className="about-image-container">
            <img src={mercadoA2} alt="Sobre Nosotros" className="about-image" />
          </div>
        </div>

        <div className="about-stats">
          <Link to="/mercado-antiguo" className="stat-item">
            <h3>Mercado Antiguo</h3>
            <p>Click para más información</p>
          </Link>
          <Link to="/mercado-nuevo" className="stat-item">
            <h3>Mercado Nuevo</h3>
            <p>Click para más información</p>
          </Link>
          <Link to="/mercado-provisional" className="stat-item">
            <h3>Mercado Provisional</h3>
            <p>Click para más información</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;