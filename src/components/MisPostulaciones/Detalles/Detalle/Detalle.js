import React, { Component } from "react";
import './Detalle.css';
import { Modal } from 'react-bootstrap';
import '../PopUp/PopUp.css'

class Detalle extends Component {
    
    constructor(){
        super();
        this.RenderSelected = this.RenderSelected.bind(this);

        this.state = {show: false};

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleYes = this.handleYes.bind(this);
    }

    handleClose() {
        this.setState({show:false});
    }
    handleShow() {
        this.setState({show:true});
    }

    handleYes(){
        this.props.RemoveData(this.props.dataFromEstado);
        this.handleClose();
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
                            <li className='data' key='7'>
                                <div className="Campus">
                                    Estado: {this.props.dataFromEstado.estado}
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
                                <button className='DespostularButton' onClick={this.handleShow}>Eliminar postulación</button>
                            </div>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Confirmación</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>¿Esta seguro que desea cancelar postulación?</Modal.Body>
                                <Modal.Footer>
                                <button className="Boton_si" onClick={this.handleYes}>
                                    Aceptar
                                </button>
                                <button className="Boton_no" onClick={this.handleClose}>
                                    Cancelar
                                </button>
                                </Modal.Footer>
                            </Modal>


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