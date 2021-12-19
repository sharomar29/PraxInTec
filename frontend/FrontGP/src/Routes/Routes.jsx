import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PublicLayout from './Layout/PublicLayout';
import CrearUsuario from './Components/User/CrearUsuario';
import Inicio from'./Pages/Public/Inicio';
import Login from'./Pages/Admin/Authentication';

import AdminLayout from './Layout/AdminLayout';
import FiltroUsuarios from './Components/User/FiltroUsuarios';
import ListarUsuarios from './Components/User/ListarUsuarios';
import ActualizarUsuario from './Components/User/ActualizarUsuario';
import ListarProyects from './Components/Proyect/ListarProyects';
import Roles from '../Pages/Admin/Roles';

import LiderLayout from './Layout/LiderLayout';
import Lider from './Pages/Admin/Lider';
import CrearProyect from './Components/Proyect/CrearProyect';
import ActualizarProyect from './Components/Proyect/ActualizarProyect';
import CrearObservacion from './Components/Proyect/CrearObservacion';

import EstudentLayout from './Layout/EstudentLayout';
import Estudiante from './Pages/Admin/Estudiante';
import CrearInscripcion from './Components/Inscripciones/CrearInscripcion';
import CrearAvance from './Components/Avances/CrearAvance';
import ActualizarAvance from './Components/Avance/ActualizarAvance';

const Routes = () => {
    return (

<div className="App">
    <BrowserRouter>
        <Router>
            <Switch>
                <Route path={['/admin/Roles', '/admin/Administrador', ]}>
                <AdminLayout>
                    <Switch>
                        
                        <Route path="/Administrador" component={Administrador}></Route>
                        
                        
                        <Route path="/Roles"> <Roles/> </Route>
                    </Switch>
                </AdminLayout>
                </Route>

                <Route path={['/admin/lider']}>
                <LiderLayout>
                    <Switch>
                        <Route path="/Lider" component={Lider}></Route>
                     </Switch>
                </LiderLayout>
                </Route>

                <Route path={['/admin/Estudiante']}>
                <EstudentLayout>
                    <Switch>
                        <Route path="/Estudiante" component={Estudiante}></Route>  
                    </Switch>
                </EstudentLayout>
                </Route>

                <Route path={['/Public/Authentication','/User/CrearUsuario', '/Public/Inicio']}>
                <PublicLayout>
                    <Switch>
                        <Route exact path="/admin/Authentication" component={Login}></Route>
                        <Route path="/CrearUsuario" component={CrearUsuario}></Route>
                        <Route path='/Public/Inicio'> <Inicio/> </Route>
                    </Switch>
                </PublicLayout>
                </Route>

            </Switch>
        </Router>
    </ BrowserRouter>
</div>
);

}

export default Routes
