import React from 'react';
import Slider from 'react-slick'; // Importar Slider de react-slick
import '../styles/Services.css';

// Importar imágenes
import IconoCarniceria from '../assets/imagenes/Logos/Icono_Carniceria.svg';
import IconoPanaderia from '../assets/imagenes/Logos/Icono_Panaderia.svg';
import IconoFruteria from '../assets/imagenes/Logos/Icono_Fruteria.svg';
import IconoHerboristeria from '../assets/imagenes/Logos/Icono_Herboristeria.svg';
import IconoPescado from '../assets/imagenes/Logos/Icono_Pescado.svg';
import IconoMercado from '../assets/imagenes/Logos/Icono_Logo_MercatSantJoan_1@300x.png';

function Services() {
  // Configuración para react-slick
  const settings = {
    dots: false, // No mostrar puntos de navegación
    infinite: true, // Infinito desplazamiento circular
    speed: 500, // Velocidad de cambio
    slidesToShow: 3, // Cuántos elementos mostrar a la vez
    slidesToScroll: 1, // Cuántos elementos desplazar a la vez
    nextArrow: <SampleNextArrow />, // Componente personalizado para la flecha siguiente
    prevArrow: <SamplePrevArrow />, // Componente personalizado para la flecha previa
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros Puestos</h2>
        <p className="services-description">
          Descubre nuestros excepcionales puestos dedicados a ofrecerte los mejores productos y atención.
        </p>
        <Slider {...settings}>
          {[ /* Lista de servicios como antes */
            { image: IconoCarniceria, title: 'Carnicería' },
            { image: IconoPanaderia, title: 'Panadería' },
            { image: IconoFruteria, title: 'Frutería' },
            { image: IconoHerboristeria, title: 'Herboristería' },
            { image: IconoPescado, title: 'Pescadería' },
            { image: IconoMercado, title: 'Ultramarinos' },
            { image: IconoMercado, title: 'Cafetería' }
          ].map((service, index) => (
            <div className="service-item" key={index}>
              <div className="image-container">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

// Componentes para las flechas personalizadas
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}

export default Services;
