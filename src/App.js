
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { todoAppStore } from './store/todoAppStore'
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
