import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import UserData from './components/UserData';
import Todo from './components/Todo';

export const add = (a, b) => {
  return a + b;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  handleClick = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  multiply = (a, b) => {
    return a * b;
  }

  render(){
    return (
      <div className="App">
        <p>Welcome to My App!</p>
        <h1>React Hooks and Mocha Demo</h1>
        <button onClick={this.handleClick}>First Button</button>
        <button disabled={this.state.disabled}>Second Button</button>

        <Profile></Profile>
  
        <UserData></UserData>
  
        <Todo></Todo>
      </div>
    );
  }
  
}

export default App;
