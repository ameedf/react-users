import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  getUserId() {
    return this.props.match.params.userId;
  }
  
  getMode() {
    return this.props.match.params.mode;
  }

  componentDidMount() {
    const userId = this.getUserId();
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.login.uuid === userId)
    if (user) {
      this.setState({ user });
    }
  }

  componentWillUnmount() {
    const users = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex((u) => u.login.uuid === this.state.user.login.uuid);
    users[userIndex] = this.state.user;
    localStorage.setItem('users', JSON.stringify(users));
  }

  genderChangedHandler(e) {
    const user = this.state.user;
    user.gender = e.target.value;
    this.setState({ user });
  }

  firstNameChangedHandler(e) {
    const user = this.state.user;
    user.name.first = e.target.value;
    this.setState({ user });
  }

  lastNameChangedHandler(e) {
    const user = this.state.user;
    user.name.last = e.target.value;
    this.setState({ user });
  }

  render() {
    const user = this.state.user;
    if (user == null) {
      return <div>Loading date for user with ID {this.getUserId()}...</div>;
    }
    const disabled = this.getMode() === 'view';
    return (
      <div>
        <div>
          Gender:
            <select value={user.gender} disabled={disabled} onChange={(e) => this.genderChangedHandler(e)}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div>
          First name:
          <input type="text" value={user.name.first} disabled={disabled} onChange={(e) => this.firstNameChangedHandler(e)} />
        </div>
        <div>
          Last name:
          <input type="text" value={user.name.last} disabled={disabled} onChange={(e) => this.lastNameChangedHandler(e)} />
        </div>
      </div>
    );
  }
}

export default User;