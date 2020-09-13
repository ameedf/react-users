import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UsersList />
      {/* <User mode='view'/> */}
    </div>
  );
}

export default App;
