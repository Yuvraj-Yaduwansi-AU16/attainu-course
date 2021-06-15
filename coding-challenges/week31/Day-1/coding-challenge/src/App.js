import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [Btn, setBtn] = useState(false);
  const changeBtn = (e) => {
    e.preventDefault();
    setBtn(true);
    setTimeout(() => {
      setBtn(false);
    }, 5000);
  };
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
          onClick={changeBtn}
          disabled={Btn}
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

export default App;
