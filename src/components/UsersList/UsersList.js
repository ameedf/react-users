import React, { Component } from 'react';
import UserItem from './UserItem';
import './Users.css'

class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  componentDidMount() {
    this.populateUsers();
  }

  async populateUsers() {
    let users = this.fetchUsersFromLocalStorage();
    if (users == null) {
      users = await this.fetchUsersFromApi();
    }
    this.setState({ users });
  }

  fetchUsersFromLocalStorage() {
    let usersJson = localStorage.getItem("users");
    if (usersJson) {
      console.log("Fetching users from local storage");
      return JSON.parse(usersJson);
    }
    return null;
  }

  async fetchUsersFromApi() {
    console.log("Fetching users from the net");
    const usersResponse = await fetch('https://randomuser.me/api/?results=15');
    const usersBody = await usersResponse.json();
    const users = usersBody.results;
    localStorage.setItem("users", JSON.stringify(users));
    return users;
  }

  render() {
    const users = this.state.users;
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        {users.length === 0 &&
          <div style={{ fontSize: 'xx-large' }}>
            Loading...
         </div>
        }
        {users.length > 0 &&
          <div className="users-list">
            {users.map((u, i) => <UserItem key={u.login.uuid} user={u} />)}
          </div>
        }
      </div>
    );
  }
}

export default UsersList;