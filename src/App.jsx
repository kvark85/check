import './App.css'
import {MainInput} from './components/MainInput'
import {InputRow} from './components/InputRow'

function App() {
  return (
    <>
      <div className="header">
        <button>Sign in with google</button>
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
  )
}

export default App
