import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Play from './views/Play';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;


class App extends Component {
  render() {
    return (
      <Router>
      <div id="app" className="container">
        <div className="display-3">
          <img src={logo} className="App-logo" alt="logo" />
          What do you Meme
        </div>
        <Nav />
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/play/" component={Play} />
      </div>
      </Router>  
   );
  }
}

export default App;
