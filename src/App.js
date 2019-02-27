import React, { Component } from 'react';
import './App.css';

import Toolbar from './Toolbar/Toolbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

class App extends Component {
  state = {
    drawerOpen: false
  }

  toggleHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          toggleHandler={this.toggleHandler}
          drawerOpen={this.state.drawerOpen} />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
