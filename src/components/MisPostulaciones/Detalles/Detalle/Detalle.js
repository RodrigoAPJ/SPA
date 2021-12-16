import React, { Component } from "react";
import {PostulacionesDeEjemplo} from "../../Ejemplos";
import './Detalle.css';

class Detalle extends Component {
    
    constructor(){
        super();
        this.RenderSelected = this.RenderSelected.bind(this);
    }

    componentDidMount(){
        
    }

    RenderSelected(){
        if(this.props.dataFromEstado){
            return (
                <div>
                    <ul className='ulContainer'>
                        <div className='borde_D'>
                            <li className='Titulos_D' key='1'>
                                <div className="Titulo_D">
                                    {this.props.dataFromEstado.title}
                                </div>
                            </li>
                            <li className='data' key='2'>
                                <div className="Profesor">
                                    Profesor: {this.props.dataFromEstado.Profesor}
                                </div>
                            </li>
                            <li className='data' key='3'>
                                <div className="Contacto">
                                    Contacto: {this.props.dataFromEstado.Contacto}
                                </div>
                            </li>
                            <li className='data' key='4'>
                                <div className="Salario">
                                    Salario: {this.props.dataFromEstado.Salario}
                                </div>
                            </li>
                            <li className='data' key='5'>
                                <div className="Campus">
                                    Campus: {this.props.dataFromEstado.Campus}
                                </div>
                            </li>
                            <div className='TituloTablaMayor' key='6'>Horas Semanales</div>
                            
                            <table className='Tabla'>
                                <tbody>
                                    <tr>
                                        <th className='TituloTablaDetalle'> Laboratorio </th>
                                        <th className='TituloTablaDetalle'> Corrección </th>
                                        <th className='TituloTablaDetalle'> Contacto </th>
                                    </tr>

                                    <tr>
                                        <td className='DatoTabla'> {this.props.dataFromEstado.HorasLab} </td>
                                        <td className='DatoTabla'> {this.props.dataFromEstado.HorasCorreccion} </td>
                                        <td className='DatoTabla'> {this.props.dataFromEstado.HorasContacto} </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='Boton'>
                                <button className='DespostularButton' onClick={this.props.funcBoton}>Eliminar postulación</button>
                            </div>
                        </div>
                    </ul>
                </div>
            );
        } 
    }
    
    render(){
        return(
            <div>
                {this.RenderSelected()}
            </div>
            
        )
    }
}

export default Detalle;