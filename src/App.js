import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import GithubProfiles from "./components/GithubProfiles";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Logout from "./components/Logout";

class App extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/combineReducersTest/" component={Home}></Route>
            <Route path="/combineReducersTest/githubProfiles" component={GithubProfiles}></Route>
            <Route path="/combineReducersTest/logout" render={() => <Logout onLogout={this.props.onLogout}/>}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
