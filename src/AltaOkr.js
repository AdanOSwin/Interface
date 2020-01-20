import React, {Component} from 'react';
import {db} from './firebase';
import {refOkr, refEquipo} from './firebase/db';
import 'firebase/app';
import 'firebase/database';
//import {Button} from 'reactstrap';

const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    equipo: '',
    prioridad: '',
    tipo: '',
    progreso: '',
    error: null,
}


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class AltaOkr extends Component{
    constructor(props){
        super(props);

        this.state={
            INITIAL_STATE
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        refOkr.on('value', (snapshot) => {
            const items = snapshot.val();
            const newState = [];
            for(const item in items){
                newState.push({
                   id: item, 
                   nombre: items[item].nombre,
                });
            }
            this.setState({
                items:newState
            });
            console.log("OKR en OKR");
            console.log(newState);
        });

        refEquipo.on('value', (snapshot) =>{
            const equipos = snapshot.val();
            const estado = [];
            for(const equipo in equipos){
                estado.push({
                    id: equipo,
                    nombre: equipos[equipo].nombre
                });
            }
            this.setState({
                equipos: estado
            });
            console.log("------Equipos en Creacion de OKR----------");
            console.log(equipos);
        })
    }

    onSubmit = (event) => {
        
        //const postKey = db.ref().child('okr').push().key;
        //const claveOkr = claveUnica.key;
        //console.log(postKey);
        event.preventDefault();
        console.log("DATOS OKR");
        console.log(this.state);

        const{
            nombre,
            descripcion,
            equipo,
            prioridad,
            tipo,
            progreso,
        } = this.state;
        
        //const refId = db.ref.push().key();
        const newRef = db.refArea.push();
        const idOkr = newRef.key
        console.log("ID okr: "+ idOkr);
        db.doCreateOkr(idOkr, nombre, descripcion, equipo, prioridad, tipo, progreso)
        .then(() => {
            this.setState({...INITIAL_STATE});
            console.log("Se ha creado el OKR");
        })
        .catch(error => {
            this.setState(byPropKey('error', error))
        });
    }

    render(){

        const{
            nombre, 
            descripcion,
            equipo,
            prioridad,
            tipo,
            progreso
        } = this.state;

        return(
            <div>
                <h2>Creacion de Objetivo</h2>
                <form className="formulario" onSubmit={this.onSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" 
                        value={nombre} onChange={event=> this.setState(byPropKey('nombre', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Descripcion</label>
                        <input type="text" 
                        value={descripcion}  onChange={event => this.setState(byPropKey('descripcion', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Equipo</label>
                        <select value={equipo} onChange={event => this.setState(byPropKey('equipo', event.target.value))}>
                            {this.state.equipos && this.state.equipos.map((equipo) =>{
                                return(
                                    <option value={equipo.nombre}>{equipo.nombre}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Prioridad</label>
                        <select value={prioridad} onChange={event => this.setState(byPropKey('prioridad', event.target.value ))}>
                            <option value="baja">Baja</option>
                            <option value="media">Media</option>
                            <option value="alta">Alta</option>
                            <option value="critica">Critica</option>
                        </select>
                    </div>
                    <div>
                        <label>
                            Tipo
                        </label>
                        <select value={tipo} onChange={event => this.setState(byPropKey('tipo', event.target.value))}>
                            <option value="global">Global</option>
                            <option value="secundario">Secundario</option>
                        </select>
                    </div>
                    <div>
                        <label>Progreso</label>
                        <input type="number" 
                        value={progreso} onChange={event => this.setState(byPropKey('progreso', event.target.value))}
                        />
                    </div>
                    <button type="submit" color="dark" value="Crear">
                        Crear
                    </button>
                </form>
            </div>
            
        );
    }
}

export default AltaOkr;