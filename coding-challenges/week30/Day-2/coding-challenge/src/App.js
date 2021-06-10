import logo from './logo.svg';
import './App.css';
import Button from './Button';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          text='Learn More'
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
