import React, { Component } from "react";
import axios from "axios";
import "../../assets/css/base.scss";
import configuration from "../../Config/Config";

class ActualizarUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.BASE_URL = configuration.backendServer.url +":"+
        configuration.backendServer.port + "/users/"
        this.state = {
        tipoUsuario : this.props.userToBeUpdated.tipoUsuario,
        numDocumento : this.props.userToBeUpdated.numDocumento,
        name : this.props.userToBeUpdated.name,
        lastname : this.props.userToBeUpdated.lastname,
        correo : this.props.userToBeUpdated.correo,
        estado : this.props.userToBeUpdated.estado,
        rol : this.props.userToBeUpdated.rol,
          
            
        }
        this.onTipoUsuarioChange= this.onTipoUsuarioChange.bind(this);
        this.onNumDocumentoChange = this.onNumDocumentoChange.bind(this);
        this.onNameChange= this.onNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onCorreoChange = this.onCorreoChange.bind(this);
        this.onEstadoChange =this.onEstadoChange.bind(this);
        this.onRolChange = this.onRolChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        
 }


    onTipoUsuarioChange(event) {
        this.setState({ tipoUsuario: event.target.value });
    }

    onNumDocumentoChange(event) {
        this.setState({ numDocumento: event.target.value });
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onLastNameChange(event) {
        this.setState({ lastname: event.target.value });
    }

    onCorreoChange(event) {
        this.setState({ correo: event.target.value });
    }
   
    onEstadoChange(event) {
        this.setState({ estado: event.target.value });
    }
    onRolChange(event) {
        this.setState({ rol: event.target.value });
    }

    handleUpdate(){
        let url = this.BASE_URL + this.props.userToBeUpdated._id
        let data = {

  "tipoUsuario": this.state.tipoUsuario,
  "numDocumento": this.state.numDocumento,
  "name":this.state.name,
  "lastname": this.state.lastname,
  "correo": this.state.correo,
  "estado": this.state.estado,     
  "rol": this.state.rol,
        }
        axios.put(url, data)
        .then((resp) => {
            alert  ("usuario actualizado correctamente ") 
            //this.props.handleUpdateUser(true);            
        }).catch(err => {
            alert('Error al actualizar usuario');
        });
    }

    handleCancel(){
        this.props.handleUpdateUser(false);
    }

    render() {        
        return (
            <div>
                    
                <h2>Actualizar Usuario</h2>

                <div id="campos" className="container-filters">
                    <form action="get" id="formulario" name="fornulario">
                        <legend> <u>Información Usuario</u> </legend>
                        <hr/> <br/>

                        <div class="">
    
                            <label for="IDusuario">ID Usuario</label>
                            <input 
                            type="text" 
                            id="IDUsuario" 
                            readonly  disabled 
                            value={this.state._id}/>
                
                            <label for="tipo">Tipo de Usuario</label>
                            <select 
                                name="tipoUsuario" 
                                id="tipo"
                                value={this.state.tipoUsuario}
                                onChange={this.onTipoUsuarioChange}>

                                <option value="">--selección--</option>
                                <option value="Administrador" name="Administrador">Administrador</option>
                                <option value="Lider" name="Lider">Lider</option>
                                <option value="Estudiante" name="Estudiante">Empresa</option>
                            </select><br/><br/>
    
    
                            <div>
                
                                <label for="numeroDocumento">Numero Identidad</label>
                                <input 
                                type="text" 
                                required 
                                id="numeroDocumento" 
                                placeholder="Numero de Documento"
                                value={this.state.numDocumento}
                                onChange={this.onNumDocumentoChange}/>
                                <br/>
                            </div>
                            <br/><br/>
    
                        </div>
    
                        <div id="datospersonal">
                            <legend><u>Datos Personales</u></legend>
                            <hr/> <br/>
    
                            <label htmlfor="nombre">Nombres</label> 
                            <input 
                            type="text" 
                            required 
                            id="nombre"              
                            placeholder=" Ingrese Nombre"                
                            value={this.state.name}
                            onChange={this.onNameChange}/>

                            <label htmlfor="apellidos">Apellidos</label>
                            <input 
                            type="text" 
                            required 
                            id="apellidos"                 
                            placeholder="Ingrese Apellidos"
                            value={this.state.lastname}
                            onChange={this.onLastNameChange}/>
                        </div>
    
    
                        <div id="Contactos">
                            <legend><u>Datos De Contacto</u></legend>
                            <hr/><br/><br/>
               
                            <label htmlfor="correo">Correo</label>
                            <input 
                                type="email" 
                                id="correo"                 
                                placeholder="example@abc.com"
                                value={this.state.correo}
                                onChange={this.onCorreoChange}/>

                        </div> <br/>
    
                            <div id="estado" class="">
                                <legend><u>Estado Usuario</u></legend>
                                <hr/>
    
                                <ul>
                                    <li>
                                        <div id="div-rolusuario">
                                            <label htmlfor="rolUsuario">Tipo Usuario:</label>
    
                                            <select
                                                name="rol" 
                                                id="rolUsuario" 
                                                required
                                                value={this.state.rol}
                                                onChange={this.onRolChange}>

                                                <option value="">--selección--</option>
                                                <option value="administrador">Administrador</option>
                                                <option value="Lider">Lider</option>
                                                <option value="Estudiante">Estudiante</option>
                                            </select>
    
                                        </div>
                                    </li>

                                    <li>
                                        <input
                                            type="radio" 
                                            id="actualizado" 
                                            name="estado" 
                                            value="Actualizado" 
                                            checked
                                            value={this.state.estado}
                                            onChange={this.onEstadoChange}/>

                                        <label htmlfor="actualizado">Autorizado</label>
                                    </li>

                                    <li>
                                        <input 
                                        type="radio" 
                                        id="noAutorizado" 
                                        name="estado" 
                                        value={this.state.estado}
                                        onChange={this.onEstadoChange}/>
                                        <label htmlfor="noAutorizado">No Autorizado</label>
                                    </li>

                                    <li>
                                        <input 
                                        type="radio" 
                                        id="pendiente" 
                                        name="estado" 
                                        value={this.state.estado}
                                        onChange={this.onEstadoChange}/>
                                        <label htmlfor="pendiente">Pendiente</label>
                                    </li>
    
                                </ul>
                            </div>
    
                    </form>
    
                </div>

                    <div class="botones">
                        <button  type="reset" className="small-button-submit">Cancelar</button>
                        <button  type="button" className="small-button-submit" onClick={() => this.handleUpdate()}>Actualizar</button>
                    </div>

                
            </div>
        )
    }
}

export default ActualizarUsuario;