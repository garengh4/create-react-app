import { useState } from 'react'
import logo from './logo.svg';

import './App.css';
import { StopWatch } from './components/stopWatch';

import { Login } from './components/login';
import { LoginTwo } from './components/loginTwo';

import { ViewDefects } from './components/viewDefects';
import { AddDefect } from './components/addDefect';
import { Container } from './components/container';
import { DefectsContainer } from './components/defectsContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { defectsAppStore } from './store/defectsAppStore';


function App() {
  let [counter, setCounter] = useState(0);

  let handleBootstrapButtonClick = (event) => {
    event.target.style.color = 'pink';
    setCounter(counter + 1);
  }



  return (
    <BrowserRouter>
      <Provider store={defectsAppStore}>
        <DefectsContainer />
        {/* <DefectsContainer /> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
