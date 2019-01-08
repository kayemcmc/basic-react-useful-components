import React, { Component, Fragment, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import { UserContext } from './UserContext';

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Scott Tolinsky',
    email: 'email@me.com'
  };
  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    });
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            <User />
          </header>
        </div>
      </UserProvider>
    );
  }
}

export default App;
