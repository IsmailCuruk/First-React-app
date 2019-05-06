import React, { Component } from 'react'

export default class Clock extends Component {
    state = {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
    }
formatDigit = (digit) => digit <10 ? '0' + digit : digit

    tick = () => {
        this.setState({
            hours: this.formatDigit(new Date().getHours()),
            minutes: this.formatDigit(new Date().getMinutes()),
            seconds: this.formatDigit(new Date().getSeconds())
        })
    }

    componentDidMount(){
        setInterval(this.tick, 1000)
    }
    render() {

        const { hours, minutes, seconds} = this.state
        return (
            < h1 >
            <span id="hours">{hours}</span>
            :
            <span id="minutes">{minutes}</span>
            :
            <span id="seconds">{seconds}</span>
        </h1 >
        )
    }
}