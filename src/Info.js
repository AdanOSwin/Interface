import React, {Component} from 'react';
import AltaEquipo from './AltaEquipo';
import AltaUsuario from './AltaUsuario';
import AltaArea from './AltaArea';


class Info extends Component{
    render(){
        return(
            <div>
            <h2>Pagina de informacion y ayuda</h2>
            <div>
                <span><b>Crear Usuario</b></span>
                <AltaUsuario />
            </div>
            <div>
                <span><b>Crear Equipo</b></span>
                <AltaEquipo />
            </div>
            <div>
                <span><b>Crear Area</b></span>
                <AltaArea />
            </div>
            </div>
        );
    }
}


export default Info;