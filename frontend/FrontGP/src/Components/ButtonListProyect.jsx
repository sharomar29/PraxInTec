import React from "react";
import "../assets/css/base.scss";
import { Link } from "react-router-dom";

class ButtonListProyect extends React.Component {
  render() {
    return (
      <div>
        <Link to="/listadoproyectos" type="submit" className="button-submit">
          Listar Proyectos
        </Link>
      </div>
    );
  }
}

export default ButtonListProyect;