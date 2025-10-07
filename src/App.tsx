import React from 'react';
import './App.css';
import {observer} from 'mobx-react-lite';
import useRootContext from "./RootStore/hooks/useRootContext";
import {InputRow} from "./components/InputRow";
import {MainInput} from "./components/MainInput";

const App = observer(() => {
  const {testCounter} = useRootContext()

  return (
    <>
      <div className="header">
        <button onClick={testCounter.increment}>Sign in with google ({testCounter.counter})</button>
      </div>
      <div className="main-content">
        <div className="content">
          <h1>Check me</h1>
          <InputRow>
            <MainInput id="name" label="Name" />
            <MainInput id="surname" label="Surname" />
          </InputRow>
          <InputRow>
            <MainInput id="code" label="Code" />
          </InputRow>
          <button>🔍️ Find</button>
        </div>
      </div>
    </>
  );
})

export default App;
