import React from 'react';
import { Link } from 'react-router-dom';
import '../sytles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <p className="about-description">
          En <span className="highlight">Nuestra Empresa</span>, nos esforzamos por alcanzar la excelencia en todo lo que hacemos. Nuestro equipo de profesionales dedicados está comprometido a ofrecer servicios de alta calidad que generen un impacto duradero. Creemos en la innovación, la colaboración y los resultados.
        </p>
        <div className="about-stats">
          <Link to="/mercado-antiguo" className="stat-item">
            <h3>Mercado Antiguo</h3>
            <p>Años de experiencia</p>
          </Link>
          <Link to="/mercado-nuevo" className="stat-item">
            <h3>Mercado Nuevo</h3>
            <p>Clientes satisfechos</p>
          </Link>
          <Link to="/mercado-provisional" className="stat-item">
            <h3>Mercado Provisional</h3>
            <p>Proyectos entregados</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
