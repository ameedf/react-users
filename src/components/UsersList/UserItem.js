import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SecurityContext from '../Security/SecurityContext';

class UserItem extends Component {

  static contextType = SecurityContext;

  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    }
  }

  roleIn(roles) {
    const aRole = roles.find(role => role === this.context.role);
    return aRole !== undefined;
  }

  handleUser(mode) {
    const user = this.props.user;
    const redirect = `/users/${user.login.uuid}/${mode}`;
    this.setState({ redirect });
  }

  render() {
    const user = this.props.user;
    const redirect = this.state.redirect;
    if (redirect != null) {
      return <Redirect to={redirect} />
    }

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
                  <button onClick={() => this.handleUser('view')}>View</button>
                }
                {this.roleIn(['ROLE_ADMIN']) &&
                  <button onClick={() => this.handleUser('edit')}>Edit</button>
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