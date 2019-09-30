import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import home from './casa_Home.svg';
import info from './info.svg';
import ajustes from './ajustes.svg';
import reportes from './reportar.svg';
import launch from './cohete_launch.svg';
import prioridad from './numerado_prioridad.svg';
import objetivo from './objetivo_3.svg';
import logs from './historial.svg';

//MI OKR
//directorio general
//CREAR OKR
//CREAR RC
//logs
//info

class UserNavBar  extends Component{
    render(){
        return(
            <nav>
                <ul className="navLinks">
                    <NavLink style={{textDecoration: 'none'}} exact={true} activeClassName="isActive" to="/"><li><img src={home} size={100} alt="Inicio" /></li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/okr"><li><img src={objetivo} alt="OKR" /></li></NavLink>
                    <NavLink style={{textDecoration: 'none'}}  to="/prioridades"><li><img src={prioridad} alt="Prioridades" /></li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/reportes"><li><img src={reportes} alt="Reportes" /></li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/logs"><li><img src={logs} alt="Historial de logs" /></li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/info"><li><img src={info} alt="Informacion/Ayuda" /></li></NavLink>
                </ul>
            </nav>
        );
    }
}


export default UserNavBar;