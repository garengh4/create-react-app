import { useState } from 'react'
import logo from './logo.svg';

import './App.css';
import { StopWatch } from './components/stopWatch';

import { Login } from './components/login';
import { LoginTwo } from './components/loginTwo';

import { ViewDefects } from './components/viewDefects';
import { AddDefect } from './components/addDefect';
import { Container } from './components/container';

function App() {
  let [counter, setCounter] = useState(0);

  let handleBootstrapButtonClick = (event) => {
    event.target.style.color = 'pink';
    setCounter(counter + 1);
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        ----------------------------------------------------------------------------------------------
        <button onClick={handleBootstrapButtonClick} className="btn btn-primary">bootstrap button</button>
        <p>Num of times clicked: {counter}</p>
        <div className="container mt-4"><StopWatch /></div>

      </header>

      {/* <div className="container mt-4"><Login /></div> */}
      <div className="container mt-4"><LoginTwo /></div>

      <div className="container mt-4"><ViewDefects /></div>

      <AddDefect />

      <Container />
    </div>
  );
}

export default App;
