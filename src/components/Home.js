import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Sustainability from './Sustainability'; // Importa el componente Sustainability
import Contact from './Contact';
import PiePagina from './PiePagina'; // Importa el componente PiePagina

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Sustainability />
      <Contact />
      <PiePagina /> {/* Añade el componente PiePagina aquí */}
    </>
  );
}

export default Home;
