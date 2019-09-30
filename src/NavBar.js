import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <nav>                
                <ul className="navLinks">
                    <NavLink style={{textDecoration: 'none'}} exact={true} activeClassName='isActive' to='/' ><li>Inicio/logo</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/directorio"><li>Directorio OKR</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/okr" ><li>OKR</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/equipos"><li>Equipos</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/areas"><li>Areas</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/reportes"><li>Reportes</li></NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/usuarios"><li>Usuarios</li></NavLink>
                </ul>
            </nav>
        );
    }
}


export default NavBar;


/*

    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/directorio" component={Directorio} />
        <Route exact path="/okr" component={Okr} />
        <Route exact path="/areas" component={Areas} />
        <Route exact path="/equipos" component={Equipos} />
        <Route exact path="/reportes" component={Reportes} />
        <Route exact path="/usuarios" component={Usuarios} />
      </Switch>

      //inicio
      prioridades semanales
      okr trimestrales
      logs/noticias
      espacio
      espacio
      espacio
      soporte
      ayuda
      
    </div>
    </Router>


*/