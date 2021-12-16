import React, { Component } from "react";
import Estado from "./Estado/Estado";
import Detalle from "./Detalles/Detalle/Detalle";
import SideBox from "./Detalles/Sidebox.js";
import './Postulaciones.css'

class Postulaciones extends Component {
    
    constructor(){
        super();
        this.changePage = this.changePage.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.RemoveData = this.RemoveData.bind(this);
    }
    
    state = {data:null, toRemove:"", toRemoveIndex: -1}
    
    componentDidMount(){
        
    }
    
    changePage(value){
        this.props.sendData(value)
    }

    handleClick(val, index){
        this.setState({ data: val, toRemoveIndex: index})
    }

    RemoveData(val){
        this.setState({toRemove: val});
        console.log(this.state.toRemove);
    }

    render(){
        return(
            <div className='postu'>
                <div className='ESTADO'>
                    <Estado sendData={this.handleClick} toRemoveIndex={this.state.toRemoveIndex} toRemove={this.state.toRemove}></Estado>    
                </div>   
                <div className='DETALLE'>
                    <SideBox RemoveData ={this.RemoveData} dataFromEstado={this.state.data}></SideBox>
                </div>
            </div>
        )
    }
}

export default Postulaciones;