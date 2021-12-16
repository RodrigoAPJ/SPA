import React, { Component } from "react";
import {PerfilEjemplo} from "./PerfilEjemplo";
import './MiPerfil.css';

class MiPerfil extends Component {
    constructor(){
        super();
		this.state = {data:PerfilEjemplo};
	}

    HandleDropdown(text){
       var x = document.getElementById("dr_item");
       document.getElementById("depa").innerHTML = text;
    }

    render() {
		return (
			<div className="Perfil">
                <div className="dropdown-container">
                    <div className="dropdown" id="my_dropdown">
                        <button className="myButton_Perfil" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="depa" id="depa">Datos Académicos</div>
                            <div className="dropSymbol">∨</div>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" id="dr_item" onClick={() => this.HandleDropdown("Datos Académicos")} href="#">Datos Académicos</a></li>
                            <li><a className="dropdown-item" id="dr_item" onClick={() => this.HandleDropdown("Calificaciones")} href="#">Calificaciones</a></li>
                            <li><a className="dropdown-item" id="dr_item" onClick={() => this.HandleDropdown("Ayudantías Pasadas")} href="#">Ayudantías Pasadas</a></li>
                            <li><a className="dropdown-item" id="dr_item" onClick={() => this.HandleDropdown("Información de Pago")} href="#">Información de Pago</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "MiPerfil">
                    <div className='borde_F'>
                        <div className="row">
                            <div className="col">
                                <div className='Nombre_Perfil'>
                                    Nombre: Jamett
                                </div>
                            </div>
                            <div className="col">
                                <div className='Campus_Perfil'>
                                    Campus: San Joaquin
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className='Prioridad_Perfil'>
                                    Prioridad: 9000
                                </div>
                            </div>
                            <div className="col">
                                <div className='Carrera_Perfil'>
                                    Carrera: Informatica
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className='Clase_Perfil'>
                                    Clase: A
                                </div>
                            </div>
                            <div className="col">
                                <div className='Rol_Perfil'>
                                    Rol: 11111111-1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiPerfil;
