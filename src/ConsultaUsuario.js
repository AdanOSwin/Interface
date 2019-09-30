import React, {Component} from 'react';
import {refUsers} from './firebase/db';
import firebase from './firebase/firebase';



const INITIAL_STATE ={
    nombre: '',
    apellido: '',
    email: '',
    pass1: '',
    tel: '',
    equipo: '',
    area: '',
};



class ConsultaUsuario extends Component{
    constructor(props){
        super(props);

        this.state = {
            INITIAL_STATE
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        //this.removeUser = this.removeUser.bind(this);
    }

    /*removeUser(uuid){
        console.log("Eliminando Usuario");
        const itemUSer = firebase.database().ref(`users/${uuid}`);
        itemUSer.remove();
        console.log("Usuario eliminado");
    }*/

    componentDidMount(){
        refUsers.on('value', snapshot =>{
            const items = snapshot.val();
            const newState = [];
            for(const item in items){
                newState.push({
                    id: item,
                    nombre: items[item].nombre,
                    apellido: items[item].apellido,
                    email: items[item].email,
                    pass1: items[item].pass1,
                    tel: items[item].tel,
                    equipo: items[item].equipo,
                    area: items[item].area
                });
            }
            this.setState({
                items: newState
            });
            console.log("Usuarios Creados");
            console.log(newState);
        });
    }

    render(){
        return(
            <div>
            <section>
                <h2>Usuarios</h2>
                <div className="wrapper">
                    <table>
                        <th>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Constraseña</th>
                                <th>Telefono</th>
                                <th>Equipo</th>
                                <th>Area</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {this.state.items && this.state.items.map((item) => {
                                return(
                                    <tr>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.email}</td>
                                    <td>{item.pass1}</td>
                                    <td>{item.tel}</td>
                                    <td>{item.equipo}</td>
                                    <td>{item.area}</td>
                                    <td><button>Eliminar</button></td>
                                    <td><button>Editar</button></td>
                                    </tr>
                                );
                            })}
                        </th>
                    </table>
                </div>
            </section>
            </div>
        );
    }
}


export default ConsultaUsuario;