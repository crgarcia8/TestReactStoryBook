import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (      
      <div className="HeaderContainer">
      <div className="wrapper">
          <header>
            <span>
             <img className="logo" src={'./Images/logo_lion.png'} />
             <h5>Client Configuration</h5>
            </span>
            
            <div className="slide">
              <h5> User Name</h5>
              <h5>|</h5>
              <h5><Link  to={`/`}>Log Out</Link></h5>
            </div>
          
          </header>
      </div>
    </div> 
              
    );
  }
}
