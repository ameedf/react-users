import React, { Component } from 'react';
import './Header.css';
import logo from '../../assets/images/react.png'
import Menu from '../Menu/Menu';
import SecurityContext from '../Security/SecurityContext';

class Header extends Component {
  static contextType = SecurityContext;
  render() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="react logo" />
        <Menu />
        <button onClick={() => this.context.changeRole()}>Change Role</button>
      </header>
    );
  }
}

export default Header;
