import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <ul className="nav">
            <li>
                <NavLink exact to="/combineReducersTest/" activeClassName="active"> Home </NavLink>
            </li>
            <li>
                <NavLink to="/combineReducersTest/githubProfiles" activeClassName="active"> GithubProfiles </NavLink>
            </li>
            <li>
                <NavLink to="/combineReducersTest/logout" activeClassName="active"> Logout </NavLink>
            </li>
        </ul>
      )
  }
}

export default Nav;
