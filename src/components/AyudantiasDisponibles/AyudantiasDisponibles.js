import React, { Component } from "react";
import {AyudantiasDisponiblesDeEjemplo} from "./AyudantiasDisponiblesEjemplo";
import './AyudantiasDisponibles.css';
import { Modal } from 'react-bootstrap';

class AyudantiasDisponibles extends Component {
    constructor(){
        super();
        this.state = {data:AyudantiasDisponiblesDeEjemplo, show: false, index: -1};
        this.handleShow = this.handleShow.bind(this);
        this.HandleInscripcion = this.HandleInscripcion.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    HandleInscripcion(index){
        console.log(index);
        delete this.state.data[index];
        var spliced = this.state.data;
        this.setState({data:spliced});
        this.handleClose();
    }

    handleShow(_index) {
        this.setState({index:_index, show:true});
    }

    handleClose() {
        this.setState({show:false});
    }

    render() {
        return (
            <div className="AyudantiasDisponibles">
                <div className="row ayus">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        
                        <div className="AyudantiasDisponibles-container">
                            <div className="row">
                                <div className="col">
                                    
                                    <div className="dropdown">
                                        <button className="myButton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="depa">Departamentos</div>
                                            <div className="dropSymbol">∨</div>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Informática</a></li>
                                            <li><a className="dropdown-item" href="#">Metalurgia</a></li>
                                            <li><a className="dropdown-item" href="#">Mecánica</a></li>
                                        </ul>
                                    </div>
                                   
                                </div>
                                <div className="col">
                                   
                                        
                                    <div className="Busqueda">
                                        <input className="form-control buscador" placeholder="Buscar asignatura" aria-label="Search"></input>
                                    </div>
                                       
                                   
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                {this.state.data.map((ayudantia, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="Ayudantia">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="row">
                                                            <div className="AyudantiasDisponibles-container-title">
                                                                {ayudantia.nombre}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="AyudantiasDisponibles-vacantes">
                                                                Vacantes disponibles: {ayudantia.vacantes}
                                                            </div>  
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="botonesContainer">
                                                            <button className="InfoButton">Info</button>
                                                            
                                                            {
                                                            //<button className="PostularButton" onClick={() => this.HandleInscripcion(index)}>Postular</button>
                                                            }

                                                            <button className="PostularButton" onClick={() => this.handleShow(index)}>Postular</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Confirmación</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Esta seguro que desea postular?</Modal.Body>
                    <Modal.Footer>
                    <button className="Boton_si" onClick={()=>this.HandleInscripcion(this.state.index)}>
                        Aceptar
                    </button>
                    <button className="Boton_no" onClick={()=>this.handleClose()}>
                        Cancelar
                    </button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default AyudantiasDisponibles;