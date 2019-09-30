import React, {Component} from 'react';
import {db} from './firebase';
import {refEquipo, refOkr} from './firebase/db';

const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    equipo: '', 
    progreso: '',
    okr: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class AltaIniciativa extends Component{
    constructor(props){
        super(props);

        this.state = {
            INITIAL_STATE
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        refEquipo.on('value', (snapshot) =>{
            const items = snapshot.val();
            const newState = [];
            for(const item in items){
                newState.push({
                    id: item,
                    nombre: items[item].nombre
                });
            }
            this.setState({
                items: newState
            });
            console.log("Equipos en iniciativas");
            console.log(newState);
        });

        refOkr.on('value', (snapshot) => {
            const items2 = snapshot.val();
            const newState2 = [];
            for(const item2 in items2){
                newState2.push({
                    id: item2,
                    nombre: items2[item2].nombre
                });
            }
            this.setState({
                items2: newState2
            });
            console.log("Okr en creacion de Iniciativas");
            console.log(newState2);
        });
    }


    onSubmit = (event) =>{
        event.preventDefault();
        console.log("Datos Iniciativa");
        console.log(this.state);
        console.log("----------------------");

        const{
            nombre,
            descripcion,
            equipo,
            progreso,
            okr,
            error
        } = this.state;

        db.doCreateIniciativa(nombre, descripcion, equipo, progreso, okr)
        .then(() => {
            this.setState({...INITIAL_STATE});
            console.log("Se ha creado la Iniciativa");
            //Agregar la ruta e importarlas
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });
    }

    render(){

        const{
            nombre,
            descripcion,
            equipo,
            progreso,
            okr
        } = this.state;

        return(
            <div>
            <h2>Creacion de Iniciativa</h2>
            <form className="formulario" onSubmit={this.onSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" 
                    value={nombre} onChange={event => this.setState(byPropKey('nombre', event.target.value))}
                    />
                </div>
                <div>
                <label>Descripcion</label>
                <input type="text"
                value={descripcion} onChange={event => this.setState(byPropKey('descripcion', event.target.value))}
                 />
                </div>
                <div>
                <label>Equipo</label>
                <select value={equipo} onChange={event => this.setState(byPropKey('equipo', event.target.value))}>
                    {this.state.items && this.state.items.map((item) => {
                        return(
                            <option value={item.id}>{item.nombre}</option>
                        );
                    })}
                </select>
                </div>
                <div>
                    <label>Progreso</label>
                    <input type="number" 
                    value={progreso} onChange={event => this.setState(byPropKey('progreso', event.target.value))}
                    />
                </div>
                <div>
                    <label>OKR</label>
                    <select value={okr} onChange={event => this.setState(byPropKey('okr', event.target.value))}>
                    {this.state.items2 && this.state.items2.map((item2) => {
                        return(
                            <option value={item2.id}>{item2.id}</option>
                        );
                    })}
                    </select>
                </div>
            </form>
            </div>
        );
    }
}


export default AltaIniciativa;