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
import Logs from './Logs';
import Landing from './Landing';
import Info from './Info';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Despliega from './Altas';
import './App.css';

function App() {
  return (
    <div>
    <Router>
    <div className="App">
      <UserNavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/okr" component={Okr} />
        <Route exact path="/reportes" component={Reportes} />
        <Route exact path="/logs" component={Logs} />
        <Route exact path="/Info" component={Info} />
      </Switch>
    </div>
    </Router>
</div>
  );
}

export default App;
