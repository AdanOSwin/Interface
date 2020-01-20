import React, {Component} from 'react';
import {db} from './firebase';
import * as routes from './constants/routes';
import {refUsers} from './firebase/db';


const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    jefe: ''

};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class AltaArea extends Component{
    constructor(props){
        super(props);

        this.state = {
            INITIAL_STATE,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        refUsers.on('value', (snapshot) =>{
            const users = snapshot.val();
            const newState = [];
            for(const user in users){
                newState.push({
                    id: user,
                    nombre: users[user].nombre
                });
            }
            this.setState({
                users: newState
            });
            console.log("Usuarios en la creacion de Areas");
            console.log(newState); 
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log("Datos de Area");
        console.log(this.state);

        const{
            nombre,
            descripcion,
            jefe
        } = this.state;

        const {
            history,
        } = this.props;

        db.doCreateArea(nombre, descripcion, jefe)
        .then(() => {
            this.setState({...INITIAL_STATE});
            console.log("Se ha creado el Area");
            history.push(routes.AREAS);
            this.setState({...INITIAL_STATE});
        })
        .catch(error => {
            this.setState(byPropKey('error', error))
        });
    }


    render(){
        const{
            nombre,
            descripcion,
            jefe
        } = this.state;

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input type="text"
                        value={nombre} onChange={event => this.setState(byPropKey('nombre', event.target.value))}     
                        />
                    </div>
                    <div>
                        <label>Descripcion</label>
                        <input type="textarea" 
                        value={descripcion} onChange={event => this.setState(byPropKey('descripcion', event.target.value))} />
                    </div>
                    <div>
                        <label>Encargado</label>
                        <select value={jefe} onChange={event => this.setState(byPropKey('jefe', event.target.value))}>
                            {this.state.users && this.state.users.map((user) =>{
                                return(
                                    <option value={user.id}>{user.nombre}</option>
                                );
                            })}
                        </select>
                    </div>
                    <button value="submit" type="submit">Crear</button>
                </form>
            </div>
        );
    }
}

export default AltaArea;