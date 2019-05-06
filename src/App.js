import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import { Component } from 'react'
import User from './components/User'
import UserBoard from './components/UserBoard'
import Clock from './components/Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>
            Hello world!
          </p>
        </header>

        <main>
          <Title content="WELCOME" />
          <UserBoard />
          <Clock />
          <LightSwitch />
        </main>
      </div>
    );
  }
}

export default App;
