import React, { Component } from 'react';
import './Header.css';
import logo from '../../assets/images/react.png'
import Menu from '../Menu/Menu';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="react logo" />
        <Menu />
      </header>
    );
  }
}

export default Header;
