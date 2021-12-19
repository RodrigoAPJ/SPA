import React, { Component } from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Postulaciones from "./components/MisPostulaciones/Postulaciones";
import AyudantiasDisponibles from "./components/AyudantiasDisponibles/AyudantiasDisponibles"
import MiPerfil from "./components/MiPerfil/MiPerfil"
import Menu from "./components/Menu/Menu"
import logoFooter from "./logos/logos.png"
import logoFB from "./logos/fb.png"
import logoIG from "./logos/ig.png"
import logoTWT from "./logos/twt.png"

class App extends Component {
	constructor(){
		super();
		this.changePage = this.changePage.bind(this);
		this.RenderPage = this.RenderPage.bind(this);
	}

  	changePage(val){
		console.log(val);
		this.setState({toRender: val})
	}

	RenderPage(){
		let render;		
		render = <Menu></Menu>

		if(this.state) {
			if(this.state.toRender === "MisPostulaciones")
				render = <Postulaciones></Postulaciones>
			else if(this.state.toRender === "AyudantiasDisponibles")
				render = <AyudantiasDisponibles></AyudantiasDisponibles>
			else if(this.state.toRender === "MiPerfil")
				render = <MiPerfil></MiPerfil>
			else if(this.state.toRender === "Menu")
				render = <Menu></Menu>
		}

		return render
	}

	render() {
		return (
			<div className="App">
				<Navbar sendData={this.changePage}/>

				<div className="RenderContainer">
					<div className="colorBg">
						{this.RenderPage()}
					</div>	
					
				</div>

				<div className="Footer">
					<img className="logoFooter" src={logoFooter}></img>
					<div className="Redes">
						<img className="fb" src={logoFB}></img>
						<img className="twt" src={logoTWT}></img>
						<img className="ig" src={logoIG}></img>
					</div>
				</div>

			</div>
		)
  	}
}

export default App;
