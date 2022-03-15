import React, { Component } from "react";
import "./App.css";
import Navbarmenu from "./Navbarmenu";
import Bollywood from "./Bollywood";
import Home from "./Home";
import Technology from "./Technology";
import Hollywood from "./Hollywood";
import Food from "./Food";
import Fitness from "./Fitness";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbarmenu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/bollywood" component={Bollywood} />
            <Route path="/technology" component={Technology} />
            <Route path="/hollywood" component={Hollywood} />
            <Route path="/fitness" component={Fitness} />
            <Route path="/food" component={Food} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
