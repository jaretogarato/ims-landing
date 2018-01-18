import React, { Component } from 'react';
import Home from './Home';
import NoMatch from './NoMatch';
import Success from './Success';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../store';

class App extends Component {
  render() {
    return (
      // <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/success' component={Success} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
