import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/MercadoAntiguo.css';
import '../styles/Header.css';
import PiePagina from '../components/PiePagina';
import Header from '../components/Header';  // Importamos el componente Header


// Imágenes
import mercadoA1 from '../assets/imagenes/mercadoAntiguo/mercadoA1.jpg';
import mercadoA2 from '../assets/imagenes/mercadoAntiguo/mercadoA2.jpg';
import mercadoA3 from '../assets/imagenes/mercadoAntiguo/mercadoA3.jpg';
import mercadoA4 from '../assets/imagenes/mercadoAntiguo/mercadoA4.jpg';
import mercadoA5 from '../assets/imagenes/mercadoAntiguo/mercadoA5.jpg';
import mercadoA6 from '../assets/imagenes/mercadoAntiguo/mercadoA6.jpg';
import mercadoA7 from '../assets/imagenes/mercadoAntiguo/mercadoA7.jpg';
import mercadoA8 from '../assets/imagenes/mercadoAntiguo/mercadoA8.jpg';
import mercadoA9 from '../assets/imagenes/mercadoAntiguo/mercadoA9.jpg';
import mercadoA10 from '../assets/imagenes/mercadoAntiguo/mercadoA10.jpg';

// Videos
import video1 from '../assets/videos/mercadoAntiguo/1A.mp4';
import video2 from '../assets/videos/mercadoAntiguo/2A.mp4';
import video3 from '../assets/videos/mercadoAntiguo/3A.mp4';
import video4 from '../assets/videos/mercadoAntiguo/4A.mp4';
import video5 from '../assets/videos/mercadoAntiguo/5A.mp4';
import video6 from '../assets/videos/mercadoAntiguo/6A.mp4';
import video7 from '../assets/videos/mercadoAntiguo/7A.mp4';
import video8 from '../assets/videos/mercadoAntiguo/8A.mp4';
import video9 from '../assets/videos/mercadoAntiguo/9A.mp4';
import video10 from '../assets/videos/mercadoAntiguo/10A.mp4';
import video11 from '../assets/videos/mercadoAntiguo/11A.mp4';
import video12 from '../assets/videos/mercadoAntiguo/12A.mp4';
import video13 from '../assets/videos/mercadoAntiguo/13A.mp4';
import video14 from '../assets/videos/mercadoAntiguo/14A.mp4';
import video15 from '../assets/videos/mercadoAntiguo/15A.mp4';

function MercadoSantJoan() {
  const images = [
    mercadoA1,
    mercadoA2,
    mercadoA3,
    mercadoA4,
    mercadoA5,
    mercadoA6,
    mercadoA7,
    mercadoA8,
    mercadoA9,
    mercadoA10,
  ];

  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
    video12,
    video13,
    video14,
    video15,
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <Header /> {/* Aquí renderizamos el Header */}
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: 'bold' }}>Nuestra historia</h2>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          Explora la evolución del mercado con videos exclusivos que destacan su diseño, construcción y ambiente.
        </p>
      </div>

      {/* Carrusel de imágenes */}
      <section id="carousel-images">
        <Slider {...carouselSettings} className="carousel">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Imagen ${index + 1}`} className="carousel-media" />
            </div>
          ))}
        </Slider>
      </section>

      {/* Carrusel de videos */}
      <section id="carousel-videos">
        <Slider {...carouselSettings} className="carousel">
          {videos.map((video, index) => (
            <div key={index} className="carousel-item">
              <video src={video} controls className="carousel-media">
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          ))}
        </Slider>
      </section>

      {/* Sección adicional debajo del carrusel */}
      <section id="additional-content" style={{ backgroundColor: '#ffffff', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>
            ¿Por qué visitar el Mercado Sant Joan?
          </h3>
          <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
          El origen del Mercado Municipal de Sant Joan d’Alacant se remonta a principios del siglo XX, en un periodo en el que la necesidad de un espacio dedicado al intercambio de productos frescos y de primera necesidad se hizo evidente en Sant Joan d’Alacant. 
          Antes de la construcción del mercado, las transacciones comerciales se realizaban en la calle, en pequeños puestos y ferias. 
          Por lo que la construcción del mercado permitió centralizar y organizar este comercio, proporcionando a los habitantes un lugar fijo y cubierto para realizar sus compras.  
          </p>
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contacto</h2>
          <div className="contact-info">
            <h3>Horario</h3>
            <p>De lunes a jueves: 7:00 - 14:00</p>
            <p>De viernes a sábado: 6:30 - 14:30</p>
            <p>Domingos: Cerrado</p>
          </div>
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>Teléfono: <a href="tel:+34965656367">(+34) 965 656 367</a></p>
            <p>Email: <a href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a></p>
          </div>
        </div>
       {/* Mapa de Google Maps */}
       <div className="map-container">
          <h3>Ubicación</h3>
          <iframe
            title="Mapa Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.086127547817!2d-0.43511138432176126!3d38.39790397965461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62369e2fa7d8fd%3A0x7d1dcce0fd7c9e74!2sCarrer%20del%20Mercat%2C%2026%2C%2003550%20Sant%20Joan%20d&#39;Alacant%2C%20Alicante!5e0!3m2!1ses!2ses!4v1692907311821!5m2!1ses!2ses"
            width="50%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <PiePagina />
    </>
  );
}

export default MercadoSantJoan;