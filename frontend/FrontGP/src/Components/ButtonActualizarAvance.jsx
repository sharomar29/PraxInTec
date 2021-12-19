import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/base.scss";

class ButtonActualizarAvance extends React.Component {
  render() {
    return (
      <div>
        <Link to="/ActualizarAvance" type="submit" className="button-submit">
          Actualizar Avance
        </Link>
      </div>
    );
  }
}

export default ButtonActualizarAvance;