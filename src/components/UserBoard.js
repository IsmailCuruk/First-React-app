import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
    render() {
        return (
            <div>
                <h3>User Board</h3>
                <div><p><User name="Ismail Çürük" /></p></div>
                <div><p><User name="Habil Çürük" /></p></div>
                <div><p><User name="Mustafa Çürük" /></p></div>
            </div>
        )
    }
}