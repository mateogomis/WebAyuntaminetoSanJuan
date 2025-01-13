import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faMicrochip,
  faUniversalAccess,
  faRecycle,
  faCouch,
  faUser,
  faSmile,
  faTools, // Nuevo icono para Adaptado
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/FooterStatic.css";

const FooterStatic = () => {
  return (
    <div className="footer-static">
      <ul className="footer-icons">
        <li>
          <FontAwesomeIcon icon={faLeaf} className="footer-icon" />
          <span>Sostenible</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMicrochip} className="footer-icon" />
          <span>Tecnológico</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUniversalAccess} className="footer-icon" />
          <span>Accesible</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRecycle} className="footer-icon" />
          <span>Ecológico</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCouch} className="footer-icon" />
          <span>Cómodo</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="footer-icon" />
          <span>Humano</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSmile} className="footer-icon" />
          <span>Amable</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faTools} className="footer-icon" />
          <span>Adaptado</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHandshake} className="footer-icon" />
          <span>Cercano</span>
        </li>
      </ul>
    </div>
  );
};

export default FooterStatic;
