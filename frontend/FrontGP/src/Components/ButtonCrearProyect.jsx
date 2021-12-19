import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/base.scss";

class ButtonCrearProyect extends React.Component {
  render() {
    return (
      <div>
        <Link to="/crearproyecto" type="submit" className="button-submit">
          Crear Proyecto
        </Link>
      </div>
    );
  }
}

export default ButtonCrearProyect;