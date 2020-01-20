import React, {Component} from 'react';
import {db} from './firebase';
//import firebase from './firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import {refOkr, refRc} from './firebase/db';
import './ConsultaOkr.css';
import {ProgressBar} from 'react-bootstrap';
import Toggle from './Toggle';
import ConsultaPrueba from './ConsultaPrueba'
//import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';

const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    equipo: '',
    prioridad: '',
    tipo: '',
    progreso: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class ConsultaGlobal extends Component{
    constructor(props){
        super(props);

        this.state = {
            INITIAL_STATE
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.removeOkr = this.removeOkr.bind(this);
    }

    removeOkr(uuid){
        console.log("Madison");
        const itemOkr = firebase.database().ref(`okr/${uuid}`);
        console.log("Davenport");
        itemOkr.remove();
    }

    componentDidMount(){
        refOkr.on('value', (snapshot) => {
            const items = snapshot.val();
            const newState = [];
            for(const item in items){
                newState.push({
                   id: item, 
                   nombre: items[item].nombre,
                   descripcion: items[item].descripcion,
                   equipo: items[item].equipo,
                   prioridad: items[item].prioridad,
                   tipo: items[item].tipo,
                   progreso: items[item].progreso,
                });
            }
            this.setState({
                items:newState
            });
            console.log("OKR");
            console.log(newState);
        });

        
    }

    reset(){
        this.setState({
            rcs: []
        });
    }

    enviaId = (id) =>{
        //Consulta de RC dentro de los Objetivos
        firebase.database().ref(`okr/${id}/rc/`).on('value', snapshot =>{
            let rcs = snapshot.val();
            const estado = [];
            for(const rc in rcs){
                estado.push({
                    id: rc,
                    nombre: rcs[rc].nombre,
                    inicial: rcs[rc].inicial,
                    actual: rcs[rc].actual,
                    esperado: rcs[rc].esperado,
                    target: rcs[rc].target,
                    inicio: rcs[rc].inicio,
                    termino: rcs[rc].termino
                });
            }
            console.log("------------RCS-MADISON-----------");
            console.log(rcs);
            return estado;
        });

        //Consulta de iniciativas dentro de los OKR
        firebase.database().ref(`okr/${id}/iniciativas`).on('value', snapshot =>{
            const iniciativas = snapshot.val();
            const estado = [];
            for(const iniciativa in iniciativas){
                estado.push({
                    id: iniciativa,
                    nombre: iniciativas[iniciativa].nombre,
                    progreso: iniciativas[iniciativa].progreso
                });
            }
            this.setState({
                iniciativas: estado
            });
            console.log("-----------INICIATIVAS/JOI-----------------");
            console.log(iniciativas);
        });

    }


    render(){
        return(
            <div>
                <section>
                    <div className="wrapper">
                        <table>
                            <tr>
                                <th className="nombre">Nombre</th>
                                <th className="equipo">Equipo</th>
                                <th className="prioridad">prioridad</th>
                                <th className="progreso">Progreso</th>
                                <th className="Elimina"></th>
                                <th className="Edita"></th>
                                </tr>
                            {this.state.items && this.state.items.map((item) => {
                                return(
                                        <tr>
                                            <td className="nombre">{item.nombre}</td>
                                            <td className="equipo">{item.equipo}</td>
                                            <td className="prioridad">{item.prioridad}</td>
                                            <td className="progreso"><ProgressBar now={30} /></td>
                                            <td className="Elimina"><button onClick={() => this.removeOkr(item.id)}>Eliminar</button></td>
                                            <td className="Edita"><button>Editar</button></td>
                                        </tr>
                                );
                            })}
                        </table>
                    </div>
                </section>

                <h3>Do it 4 her</h3>
                {this.state.items && this.state.items.map((item) =>{
                    return(
                    <div>
                        <span>{item.nombre}</span>
                        <button onClick={() => this.enviaId(item.id)}>Ver RC</button>
                        {this.state.estado && this.state.estado.map((rc) =>{
                            console.log("alskdlask");
                            return(
                                <div>
                                    <span >{rc.nombre}</span>
                                </div>
                            );
                        })}
                    </div>
                    );
                })}
                <h4>-----------------Charlie--------------</h4>
                <h4>For Madison</h4>
                
                <div>
                </div>
            </div>
        );
    }
}

export default ConsultaGlobal;