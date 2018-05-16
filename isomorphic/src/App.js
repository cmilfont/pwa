import React, { Component } from 'react';
import SearchToolbar from './components/map/search-toolbar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <SearchToolbar />
          </div>
        </div>
    );
  }
}

export default App;
