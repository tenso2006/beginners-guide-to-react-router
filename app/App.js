import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router';

// const App = () => <h1>Hello World!</h1>
class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed}/>
            <Route path='instagram' component={InstagramFeed} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const Home = () => <h1>Welcome Home buddy</h1>

const Address = (props) => (
  <div>
    <br />
    <IndexLink activeClassName={'active'} to='/address'>Twitter Feed</IndexLink>
    <IndexLink activeClassName={'active'} to='/address/instagram'>Instagram Feed </IndexLink>
    <h2>Reach me at 123, GH st, SF, CA 90210 </h2>
    {props.children}
  </div>
)

const NotFound = () => <h2>Sorry! This Page not is found!</h2>

const Nav = () => (
  <div>
    <IndexLink activeClassName={'active'} to='/'>Home</IndexLink>
    <IndexLink activeClassName={'active'} to='/address'>My Address</IndexLink>
    <IndexLink activeClassName={'active'} to='/about'>About</IndexLink>
  </div>
)

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

const TwitterFeed = () => <h2>Twitter feed is On ;)</h2>
const InstagramFeed = () => <h2>Instagram feed is so colorful :) :)</h2>
export default App;
