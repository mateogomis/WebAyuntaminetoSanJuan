import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Contiene el Footer
import Home from './components/Home'; // Página principal que incluye Header, About, Services y Contact
import MercadoAntiguo from './components/MercadoAntiguo';
import MercadoNuevo from './components/MercadoNuevo';
import MercadoProvisional from './components/MercadoProvisional';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Página principal con todos los componentes */}
          <Route path="/" element={<Home />} />

          {/* Rutas específicas */}
          <Route path="/mercado-antiguo" element={<MercadoAntiguo />} />
          <Route path="/mercado-nuevo" element={<MercadoNuevo />} />
          <Route path="/mercado-provisional" element={<MercadoProvisional />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
