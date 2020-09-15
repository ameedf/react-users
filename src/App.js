import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header';
import SecurityContext from './components/Security/SecurityContext';
import Body from './components/Body/Body';

class App extends Component {
  constructor() {
    super()
    this.state = {
      role: 'ROLE_ANONYMOUS'
    }
  }

  changeSecurityRole() {
    const role = this.state.role === 'ROLE_ANONYMOUS'
      ? 'ROLE_ADMIN'
      : 'ROLE_ANONYMOUS';
    this.setState({role})
  }

  render() {
    return (
      <SecurityContext.Provider value={
        {
          userName: 'ameed',
          role: this.state.role,
          changeRole: () => this.changeSecurityRole(),
        }
      }>
        <Router>
          <div className="App">
            <Header></Header>
            <Body />
          </div>
        </Router>
      </SecurityContext.Provider>
    );
  }
}
export default App;
