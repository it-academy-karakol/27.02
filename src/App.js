import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
