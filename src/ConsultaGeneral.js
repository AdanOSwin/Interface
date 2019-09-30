import React, {Component} from 'react';
import {db} from './firebase';
//import firebase from './firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import {refOkr, refRc} from './firebase/db';
import './ConsultaOkr.css';
import {ProgressBar} from 'react-bootstrap';
//import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';

const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    equipo: '',
    prioridad: '',
    tipo: '',
    progreso: '',
    padre: '',
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
                   padre: items[item].padre 
                });
            }
            this.setState({
                items:newState
            });
            console.log("OKR");
            console.log(newState);
        });

        let datos = [];
        refOkr.once('value')
        .then(snapshot => {
            datos = []
            snapshot.forEach(item => {
                datos.push({
                    id: item.key,
                    ...item.val()
                });
            });
            console.log("----------CONSULTA OPCIONAL OKR-------");
            console.log(datos);
            return datos;
        })
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

                <h3>Separador</h3>
                {this.state.items && this.state.items.map((item) =>{
                    return(
                    <div>
                        <label>{item.nombre}</label>
                        {this.state.datos && this.state.datos.map((dato) => {
                        return(
                            <div>
                                <label></label>
                            </div>
                        );
                        })}
                    </div>
                    );
                })}
            </div>
        );
    }
}

export default ConsultaGlobal;