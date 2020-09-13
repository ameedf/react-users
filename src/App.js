import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SecurityContext from './components/Security/SecurityContext';
import User from './components/User/User';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <SecurityContext.Provider value={
      {
        userName: 'ameed',
        // role: 'ROLE_ADMIN'
        role: 'ROLE_ANONYMOUS'
      }
    }>

      <div className="App">
        <Header></Header>
        <UsersList />
        {/* <User mode='view'/> */}
      </div>
    </SecurityContext.Provider>
  );
}

export default App;
