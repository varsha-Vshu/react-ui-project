import React, { Component } from 'react'
import "./Destinationstyle.css";

export class DestinationData extends Component {
  render() {
    return (

      <div className="First-des">
       <div className={this.props.classname}>
         <div className="Image">
        <img alt ="img" src={this.props.img4}/>
       
        <img alt ="imgs" src={this.props.img1}/>
      </div>
      </div>
        <div className="des-text">
          <h2>{this.props.heading} </h2>
          <p>{this.props.text}</p>
        </div>
      
      </div>
    )
  }
}

export default DestinationData;
