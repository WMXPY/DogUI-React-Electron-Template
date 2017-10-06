import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import ROne from './RouteOne';
import RTwo from './RouteTwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route exact={true} path="/" component={ROne} />
            <Route path="/t" component={RTwo} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
