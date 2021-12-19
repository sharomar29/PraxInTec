import React from "react";
import "../assets/css/base.scss";
import { Link } from "react-router-dom";
//import ActualizarUsuario from "../Components/User/ActualizarUsuario";

class ButtonActualizarUser extends React.Component {
  render() {
    return (
      <div>
        <Link className="button-submit" to="/Actualizaruser">
          Actualizar Datos
        </Link>
      </div>
    );
  }
}

export default ButtonActualizarUser;