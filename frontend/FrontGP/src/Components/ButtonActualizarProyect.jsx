import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/base.scss";

class ButtonActualizarProyect extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Actualizarproyecto" type="submit" className="button-submit">
          Actualizar Proyecto
        </Link>
      </div>
    );
  }
}

export default ButtonActualizarProyect;