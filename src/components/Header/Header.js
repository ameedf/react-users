import React, { Component } from 'react';
import './Header.css';
import logo from '../../assets/images/react.png'
import Menu from '../Menu/Menu';

class Header extends Component {
  render() { 
    return ( 
      <div className="header">
        <img className="logo" src={logo} alt="react logo"/>
        <Menu />
      </div>
     );
  }
}
 
export default Header;
