import React from "react";
import "../assets/css/menupage.css";
import "../assets/css/base.scss";
import logo from "../assets/images/logopeque.png";
import LogoSup from "../components/logoSupLogin";
import BienvenidaAdmin from "../components/bienvenidaAdmin";
import ButtonRegUser from "../components/buttonRegUser";
import ButtonListUser from "../components/buttonListUser";
import ButtonCrearProduct from "../components/buttonCrearProduct";
import ButtonListProduct from "../components/buttonListProduct";

class Administrador extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BienvenidaAdmin />
        </div>
        <div className="segmento"></div>
        <div className="central">
          <span>
            <img src={logo} />
          </span>
          <h2 className="title">Menú de Acceso</h2>
          <div>
            <div>
              <ButtonRegUser />
            </div>
            <div>
              <ButtonListUser />
            </div>
            <div>
              <ButtonCrearProyect />
            </div>
            <div>
              <ButtonListProyect />
            </div>
          </div>
        </div>
        <div className="segmento"></div>
      </div>
    );
  }
}

export default Administrador;
