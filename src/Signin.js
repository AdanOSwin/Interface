import React, {Component} from 'react';
import * as routes from './constants/routes';
import {auth} from './firebase';
import {withRouter} from 'react-router-dom';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

const byPropKey = (propertyName, value) => () =>({
    [propertyName]: value,
});




class Signin extends Component{
    constructor(props){
        super(props);

        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = (event) => {
        const{
            email,
            password, 
            error
        } = this.state;
        
        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({...INITIAL_STATE});
            //history.push(routes.HOME);
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });
    
    } 



    render(){

        const{
            email,
            password
        } = this.state;

        const isInvalid = password === '' || email === '';
        return(
            <div>
                <h2>Iniciar sesión</h2>
                <form onSubmit={this.onSubmit}>
                <div>
                    <span>Email</span>
                    <input type="email" 
                        value={email} onChange={event => this.setState(byPropKey('email', event.target.value))}
                    />
                </div>
                <div>
                    <span>Contraseña</span>
                    <input type="password"
                        value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}
                    />
                </div>
                </form>
                <button disabled={isInvalid} type="submit">Sign In</button>
            </div>
        );
    }
}


export default Signin;