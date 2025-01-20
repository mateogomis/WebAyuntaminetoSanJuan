import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/MercadoAntiguo.css';
import '../styles/Header.css';
import PiePagina from '../components/PiePagina';
import Header from '../components/Header';  // Importamos el componente Header


// Videos
import video1 from '../assets/videos/mercadoNuevo/1.mov';
import video2 from '../assets/videos/mercadoNuevo/2.mov';
import video3 from '../assets/videos/mercadoNuevo/3.mov';
import video4 from '../assets/videos/mercadoNuevo/4.mov';
import video5 from '../assets/videos/mercadoNuevo/5.mov';
import video6 from '../assets/videos/mercadoNuevo/6.mov';
import video7 from '../assets/videos/mercadoNuevo/7.mov';
import video8 from '../assets/videos/mercadoNuevo/8.mov';
import video9 from '../assets/videos/mercadoNuevo/9.mov';
import video10 from '../assets/videos/mercadoNuevo/10.mov';
import video11 from '../assets/videos/mercadoNuevo/11.mov';
import video12 from '../assets/videos/mercadoNuevo/12.mov';
import video13 from '../assets/videos/mercadoNuevo/13.mov';
import video14 from '../assets/videos/mercadoNuevo/14.mov';
import video15 from '../assets/videos/mercadoNuevo/15.mov';
import video16 from '../assets/videos/mercadoNuevo/16.mov';
import video17 from '../assets/videos/mercadoNuevo/17.mov';
import video18 from '../assets/videos/mercadoNuevo/18.mov';
import video19 from '../assets/videos/mercadoNuevo/19.mov';
import video20 from '../assets/videos/mercadoNuevo/20.mov';
import video21 from '../assets/videos/mercadoNuevo/21.mov';
import video22 from '../assets/videos/mercadoNuevo/22.mov';

const videos = [
  video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,
  video11, video12, video13, video14, video15, video16, video17, video18, video19,
  video20, video21, video22
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

function MercadoSantJoan() {
  return (
    <>
      <Header /> {/* Aquí renderizamos el Header */}
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2.5em', fontWeight: 'bold' }}>Nuestro nuevo mercado</h2>
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          Explora la evolución del mercado con videos exclusivos que destacan su diseño, construcción y ambiente.
        </p>
      </div>

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
            El Mercado Sant Joan no solo es un espacio de compras, sino también un centro cultural y social.
            Su diseño sostenible, accesibilidad y ambiente vibrante lo convierten en un lugar único para
            explorar, disfrutar y aprender sobre la comunidad local.
          </p>
        </div>
      </section>

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
      </section>

      <PiePagina />
    </>
  );
}

export default MercadoSantJoan;