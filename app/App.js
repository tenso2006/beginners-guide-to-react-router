import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// const App = () => <h1>Hello World!</h1>
class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/address' component={Address} />
      </Router>
    );
  }
}

const Home = () => <h1>Welcome Home buddy</h1>
const Address = () => <h2>Reach me at 123, GH st, SF, CA 90210 </h2>
export default App;
