import React, { Component } from 'react';
import SecurityContext from '../Security/SecurityContext';

class UserItem extends Component {

  static contextType = SecurityContext;

  constructor(props) {
    super(props);
    this.state = {}
  }

  roleIn(roles) {
    const aRole = roles.find(role => role === this.context.role);
    console.log(aRole);
    return aRole !== undefined;
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
                  <div>{userName}</div>
                  <div>{user.dob.age} years old</div>
                  <div>from {user.location.country}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                {this.roleIn(['ROLE_ADMIN', 'ROLE_ANONYMOUS']) &&
                  <button>View</button>
                }
                {this.roleIn(['ROLE_ADMIN']) &&
                  <button>Edit</button>
                }
                {this.roleIn(['ROLE_ADMIN']) &&
                  <button>Delete</button>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserItem;