import React, {Component} from 'react';
import {refArea} from './firebase/db';
import firebase from './firebase/firebase';



const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    jefe: ''
};


class ConsultaArea extends Component{
    constructor(props){
        super(props);

        this.state = {
            INITIAL_STATE
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.removeArea = this.removeArea.bind(this);
    }

    removeArea(uuid){
        console.log("ELiminando Area");
        const itemArea = firebase.database().ref(`area/${uuid}`);
        itemArea.remove();
        console.log("Area eliminada");
    }

    componentDidMount(){
        refArea.on('value', (snapshot) => {
            const items = snapshot.val();
            const newState = [];
            for(const item in items){
                newState.push({
                    id: item,
                    nombre: items[item].nombre,
                    descripcion: items[item].descripcion,
                    jefe: items[item].jefe
                });
            }
            this.setState({
                items: newState
            });
            console.log("Areas Creadas");
            console.log(newState);
        });
    }

    render(){
        return(
            <div>
            <section>
                <h2>Areas Creadas</h2>
                <div className="wrapper">
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Encargado</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {this.state.items && this.state.items.map((item) => {
                        return(
                            <tr>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.jefe}</td>
                            <td><button onClick={() => this.removeArea(item.id)}>Eliminar</button></td>
                            <td>Editar</td>
                            </tr>
                        );
                    })}
                </table>
                </div>
            </section>
            </div>
        );
    }
}



export default ConsultaArea;