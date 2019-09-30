import React, {Component} from 'react';
import AltaUsuario from './AltaUsuario';
import ConsultaUsuario from './ConsultaUsuario';
import Toggle from './Toggle';

class Usuarios extends Component{
    render(){
        return(
            <div>
                <div>
                    <span>Crear Usuario</span>
                    <Toggle>
                        <AltaUsuario />
                    </Toggle>
                </div>
                <h3>Companions</h3>
                    <p>Clara Oswald</p>
                    <p>Amelia Pond</p>
                    <p>Rose Tyler</p>
                    <p>Donna Noble</p>
                    <p>Martha Jones</p>
                <div>
                    <ConsultaUsuario />
                </div>
            </div>
        );
    }
}

export default Usuarios;