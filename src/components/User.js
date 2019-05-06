import React, { Component } from 'react'

export default class User extends Component {
    state = { active: true }

    toggle = () => {
        this.setState({
            present: !this.state.present
        })
    }


    render() {
        return (
            <div>
                <div>
                    <p>User: {this.props.name}</p>
                </div>

                <div>
                    <p>{this.props.name} is <b>{this.state.present ? '' : 'NOT'}</b> present</p>
                </div>
                <button onClick={this.toggle} >Toggle presence</button>
            </div >
        )
    }
}