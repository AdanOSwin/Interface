import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Landing from './Landing';
import './LandingNavBar.css';


class LandingNavBar extends Component{
    render(){
        return(
            <div>
            <ul>
                <li style={{textDecoration: 'none', float: 'left'}} ><NavLink exact={true} activeClassName="isActive" to="/" src={Landing} alt="landing page">Inicio</NavLink></li>
                <li style={{textDecoration: 'none', float: 'right'}} ><NavLink to="/signin" alt="Iniciar sesion">Iniciar sesion</NavLink></li>
                <li style={{textDecoration: 'none', float: 'right'}} ><NavLink to="/signup" alt="registrate">Registrate</NavLink></li>
                <li style={{textDecoration: 'none', float: 'right'}} ><NavLink to="/info" alt="about">Acerca de</NavLink></li>
            </ul>
            </div>
        );
    }
}

export default LandingNavBar;