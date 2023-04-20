import { useState } from 'react'
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  let handleBootstrapButtonClick = (event) => {
    event.target.style.color='pink';
    setCounter(counter+1);
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

      </header>
    </div>
  );
}

export default App;
