import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/base.scss";

class ButtonObservacion extends React.Component {
  render() {
    return (
      <div>
        <Link to="/crearObservacion" type="submit" className="button-submit">
          Registrar Observacion
        </Link>
      </div>
    );
  }
}

export default ButtonObservacion;