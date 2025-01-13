import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Título de la sección */}
        <h2>Contacto</h2>

        {/* Horario */}
        <div className="contact-info">
          <h3>Horario</h3>
          <p>De lunes a jueves: 7:00 - 14:00</p>
          <p>De viernes a sábado: 6:30 - 14:30</p>
          <p>Domingos: Cerrado</p>
        </div>

        {/* Información de contacto */}
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <p>Teléfono: <a href="tel:+34965656367">(+34) 965 656 367</a></p>
          <p>Email: <a href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</a></p>
        </div>

        {/* Mapa de Google Maps */}
        <div className="map-container">
          <h3>Ubicación</h3>
          <iframe
            title="Mapa Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.086127547817!2d-0.43511138432176126!3d38.39790397965461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62369e2fa7d8fd%3A0x7d1dcce0fd7c9e74!2sCarrer%20del%20Mercat%2C%2026%2C%2003550%20Sant%20Joan%20d&#39;Alacant%2C%20Alicante!5e0!3m2!1ses!2ses!4v1692907311821!5m2!1ses!2ses"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;