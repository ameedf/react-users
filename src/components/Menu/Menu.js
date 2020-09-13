import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <div>
        <nav style={{ width: '50%' }}>
          <ul className="menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/admin">Admin</Link></li>
            <li className="menu-item"><Link to="/users">Users</Link></li>
            <li className="menu-item"><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;