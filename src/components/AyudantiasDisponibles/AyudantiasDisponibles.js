import React, { Component } from "react";
import {AyudantiasDisponiblesDeEjemplo} from "./AyudantiasDisponiblesEjemplo";
import './AyudantiasDisponibles.css';

class AyudantiasDisponibles extends Component {
    constructor(){
        super();
        this.state = {data:AyudantiasDisponiblesDeEjemplo};
        this.HandleInscripcion = this.HandleInscripcion.bind(this);
    }

    HandleInscripcion(index){
        delete this.state.data[index];
        var spliced = this.state.data;
        this.setState({data:spliced});
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
                                                            
                                                            <button className="PostularButton" onClick={() => this.HandleInscripcion(index)}>Postular</button>
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
            </div>
        )
    }
}

export default AyudantiasDisponibles;