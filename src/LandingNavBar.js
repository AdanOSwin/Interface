import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Landing from './Landing';


class LandingNavBar extends Component{
    render(){
        return(
            <div>
            <span><NavLink exact={true} activeClassName="isActive" to="/" src={Landing} alt="landing page"></NavLink></span>
            <span><NavLink to="/signin" alt="Iniciar sesion">Iniciar sesion</NavLink></span>
            <span><NavLink to="/signup" alt="registrate">Registrate</NavLink></span>
            <span><NavLink to="/pwdforget" alt="olvido constraseña">Olvidaste contraseña</NavLink></span>
            <span><NavLink to="/info" alt="about">Acerca de</NavLink></span>
            </div>
        );
    }
}

export default LandingNavBar;