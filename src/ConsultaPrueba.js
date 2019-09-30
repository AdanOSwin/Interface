import React, {Component} from 'react';
import {db} from './firebase';
import {refOkr, refOkrRc} from './firebase/db';
import firebase from 'firebase/app';
import 'firebase/database';
import './ConsultaPrueba.css';
import {ProgressBar} from 'react-bootstrap';
//import { isEmptyStatement } from '@babel/types';
//import ConsultaUsuario from './ConsultaUsuario';
//import firebase from 'firebase/database';

const INITIAL_STATE = {
    id: '',
    nombre: '',
    descripcion: '',
    equipo: '',
    prioridad: '',
    tipo: '',
    progreso: '',
    rc: '',
    error: null,
}



class ConsultaPrueba extends Component{
    constructor(props){
        super(props);

        this.state = {
            INITIAL_STATE
        };

        this.removeOkr = this.removeOkr.bind(this);
        //this.removeRc = this.removeRc.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }


    removeOkr(uuid){
        console.log("Eliminando OKR");
        const elimina_Okr = firebase.database().ref(`okr/${uuid}`);
        elimina_Okr.remove();
        console.log("OKR eliminado");
    }

    componentDidMount(){
        refOkr.on('value', (snapshot) =>{
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
                    rc: items[item].rc
                });
            }
            this.setState({
                items: newState
            });
            console.log("Datos de prueba de Okr con Rc anidados");
            console.log("----------------------------------")
            console.log(newState);
            console.log("Objeto convetido a String");
            //console.log(JSON.stringify(newState));
            //const datos = JSON.stringify(newState);
            //for(const dato in datos){
             //   console.log(datos[dato]);
            //}
        });


    }

    render(){
        return(
            <div className="cuerpo">
                <section>
                    <h2>Consulta OKR</h2>
                    <div className="Wrapper">
                        {this.state.items && this.state.items.map((item, key) => {
                            return(
                                <div>
                                    <div>                                    <label>{item.nombre}</label>
                                    <label>{item.equipo}</label>
                                    <label>{item.prioridad}</label>
                                    <label>{item.progreso}</label>
                                    <ProgressBar animated now={item.progreso} />
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={item.progreso} />
                                    </ProgressBar>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <br />
                <br />
                <section>
                                <div className="envuelve">
                                    <div className="okr">
                                    <span><b>NASA</b></span>
                                    <label>critica</label>
                                    <label>dinamita</label>
                                    <label><ProgressBar striped variant="info" now={40} /></label>
                                    <button>Editar</button>
                                    <button>eliminar</button></div><br />
                                    
                                    <div className="rc">
                                    <span>Anidacion1</span> 
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={10} />
                                        <ProgressBar variant="warning" now={32} />
                                        <ProgressBar variant="danger" now={40} />
                                    </ProgressBar>
                                    <button>Editar</button>
                                    <button>eliminar</button>
                                    </div>
                                    <br />
                                    
                                    <div className="rc">
                                    <span>Anidacion2</span>
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={60} />
                                        <ProgressBar variant="warning" now={-12} />
                                        <ProgressBar variant="danger" now={32} />
                                    </ProgressBar>

                                    <button>Editar</button>
                                    <button>eliminar</button>
                                    </div>
                                </div>
                                <br />

                                <div className="envuelve">
                                    <div>
                                        <span><b>JPL</b></span>
                                        <label>Nnormal</label>
                                        <label>sistemas</label>
                                        <label><ProgressBar striped variant="info" now={30} /></label>
                                        <button>Editar</button>
                                        <button>eliminar</button><br />
                                        <br />
                                        <span>Anidacion_prueba_21</span>
                                        <ProgressBar>
                                            <ProgressBar striped variant="success" now={25} />
                                            <ProgressBar variant="warning" now={32} />
                                            <ProgressBar variant="danger" now={12} />
                                        </ProgressBar>
                                        <button>Editar</button>
                                        <button>eliminar</button>
                                        <br />
                                    </div>
                                    
                                    <span>Anidacion_232</span>
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={70} />
                                        <ProgressBar variant="warning" now={-13} />
                                        <ProgressBar variant="danger" now={-45} />
                                    </ProgressBar>

                                    <button>Editar</button>
                                    <button>eliminar</button>
                                </div>
                                <br />
                                <div className="envuelve">
                                    <span><b>TADIS  </b></span>
                                    <label>alta</label>
                                    <label>REcursos humanos</label>
                                    <label><ProgressBar striped variant="info" now={100} /></label>
                                    <button>Editar</button>
                                    <button>eliminar</button><br />
                                    <br />
                                    <span>Aprueba_Anidacion</span>
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={100} />
                                        <ProgressBar variant="warning" now={0} />
                                        <ProgressBar variant="danger" now={0} />
                                    </ProgressBar>

                                    <button>Editar</button>
                                    <button>eliminar</button>
                                    <br />
                                    
                                    <span>pueba_666</span>
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={60} />
                                        <ProgressBar variant="warning" now={-12} />
                                        <ProgressBar variant="danger" now={32} />
                                    </ProgressBar>

                                    <button>Editar</button>
                                    <button>eliminar</button>
                                    </div>
                                    <br />
                                <div className="envuelve">
                                     <span><b>Clara Oswald  </b></span>
                                    <label>media</label>
                                    <label>El america</label>
                                    <label><ProgressBar variant="info" now={50} /></label>
                                    <button>Editar</button>
                                    <button>eliminar</button><br />
                                    <br />
                                    <span>equipo de futbol</span>

                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={40} />
                                        <ProgressBar variant="warning" now={0} />
                                        <ProgressBar variant="danger" now={0} />
                                    </ProgressBar>

                                    <button>Editar</button>
                                    <button>eliminar</button>
                                    <br />
                                    
                                    <span>pueba_9999_abc</span>
                                    <ProgressBar>
                                        <ProgressBar striped variant="success" now={13} />
                                        <ProgressBar variant="warning" now={30} />
                                        <ProgressBar variant="danger" now={25} />
                                    </ProgressBar>

                                    <button>Editar</button>
                                    <button>eliminar</button>

                                    </div>
                </section>
            </div>
        );
    }
}


export default ConsultaPrueba;