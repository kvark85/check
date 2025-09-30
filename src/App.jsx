import './App.css'

function App() {
  return (
    <>
      <div className="header">
        <button>Sign in with google</button>
      </div>
      <div className="main-content">
        <div className="content">
          <h1>Check me</h1>
          <div className="input-row">
            <div className="styled-input ">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name"/>
            </div>
            <div className="styled-input ">
              <label htmlFor="surename">Surname</label>
              <input type="text" id="surname" placeholder="Surname"/>
            </div>
          </div>
          <div className="input-row">
            <div className="styled-input">
              <label htmlFor="code">Code</label>
              <input type="text" id="code" placeholder="Code"/>
            </div>
          </div>
          <button>🔍️ Find</button>
        </div>
      </div>
    </>
  )
}

export default App
