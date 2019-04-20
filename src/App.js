import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './component/Landing';
import Navbar from './component/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Landing />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
