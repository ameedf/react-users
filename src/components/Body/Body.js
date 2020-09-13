import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import About from '../About/About';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import UsersList from '../UsersList/UsersList';

class Body extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <UsersList />
          {/* <User mode='view'/> */}
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    );
  }
}

export default Body;