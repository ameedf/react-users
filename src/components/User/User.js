import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        gender: 'male',
        name: {
          first: 'josh',
          last: 'long'
        }
      }
    };
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
    console.log("User - render: ", user);
    const disabled = this.props.mode === 'view'; 
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