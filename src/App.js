import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar/Navbar";

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
		render = <h1>Default Page</h1>

		
		return render
	}

	render() {
		return (
			<div className="App">
				<Navbar sendData={this.changePage}/>
			</div>
		)
  	}
}

export default App;
