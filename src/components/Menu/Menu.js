import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SecurityContext from '../Security/SecurityContext';
import './Menu.css'

class Menu extends Component {
  static contextType = SecurityContext;
  render() {
    return (
      <div>
        <nav style={{ width: '50%' }}>
          <ul className="menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            {this.context.role === 'ROLE_ADMIN' &&
              <li className="menu-item"><Link to="/admin">Admin</Link></li>
            }
            <li className="menu-item"><Link to="/users">Users</Link></li>
            <li className="menu-item"><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;