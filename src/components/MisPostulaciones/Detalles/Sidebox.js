import React, { Component } from 'react';
import Detalle from './Detalle/Detalle';
import PopUp from './PopUp/PopUp';
import './SideBox.css';


class SideBox extends Component {
    constructor(){
        super();
        this.state = {
            showPopUp: false,
            showDetalle: true,
            lastData: "",
        }
        this.RenderPopUp = this.RenderPopUp.bind(this);
        this.BotonPopUp = this.BotonPopUp.bind(this);
    }

    RenderPopUp(selected){
        this.setState({showPopUp: true});
        this.setState({showDetalle: true});
        this.setState({lastData: this.props.dataFromEstado});
    }
    BotonPopUp(flag){
        this.setState({showPopUp: false});
        this.setState({showDetalle: true});
        if(flag == true){
            console.log("KIEEEE");
            console.log(flag);
            this.props.RemoveData(this.state.lastData);
            this.setState({lastData: ""});
        }
    }

    render() {

        if (this.state.showPopUp === true && this.props.dataFromEstado === this.state.lastData){
            return (<PopUp funcBotonPopUp= {this.BotonPopUp}></PopUp>)
        }else if (this.state.showDetalle === true){
            return (<Detalle dataFromEstado={this.props.dataFromEstado} funcBoton = {this.RenderPopUp}></Detalle>);
        }
    }
}

export default SideBox;