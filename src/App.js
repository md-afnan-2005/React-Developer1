import React, { Component } from 'react'
import Users from './Users'
import './App.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [], loading: true }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(d => this.setState({ users: d, loading: false }))
      .catch(() => this.setState({ loading: false }))
  }

  render() {
    return (
      <div className="container py-4">
        <h1 className="mb-4 text-center">User Profiles</h1>
        {this.state.loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <Users users={this.state.users} />
        )}
      </div>
    )
  }
}
