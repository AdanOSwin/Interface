import React, {Component} from 'react';
import './Toggle.css';
import firebase from 'firebase/app';
import {refOkr } from './firebase/db';
import 'firebase/database';
import Despliega from './Despliega.png';
import mas_2 from './mas_2.svg';
import mas_3 from './mas_3.svg';
import arrow from './down_arrow.svg';
import {Button} from 'react-bootstrap';

const INITIAL_STATE = {
    nombre: '',
    descripcion: '',
    equipo: '',
    prioridad: '',
    tipo: '',
    progreso: '',
    padre: '',
    error: null,
    items: [],
    on: false,
}

class Toggle extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            INITIAL_STATE
        };

        //this.componentDidMount = this.componentDidMount.bind(this);
        this.toggle = this.toggle.bind(this);

    }

    
    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    }


    render(){
        return(
            <div>
            <Button style={{height: '10px'}} type="button" class="btn btn-primary" onClick={this.toggle}><img style={{width: '40px', height: '15px', top: '1300px;'}} src={arrow} alt="Despliega logo" /></Button>
                {this.state.on && this.props.children
                }
            </div>

        ); 
    }
}

export default Toggle;