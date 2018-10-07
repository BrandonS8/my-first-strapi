import React, { Component } from 'react'
import moment from 'moment'
class Profile extends Component {
  render() {
    console.log(this.props.user)
    if (this.props.isLoggedIn) {
      return (
        <div>
          <h1>User Profile</h1>
          <h2>
            {this.props.user.username}
            's Profile
          </h2>
          <p>Role: {this.props.user.role.name}</p>
          <p>Email: {this.props.user.email}</p>
          <p>
            Joined:{' '}
            {moment.utc(this.props.user.createdAt).format('MMMM DD, YYYY')}
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Not Logged In</h1>
        </div>
      )
    }
  }
}

export default Profile
