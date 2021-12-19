import React, { Component } from "react";
import {PerfilEjemplo} from "./PerfilEjemplo";
import './MiPerfil.css';
import fotoPerfil from '../../logos/perfil.png'

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
                
                <section className="grid-info-estudiante">
                    <div className='dato_Perfil'>
                        Nombre: Rodrigo Andrés Pérez Jamett
                    </div>

                    <img className="fotoPerfil" src={fotoPerfil}></img>

                    <div className='dato_Perfil'>
                        Campus: San Joaquin
                    </div>
                    <div className='dato_Perfil'>
                        Prioridad: 9000
                    </div>
                    <div className='dato_Perfil'>
                        Carrera: Informatica
                    </div>
                    <div className='dato_Perfil'>
                        Clase: A
                    </div>
                    <div className='dato_Perfil'>
                        Rol: 123456789-0
                    </div>
                    <div className='dato_Perfil'>
                        Certificación EAA: 14/02/2020
                    </div>
                    <div className='dato_Perfil'>
                        Vigencia: 14/02/2022
                    </div>
                    <a className='linkCertificado' href="#">
                        Ver certificado actual
                    </a>
                    <div className='ActualizarCertButton'>
                        Actualizar certificación
                    </div>
                </section>
            </div>
        )
    }
}

export default MiPerfil;
