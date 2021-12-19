import React, { Component } from "react";
import {PostulacionesDeEjemplo} from "../Ejemplos";
import './Estado.css'

import check from "./Icons/check.png"
import cross from "./Icons/crossed.png"
import dots from "./Icons/more.png"

class Estado extends Component {
    
    constructor(){
        super();
        this.sendData = this.sendData.bind(this);
        this.GetImage = this.GetImage.bind(this);
        this.CheckIfSelected = this.CheckIfSelected.bind(this);
        this.state = { datoSelecionado: -1 };
    }

    componentDidMount(){
        
    }

    sendData(value, index) {
        this.props.sendData(value, index);
        this.setState({datoSelecionado: index});
    }

    GetImage(value){
        if(value === 'Rechazada'){
            return (
                <img className="imgEstado" src={cross}></img>
            )
        } else if(value === 'Aprobada') {
            return(
                <img className="imgEstado" src={check}></img>
            )
        } 
        return (
            <img className="imgEstado" src={dots}></img>
        )
    }

    CheckIfSelected(index, name) {
        if(name !== "arrow"){
            if(this.state.datoSelecionado !== -1 && this.state.datoSelecionado === index){
                return "DatoClicado";
            }
            return "Datos";
        } 
        if(this.state.datoSelecionado !== -1 && this.state.datoSelecionado === index){
            return "arrowClicado";
        }
        return "arrow";
    }

    render(){

        return(
            <nav className='primaryNav'>
                <ul className='ulContainer'>
                    <div className="borde">
                    
                        <li className='Titulos' key='1'>
                            
                            <div className="estado titulo">
                                Estado
                            </div>

                            <div className="asignatura titulo">
                                Asignatura
                            </div>
                            
                        </li>
                    
                        <div className="divScroll">
                        {PostulacionesDeEjemplo.map((item, index) => {
                            
                            if(this.props.toRemoveIndex !== -1 && this.props.toRemove === item){
                                
                                if(PostulacionesDeEjemplo[this.props.toRemoveIndex]){
                                    delete PostulacionesDeEjemplo[this.props.toRemoveIndex];
                                    return(<div></div>)
                                }
                            }

                            return (
                                
                                <li className={this.CheckIfSelected(index, "")} key={index}  onClick={() =>  this.sendData(item, index)}>
                                    
                                    <div className="estado" key={-index}>
                                        {this.GetImage(item.estado)}
                                    </div>

                                    <div className="asignatura" key={1000-index}>
                                        {item.title}
                                        <div className={this.CheckIfSelected(index, "arrow")}>{">"}</div>
                                        
                                    </div>  

                                </li>
                            )
                        }
                        )}
                        </div>
                    </div>
                </ul>
                
            </nav>
        )
    }
}

export default Estado;