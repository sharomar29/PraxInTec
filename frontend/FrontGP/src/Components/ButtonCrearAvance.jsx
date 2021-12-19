import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/base.scss";

class ButtonCrearAvance extends React.Component {
  render() {
    return (
      <div>
        <Link to="/crearAvance" type="submit" className="button-submit">
          Registrar Avance
        </Link>
      </div>
    );
  }
}

export default ButtonCrearAvance;