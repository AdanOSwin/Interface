import React, {Component} from 'react';
import {db} from './firebase';
import * as routes from './constants/routes';
import {refArea, refUsers} from './firebase/db';
import AltaArea from './AltaArea';
import {Button} from 'react-bootstrap';

const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    area: '',
    encargado: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class AltaEquipo extends Component{
    constructor(props){
        super(props);

        this.state = {
            INITIAL_STATE
        };
    }

    componentDidMount(){
        refUsers.on('value', (snapshot) =>{
            const users = snapshot.val();
            const usuarios = [];
            for(const user in users){
                usuarios.push({
                    id: user,
                    nombre: users[user].nombre
                });
            }
            this.setState({
                users: usuarios 
            });
            console.log("Usuarios en la creacion de equipos");
            console.log(users);
        });

        refArea.on('value', (snapshot) =>{
            const areas = snapshot.val();
            const estado2 = [];
            for(const area in areas){
                estado2.push({
                    id: area,
                    nombre: areas[area].nombre
                });
            }
            this.setState({
                areas: estado2
            });
            console.log("Areas en la creacion de equipos");
            console.log(areas);
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log("Datos del Equipo");
        console.log(this.state);

        const{
            nombre,
            descripcion,
            area,
            encargado
        } = this.state;

        const{
            history
        } = this.props;

        db.doCreateEquipo(nombre, descripcion, area, encargado)
        .then(() =>{
            this.setState({...INITIAL_STATE});
            console.log("Se ha creado el Equipo");
            history.push(routes.INFO);
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });
    }

    render(){
        const{
            nombre,
            descripcion,
            area,
            encargado
        } = this.state;

        const isInvalid = nombre === '' ||
        descripcion === '' ||
        area === '' ||
        encargado === '';

        return(
            <div>
                <form onSubmit={this.onSubmit} className="formulario">
                    <div>
                        <label>Nombre Equipo</label>
                        <input type="text"
                        value={nombre} onChange={event => this.setState(byPropKey('nombre', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Descripcion</label>
                        <input type="textArea"
                        value={descripcion} onChange={event => this.setState(byPropKey('descripcion', event.target.value))}
                         />
                    </div>
                    <div>
                        <label>Area</label>
                        <select value={area} onChange={event => this.setState(byPropKey('area', event.target.value))}>
                        <option value="ninguna">Ninguna</option>
                        {this.state.areas && this.state.areas.map((area) => {
                            return(
                                    <option value={area.id}>{area.nombre}</option>
                            );
                        })}
                        </select>
                    </div>
                    <div>
                        <label>Encargado</label>
                        <select value={encargado} onChange={event => this.setState(byPropKey('encargado', event.target.value))}>
                            {this.state.users && this.state.users.map((user) => {
                                return(
                                        <option value={user.id}>{user.nombre}</option>
                                );
                            })}
                        </select>
                    </div>
                    <Button value="submit" disabled={isInvalid} type="submit" variant="success">Crear</Button>
                </form>
            </div>
        );
    }
}


export default AltaEquipo;