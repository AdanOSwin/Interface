import React, {Component} from 'react';
import Toggle from './Toggle';
import AltaOkr from './AltaOkr';
import AltaRc from './AltaRc';
import ConsultaRc from './ConsultaRc';
import ConsultaOkr from './ConsultaOkr';
import ConsultaGlobal from './ConsultaGeneral';
import ConsultaPrueba from './ConsultaPrueba';
import AltaIniciativa from './AltaIniciativa';
import ConsultaAnidada from './ConsultaAnidada';
import ConsultaGeneral from './ConsultaGeneral';
import './App.css';
import './ConsultaOkr.css'

class Okr extends Component{
    render(){
        return(
            <div className="despliegue">
                <div className="Crear">
                    <label>Crear OKR</label>
                    <Toggle><AltaOkr /></Toggle>
                </div>
                <div className="Crear">
                    <label>Crear RC</label>
                    <Toggle><AltaRc /></Toggle>
                </div>
                <div className="Crear">
                <label>Crear Iniciativa</label>
                <Toggle><AltaIniciativa/></Toggle>
                </div>
                <br />
                <br />
                <br />
                <br />
            <div className="consulta">
            <label>Directorio de Objetivos</label>
            <Toggle>
                <div className="ConOkr">
                    <ConsultaOkr />
                <div className="ConRc">
                    <Toggle>
                        <ConsultaRc />
                    </Toggle>
                </div>
            </div>
            </Toggle>
            </div>
            <div>
                <label>Consulta global</label>
            </div>
            <p>----------------------------------------------------------</p>
            <span>--------------Separacion------------------</span>
            <ConsultaGeneral/>
            </div>
        );
    }
}


export default Okr;