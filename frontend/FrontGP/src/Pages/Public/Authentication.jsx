import React, { Component } from "react";
import "../../assets/css/base.scss";
import logo from "../../assets/images/logopeque.png";
import Background from "../../assets/images/image-login.png";
import GoogleLogin from "react-google-login";
import axios from "axios";
import configuration from "../../Config/Config";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.BASE_URL = configuration.backendServer.url +":"+
                    configuration.backendServer.port;
  }

  handleLogin = (googleData) => {
    axios.post(this.BASE_URL+'/Pages/Admin/Authentication')
    .then((resp) => {
        console.log(resp);
    }).catch(err => {
        alert('Error en Usuario y/o Contraseña');
    });
    
  }

  render() {
    return (
      <div>
        <div className="container">
          <div
            className="container-image"
            style={{ backgroundImage: "url(" + Background + ")" }}
          ></div>
          <div className="small-container">
            <div className="div-formulario">
              <span>
                <img src={logo} />
              </span>
              <h2 className="title">Autenticación</h2>
              <form>
                <div>
                  <input
                    type="text"
                    id="usuario"
                    className="input-text"
                    required
                    placeholder="Nombre Usuario"
                  />
                  <input
                    type="password"
                    id="psw"
                    class="input-text"
                    required
                    placeholder="Contraseña"
                  />
                </div>
                
                <div>
                <Auth0Provider
                  domain="dev-bvz8tnrs.us.auth0.com"
                  clientId="WXCWbH5EptZ9D26wTACqBKsfQOfN5M7w"
                  redirectUri={window.location.origin}>
                </Auth0Provider>
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

