import React from 'react';
import '../styles/Services.css';

// Importar imágenes
import IconoCarniceria from '../assets/imagenes/Logos/Icono_Carniceria.svg';
import IconoPanaderia from '../assets/imagenes/Logos/Icono_Panaderia.svg';
import IconoFruteria from '../assets/imagenes/Logos/Icono_Fruteria.svg';
import IconoHerboristeria from '../assets/imagenes/Logos/Icono_Herboristeria.svg';
import IconoPescado from '../assets/imagenes/Logos/Icono_Pescado.svg';
import IconoMercado from '../assets/imagenes/Logos/Icono_Logo_MercatSantJoan_1@300x.png';

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
            { image: IconoCarniceria, title: 'Carnicería', details: 'Matías Garrido, José J. Oriente, Jaime Iborra “Calsa”.' },
            { image: IconoPanaderia, title: 'Panadería', details: 'Loli.' },
            { image: IconoFruteria, title: 'Frutería', details: 'Corbi.' },
            { image: IconoHerboristeria, title: 'Herboristería', details: 'El Herbolario de Mario.' },
            { image: IconoPescado, title: 'Pescadería', details: 'Giner, Pescados Baeza.' },
            { image: IconoMercado, title: 'Ultramarinos', details: 'Mariló.' },
            { image: IconoMercado, title: 'Cafetería', details: 'Cantina Mercado.' }
          ].map((service, index) => (
            <div className="service-item" key={index}>
              {/* Imagen encima del texto */}
              <div className="image-container">
                <img src={service.image} alt={service.title} />
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
            COMPRA AQUÍ
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
