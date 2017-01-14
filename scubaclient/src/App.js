import React, { Component } from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Scuba Events"/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
