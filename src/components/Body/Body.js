import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import About from '../About/About';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import User from '../User/User';
import UsersList from '../UsersList/UsersList';

class Body extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" exact component={UsersList} />
        <Route path="/users/:userId/:mode" component={User} />
        <Route path="/admin" component={Admin} />
      </Switch>
    );
  }
}

export default Body;