import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sytles/MercadoAntiguo.css';
import '../sytles/Header.css';

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
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <a href="#" className="logo">Logo</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/mercado-nuevo">Mercado Nuevo</a></li>
            <li><a href="/mercado-provisional">Mercado Provisional</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#booking" className="cta-button">Book Your Visit</a>
        </nav>
        <div className="hero">
          <h1 className="hero-title">Mercado Sant Joan</h1>
          <p className="hero-subtitle">Discover Elegance, Tradition, and Flavors</p>
        </div>
      </header>

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
    </>
  );
}

export default MercadoSantJoan;
