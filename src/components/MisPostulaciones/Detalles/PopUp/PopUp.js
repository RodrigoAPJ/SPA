import React, { Component } from "react";
import './PopUp.css';

class PopUp extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <ul className='p-container'>
                    <div className='borde_PopUp'>
                        <div className='Titulo_PopUp'>
                            ¿Confirma la cancelación de la postulación?
                        </div>
                        <div className='Contenido_PopUp'>
                            <button className='Boton_si' onClick= {()=>this.props.funcBotonPopUp(true)}>Si</button>
                            <button className='Boton_no' onClick= {()=>this.props.funcBotonPopUp(false)}>No</button>
                        </div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default PopUp;