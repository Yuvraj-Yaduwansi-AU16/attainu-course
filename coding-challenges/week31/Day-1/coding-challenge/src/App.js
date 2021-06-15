import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    disabled: false,
    changeBtn: (e) => {
      e.preventDefault();
      this.setState({ disabled: true });
      setTimeout(() => {
        this.setState({ disabled: false });
      }, 5000);
    },
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input
            type='button'
            value='Button'
            onClick={this.state.changeBtn}
            disabled={this.state.disabled}
          />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
