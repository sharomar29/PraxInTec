import React from "react";
import "../assets/css/menupage.css";
import "../assets/css/base.scss";
import logo from "../assets/images/logopeque.png";
import LogoSup from "../Components/LogoSupLogin";
import BienvenidaEstudiante from "../Components/BienvenidaEstudiante";
import ButtonListProyect from "../Components/ButtonListProyect";
import ButtonInscribir from "../Components/ButtonInscribir";
import ButtonCrearAvance from "../Components/ButtonCrearAvance";
import ButtonActualizarAvance from "../Components/ButtonActualizarAvance";

class Estudiante extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BienvenidaEstudiante />
        </div>
        <div className="segmento"></div>
            <div className="central">
                <span>
                    <img src={logo} />
                </span>
                <h2 className="title">Menú de Acceso</h2>
                <div>
                    <div>
                        <ButtonListProyect />
                    </div>
                    <div>
                        <ButtonInscribir />
                    </div>
                    <div>
                        <ButtonCrearAvance />
                    </div>
                    <div>
                        <ButtonActualizarAvance />
                    </div>
                 </div>
            </div>
            <div className="segmento"></div>
      </div>
    );
  }
}

export default Estudiante;