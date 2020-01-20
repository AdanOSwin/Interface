import React, {Component} from 'react';
import {db} from './firebase';
import {refOkr} from './firebase/db';
import {ProgressBar, Button}from 'react-bootstrap';

class ConsultaAnidada extends Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        refOkr.on('value', (snapshot) =>{
            const items = snapshot.val();
            const estado = [];
            for(const item in items){
                estado.push({
                    id: item,
                    nombre: items[item].nombre,
                    equipo: items[item].equipo,
                    prioridad: items[item].prioridad,
                    tipo: items[item].tipo,
                    progreso: items[item].progreso,   
                });
            }
            this.setState({
                items: estado
            });
            console.log("------------Nueva Consulta de OKR---------");
            console.log(items);
        })
    }
    render(){
        return(
            <div className="Cuerpo">
                <section>
                    <h3>Consulta de OkR</h3>
                    <div className="Wrapper">
                    </div>
                </section>
                <h3>Pruebame</h3>
            </div>
        );
    }
}



export default ConsultaAnidada;