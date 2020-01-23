import React, {Component} from 'react';
import {db, auth} from './firebase';
import * as routes from './constants/routes';
import RegistraUsuario from './RegisterUser';


const INITIAL_STATE = {
    nombre: '',
    apellido: '',
    email: '',
    pass1: '',
    pass2: '',
    empresa: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class Registra extends Component{
    constructor(props){
        super(props);

        this.state={
            ...INITIAL_STATE
        };

        this.onSubmit = this.onSubmit.bind(this);
        //this.onCreate = this.onCreate.bind(this);
    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log("Registro de usuario");
        console.log(this.state);

        const{
            nombre,
            apellido,
            email,
            pass1,
            empresa
        } = this.state;

        const{
            history
        } = this.props;

        db.doRegisterUser(nombre, apellido, email, pass1, empresa)
        .then(() =>{
            this.setState({...INITIAL_STATE});
            console.log("Se haregistrado el usuario");
            history.push(routes.HOME);
        })
        .catch(error =>{
            this.setState(byPropKey('error', error));
        });
        /*auth.doCreateUserWithEmailAndPassword(email, pass1)
        .then( authUser =>{
            db.doRegisterUser(nombre, apellido, email, pass1, empresa)
            .then(() =>{
                this.setState({...INITIAL_STATE});
                console.log("Se ha Registrado un usuario");
                history.push(routes.HOME);
            })
            .catch(error =>{
                this.setState(byPropKey('error', error));
            }); 
        })
        .catch(error =>{
            this.setState(byPropKey('error', error))
        });*/

    };

    render(){
        const{
            nombre,
            apellido,
            email,
            pass1,
            pass2,
            empresa
        } = this.state;

        const isInvalid = pass1 !== pass2 ||
        nombre === '' ||
        apellido === '' ||
        email === '' ||
        pass1  === '' ||
        empresa === '';

        return(
            <div>
                <form onSubmit={event => this.onCreate(event)}>
                    <div>
                        <span>Nombre</span><br />
                        <input type="text" 
                            value={nombre} onChange={event => this.setState(byPropKey('nombre', event.target.value))}
                        />
                    </div>
                    <div>
                        <span>Apellido</span><br />
                        <input type="text"
                            value={apellido} onChange={event => this.setState(byPropKey('apellido', event.target.value))}
                        />
                    </div>
                    <div>
                        <span>Email</span><br />
                        <input type="email" 
                            value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}
                        />
                    </div>
                    <div>
                        <span>Ingresar contraseña</span><br />
                        <input type="password" 
                            value={pass1} onChange={event => this.setState(byPropKey('pass1', event.target.value))}
                        />
                    </div>
                    <div>
                        <span>Volver a ingresar la contraseña</span><br />
                        <input type="password" 
                            value={pass2} onChange={event => this.setState(byPropKey('pass2', event.target.value))}
                        />
                    </div>
                    <div>
                        <span>Empresa</span><br />
                        <input 
                            value={empresa} onChange={event => this.setState(byPropKey('empresa', event.target.value))}
                        />
                    </div>
                </form>
                <button disabled={isInvalid} type="submit" value="submit">Sign up</button>
            </div>
        );
    }
}

export default Registra;