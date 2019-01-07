import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle/Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Toggle>
            {({ on, toggle }) => (
              <div>
                {on && <nav>nav item</nav>}
                <button onClick={toggle}>Menu</button>
              </div>
            )}
          </Toggle>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
