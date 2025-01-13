import React from 'react';
import '../styles/Sustainability.css'; // Asegúrate de crear este archivo para los estilos
import sustainabilityImage from '../assets/imagenes/Sostenibilidad.jpg'; // Ruta de la imagen

function Sustainability() {
  return (
    <section id="sustainability" className="sustainability">
      <div className="container">
        <div className="sustainability-content">
          <div className="text-container">
            <h2>Sostenibilidad</h2>
            <p>
              Comprar en nuestro mercado es elegir un modelo de compra consciente.
            </p>
            <p>
              En el <strong>Mercado Municipal de Sant Joan</strong> estamos
              comprometidos con el comercio local, reduciendo el uso de plásticos y
              promoviendo productos frescos, de temporada y de proximidad (KM0).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Sustainability;
