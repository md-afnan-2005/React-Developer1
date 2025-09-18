import React, { Component } from 'react'
import UserCard from './UserCard'
import './Users.css'

export default class Users extends Component {
    render() {
        return (
            <div className="users-container">
                {this.props.users.map(u => (
                    <UserCard key={u.id} user={u} />
                ))}
            </div>
        )
    }
}
