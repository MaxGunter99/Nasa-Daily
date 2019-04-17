import React, { Component } from 'react';
import './App.css';
import NASAPhoto from './components/NASAPhoto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NASAPhoto/>
        </header>
      </div>
    );
  }
}

export default App;
