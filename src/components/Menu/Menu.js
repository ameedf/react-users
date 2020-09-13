import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <nav style={{width: '50%'}}>
        <ul className="menu">
          <li className="menu-item">Users</li>
          <li className="menu-item">Admin</li>
          <li className="menu-item">About</li>
        </ul>
      </nav>
    );
  }
}

export default Menu;