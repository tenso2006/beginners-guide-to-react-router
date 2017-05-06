import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

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
    <Link to='/address'>Twitter Feed</Link>
    <Link to='/address/instagram'>Instagram Feed </Link>
    <h2>Reach me at 123, GH st, SF, CA 90210 </h2>
    {props.children}
  </div>
)

const NotFound = () => <h2>Sorry! This Page not is found!</h2>

const Nav = () => (
  <div>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/address'>My Address</Link>
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/about'>About</Link>
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
