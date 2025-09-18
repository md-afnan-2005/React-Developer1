import React, { Component } from 'react'
import './UserCard.css'

export default class UserCard extends Component {
    render() {
        const { user } = this.props
        const avatar = `https://api.dicebear.com/6.x/avataaars/svg?seed=${encodeURIComponent(
            user.username
        )}`
        return (
            <div className="user-card">
                <div className="card-body">
                    <img className="avatar" src={avatar} alt={user.name} />
                    <div className="info">
                        <h5 className="card-title">{user.name}</h5>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Phone:</b> {user.phone}</p>
                        <p><b>Company:</b> {user.company.name}</p>
                        <p><b>Website:</b> {user.website}</p>
                        <p><b>Address:</b> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                    </div>
                </div>
            </div>
        )
    }
}
