import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ROne from './RouteOne.jsx';
import RTwo from './RouteTwo.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={ROne} />
            <Route path="/t" component={RTwo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
