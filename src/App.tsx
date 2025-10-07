import React from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react-lite';
import useRootContext from "./RootStore/hooks/useRootContext";

const App = observer(() => {
  const {testCounter} = useRootContext()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {testCounter.counter}
        <button onClick={testCounter.increment}>text</button>
      </header>
    </div>
  );
})

export default App;
