import React, {Component} from 'react';
import {db, auth} from './firebase';
import * as routes from './constants/routes';

const INITIAL_STATE = {
    nombre: '',
    apellido: '',
    email: '',
    pass1: '',
    pass2: '',
    tel: '',
    empresa: '',
    error: null,
}


const byPropKey = (propertyName,  value) => () => ({
    [propertyName]: value,
});


class RegistraUsuario extends Component{
    constructor(props){
        super(props);

        this.state={
            ...INITIAL_STATE
        };
    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log("Creacion de usuario");
        console.log(this.state);

        const{
            nombre,
            apellido,
            email,
            pass1,
            tel,
            empresa
        } = this.state; 

        const{
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, pass1)
        .then(authUser =>{
            db.doRegisterUser(nombre, apellido, email, pass1, tel, empresa)
            .then(() =>{
                this.setState({...INITIAL_STATE});
                console.log("Se ha creado el usuario");
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error))
            });
        })
        .catch(error =>{
            this.setState(byPropKey('error', error))
        });

        //db.doCreateUser(nombre, apellido, email, pass1, tel, empresa)

    }

    render(){
        const{
            nombre,
            apellido,
            email, 
            pass1,
            pass2,
            tel,
            empresa
        } = this.state;

        const isInvalid = pass1 !== pass2 ||
        pass1 === '' ||
        nombre === '' ||
        apellido === '' ||
        email === '' ||
        tel === '' ||
        empresa === ''; 
    
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Nombre </label>
                        <input type="text" 
                            value={nombre} onChange={event => this.setState(byPropKey('nombre', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Apellido </label>
                        <input type="text"
                        value={apellido} onChange={event => this.setState(byPropKey('apellido', event.target.value))}
                         />
                    </div>
                    <div>
                        <label>email</label>
                        <input type="email" 
                            value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" 
                            value={pass1} onChange={event => this.setState(byPropKey('pass1', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Volver a introducir la contraseña</label>
                        <input type="password" 
                            value={pass2} onChange={event => this.setState(byPropKey('pass2', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input type="tel"
                            value={tel} onChange={event=> this.setState(byPropKey('tel', event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Empresa</label>
                        <input type="text" 
                            value={empresa} onChange={event => this.setState(byPropKey('empresa', event.target.value))}
                        />
                    </div>
                </form>
                <button disabled={isInvalid} type="submit" value="crear">Crear cuenta</button>
            </div>
        );
    }
}

export default RegistraUsuario;