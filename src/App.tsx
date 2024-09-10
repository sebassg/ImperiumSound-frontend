import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Index from "./paginas/Index";
import InicioSesion from "./paginas/InicioSesion";
import Registro from "./paginas/Registro";
import Fondo from "./componetes/Fondo/Fondo";
import Servicios from "./paginas/servicios";
import Nosotros from "./paginas/Nosotros";
import Objetivos from "./paginas/Objetivos";
import Feedback from "./paginas/Feedback";
import Caracteristicas from "./paginas/Caracteristicas";

function App() {
  return (
    <>
    <Fondo/>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/objetivos" element={<Objetivos />} />
          <Route path="/contactanos" element={<Feedback />} />
          <Route path="/caracteristicas" element={<Caracteristicas/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
