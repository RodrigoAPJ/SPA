import React, { Component } from "react";
import {MenuItems} from "./MenuItems";
import './Navbar.css'

class Navbar extends Component {
    
    constructor(){
        super();
        this.changePage = this.changePage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    state = {clicked: false}

    componentDidMount(){
        
    }
    
    changePage(value){
        this.props.sendData(value)
    }

    handleClick(){
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                {/*
                <h1 className="navbar-logo">SPA UTFSM <i className="fas fa-file-signature"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                */}
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className="navLi" key={index}>
                                <a className={item.cName} href="#" onClick={() => this.changePage(item.url)}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    }
                    )}
                </ul>
            </nav>
        )
    }
}

export default Navbar;