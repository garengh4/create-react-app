import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { todoAppStore } from './store/todoAppStore';
import { Container } from './components/container';

function App() {
  return (
    <BrowserRouter>
      <Provider store={todoAppStore}>
        <Container />
      </Provider>
    </BrowserRouter>
  
  );
}

export default App;

// default export can be done anywhere
// these 2 types of exports are imported in different ways
// import {namedExport} from 'someFile' 
// import whateverNameIwant from 'someFile'
