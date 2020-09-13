import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header/Header';
import SecurityContext from './components/Security/SecurityContext';
import Body from './components/Body/Body';

function App() {
  return (
    <SecurityContext.Provider value={
      {
        userName: 'ameed',
        // role: 'ROLE_ADMIN'
        role: 'ROLE_ANONYMOUS'
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

export default App;
