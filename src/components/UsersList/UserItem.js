import React, { Component } from 'react';

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const user = this.props.user;
    const userName = `${user.name.first} ${user.name.last}`;
    return (
      <div className="user-card">
        <table>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}><img src={user.picture.medium} alt={userName} /></td>
              <td>
                <div>
                  <div>
                    {userName}
                  </div>
                  <div>
                    {user.dob.age} years old
                  </div>
                  <div>
                    from {user.location.country}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserItem;