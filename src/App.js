import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const todos = [
  {
    todoTitle: 'My first entry',
    todoResponsible: 'ajoseph',
    todoDescription: 'Get it done',
    todoPriorty: 'low'
  },
  {
    todoTitle: 'My second entry',
    todoResponsible: 'cbspeller',
    todoDescription: 'Keep getting stronger',
    todoPriorty: 'high'
  },
  {
    todoTitle: 'My 3rd entry',
    todoResponsible: 'saspeller',
    todoDescription: "Don't give up",
    todoPriorty: 'mediut'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>{' '}
        </header>{' '}
        <p className="App-intro">
          To get started, edit <code> src / App.js </code> and save to reload.{' '}
        </p>{' '}
      </div>
    );
  }
}

export default App;
