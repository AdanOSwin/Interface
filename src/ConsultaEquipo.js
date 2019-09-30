import React, {Component} from 'react';
import {refEquipo} from './firebase/db';
import firebase from './firebase/firebase';


const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    area: '',
    jefe: '',
}


class ConsultaEquipo extends Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.removeEquipo = this.removeEquipo.bind(this);
    }

    removeEquipo(uuid){
        console.log("Eliminando Equipo");
        const itemEquipo = firebase.database().ref(`equipo/${uuid}`);
        itemEquipo.remove();
        console.log("Equipo eliminado");
    }

    componentDidMount(){
        refEquipo.on('value', snapshot =>{
            const items = snapshot.val();
            const newState = [];
            for(const item in items){
                newState.push({
                    id: item,
                    nombre: items[item].nombre,
                    descripcion: items[item].descripcion,
                    area: items[item]
                })
            }
            this.setState({
                items: newState,
            });
            console.log("Equipos creados; ");
            console.log(newState);
        });
    }




    render(){
        return(
            <div>
            </div>
        );
    }
}



export default ConsultaEquipo;