import React, { Component } from "react";
import './Menu.css';
import fotoMenu from '../../logos/fondo_chico.jpg'

class Menu extends Component {
    constructor(){
        super();
	}

    render() {
		return (
            <div>
                <div className="infoMenu">
                    <img className="fotoMenu" src={fotoMenu}></img>
                    <h1 className="tituloMenu">SPA UTFSM</h1>
                    
                    <p className="ident">
                        <strong>Inscribete</strong> para ser ayudante ya! <strong>enseña o corrige</strong> las tareas de tus compañeros.<br></br><br></br>
                        <p className="ident remark"><strong>Requisitos:</strong></p>
                        <p className="ident2">
                            Si es tu <strong>primera vez siendo ayudante</strong> contar con curso de Herramientas Generales para Ayudantes USM.
                        </p>
                        <p className="ident2">
                            Si ya<strong> has sido ayudante antes</strong>, tener <strong>Certificado EAA al día </strong>(haberlo aprobado no más que hace 2 años).
                        </p>
                    </p>
                    
                </div>

                <div className="containerTimeLine">
                    <div className="auxTLC">
                    <div className="page-header">
                        <h1 id="timeline">Proceso de postulación</h1>
                    </div>
                    <ul className="timeline">
                        <li>
                        <div className="timeline-badge danger"><i className="glyphicon glyphicon-check"></i></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            <h4 className="timeline-title">1° fase de postulaciones</h4>
                            <p><small className="fecha"><i className="glyphicon glyphicon-time"></i> 16/12/2021 - 06/01/2022</small></p>
                            </div>
                            <div className="timeline-body">
                            <p>Aquellos estudiantes con la certificación EAA al día podran postular para ser ayudantes.</p>
                            </div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            <h4 className="timeline-title">Resultados postulaciones</h4>
                            <p><small className="fecha"><i className="glyphicon glyphicon-time"></i> 07/01/2022 - 14/01/2022</small></p>
                            </div>
                            <div className="timeline-body">
                            <p>Los resultados de las postulaciones se haran visibles para los estudiantes.</p>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            <h4 className="timeline-title">2° fase de postulaciones</h4>
                            <p><small className="fecha"><i className="glyphicon glyphicon-time"></i> 17/01/2022 - 21/01/2022</small></p>
                            </div>
                            <div className="timeline-body">
                            <p>En este periodo será posible postular a aquellos ramos existan vacantes no cubiertas.</p>
                            </div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                            <h4 className="timeline-title">Resultados postulaciones</h4>
                            <p><small className="fecha"><i className="glyphicon glyphicon-time"></i> 22/02/2022 - 01/03/2022</small></p>
                            </div>
                            <div className="timeline-body">
                            <p>Los resultados de las postulaciones se haran visibles para los estudiantes.</p>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Menu;