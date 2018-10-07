import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.handleLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <h1>Your Account</h1>
        <p>Username: {this.props.user.username}</p>
        <p>Email: {this.props.user.email}</p>
        {/* <p>Logged In?: {this.props.user.authenticated.toString()}</p> */}
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        <p>{this.props.loginStatus.message}</p>
      </div>
    )
  }
}

export default Login
