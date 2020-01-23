import React from 'react';
import logo from './logo.svg';
import firebase from 'firebase/app';
import Toggle from './Toggle';
//import NavBar from './NavBar';
import Reportes from './Reportes';
import Areas from './Areas';
import Equipos from './Equipos';
import Usuarios from './Usuarios';
import Directorio from './Directorio';
import Okr from './Okr';
import Home from './Home';
//import UserNav from './UserNav';
import UserNavBar from './UserNavBar';
import LandingNavBar from './LandingNavBar';
import Logs from './Logs';
import Landing from './Landing';
import Info from './Info';
import RegisterUsuario from './RegisterUser';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Despliega from './Altas';
import Signin from './Signin';
import './App.css';
import RegistraUsuario from './RegisterUser';
import Registra from './RegistroUsuario';

function App() {
  return (
    <div>
    <Router>
    <div className="App">
       <LandingNavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Info" component={Info} />
        <Route exact path="/signup" component={Registra} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </div>
    </Router>
</div>
  );
}

export default App;
