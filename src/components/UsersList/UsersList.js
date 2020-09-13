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
    let usersJson = localStorage.getItem("users");
    let users = null;
    if (!usersJson) {
      console.log("Fetching users from the net");
      users = await this.fetchUsers();
      usersJson = JSON.stringify(users);
      localStorage.setItem("users", usersJson);
    } else {
      console.log("Fetching users from local storage");
      users = JSON.parse(usersJson);
    }
    this.setState({ users });
  }

  async fetchUsers() {
    const usersResponse = await fetch('https://randomuser.me/api/?results=15');
    const usersBody = await usersResponse.json();
    return usersBody.results;
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