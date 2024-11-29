import React from 'react';
import '../sytles/Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        {/* Título de la sección */}
        <h2>Puestos</h2>
        <p className="services-description">
          Descubre nuestros excepcionales puestos dedicados a ofrecerte los mejores productos y atención.
        </p>

        {/* Lista de servicios */}
        <div className="service-list">
          {/* Elementos individuales */}
          {[
            { icon: 'fa-lightbulb', title: 'Carnicería', details: 'Matías Garrido, José J. Oriente, Jaime Iborra “Calsa”.' },
            { icon: 'fa-code', title: 'Panadería', details: 'Loli.' },
            { icon: 'fa-chart-pie', title: 'Frutería', details: 'Corbi.' },
            { icon: 'fa-leaf', title: 'Herboristería', details: 'El Herbolario de Mario.' },
            { icon: 'fa-fish', title: 'Pescadería', details: 'Giner, Pescados Baeza.' },
            { icon: 'fa-store', title: 'Ultramarinos', details: 'Mariló.' },
            { icon: 'fa-coffee', title: 'Cafetería', details: 'Cantina Mercado.' }
          ].map((service, index) => (
            <div className="service-item" key={index}>
              <div className="icon-container">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.details}</p>
            </div>
          ))}
        </div>

        {/* Botón para ir al marketplace */}
        <div className="button-container">
          <a href="/marketplace" className="marketplace-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
            Para llevar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
