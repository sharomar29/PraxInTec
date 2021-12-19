import React from "react";
import "../assets/css/menupage.css";
import "../assets/css/base.scss";
import logo from "../assets/images/logopeque.png";
import LogoSup from "../Components/LogoSupLogin";
import BienvenidaLider from "../Components/BienvenidaLider";
import ButtonCrearProyecto from "../Components/ButtonCrearProyect";
import ButtonListProyect from "../Components/ButtonListProyect";
import ButtonActualizarProyect from "../Components/ButtonActualizarProyect";
import ButtonListAvance from "../Components/ButtonListAvance";
import ButtonObservacion from "../Components/ButtonObservacion";
import ButtonListEstudent from "../Components/ButtonListEstudent";

class Lider extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BienvenidaLider />
        </div>
        <div className="segmento"></div>
            <div className="central">
                <span>
                    <img src={logo} />
                </span>
                <h2 className="title">Menú de Acceso</h2>
                <div>
                    <div>
                        <ButtonCrearProyect />
                    </div>
                    <div>
                        <ButtonListProyect />
                    </div>
                    <div>
                        <ButtonActualizarProyect />
                    </div>
                    <div>
                        <ButtonListAvance />
                    </div>
                    <div>
                        <ButtonObservacion />
                    </div>
                    <div>
                        <ButtonListEstudent />
                    </div>
                    
                 </div>
            </div>
            <div className="segmento"></div>
      </div>
    );
  }
}

export default Lider;