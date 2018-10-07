import React, { Component } from 'react'
import './App.css'
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import axios from 'axios'
import BlogPosts from './components/BlogPosts/BlogPosts'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      user: {},
      loginStatus: {
        errored: Boolean,
        message: 'Waiting for login...'
      }
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.findUser = this.findUser.bind(this)
  }

  findUser() {
    let token = localStorage.getItem('token')
    if (token) {
      axios
        .get('http://localhost:1337/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          if (res.data && res.status === 200) {
            this.setState({
              isLoggedIn: true,
              user: res.data,
              loginStatus: {
                errored: false,
                message: 'User Found! Logging In.'
              }
            })
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  login(username, password) {
    axios
      .post('http://localhost:1337/auth/local', {
        identifier: username,
        password: password
      })
      .then(res => {
        if (res.data && res.data.jwt) {
          localStorage.setItem('token', res.data.jwt)
          this.findUser()
        } else {
          this.setState({
            loginStatus: {
              errored: true,
              message: 'Error invalid username or password.'
            }
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  logout() {
    localStorage.setItem('token', '')
    this.setState({
      isLoggedIn: false,
      user: {},
      loginStatus: {
        errored: Boolean,
        message: 'Waiting for login...'
      }
    })
  }

  componentDidMount() {
    this.findUser()
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          {this.state.isLoggedIn ? (
            [
              <Link to="/profile">View Profile</Link>,
              <a onClick={this.logout}>Logout</a>
            ]
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login
                user={this.state.user}
                handleLogin={this.login}
                loginStatus={this.state.loginStatus}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                user={this.state.user}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route path="/" render={() => <BlogPosts />} />
        </Switch>
      </div>
    )
  }
}

export default App
