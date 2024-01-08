import React, { Component } from 'react'
import "./Navbarstyle.css";
import { Menuitems } from './Menuitems';
import {Link} from "react-router-dom";
export class Navbar extends Component {
  state={ clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <div>
          <nav className="NavbarItems">
         <h1 className="Navbar-logo">Tours And Travel </h1>
         <div className="menu-icons" onClick={this.handleClick}> 
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>  
          <ul className={this.state.clicked ?
             " nav-menu active" : "nav-menu" }>

            {Menuitems.map((item, index)=>{
                return(
                    <li key={index}>
                    <Link className={item.cName} to={item.url}>
                        <i className={item.icon}>
                            </i> {item.title}</Link>
                    </li>
                    
            );
            })}
           
              <Link to="/Signup"> <button>signup</button></Link>
            
            
             </ul>
                </nav> 
      </div>
    )
  }
}

export default Navbar;
