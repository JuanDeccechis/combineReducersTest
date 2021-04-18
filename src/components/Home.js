import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <div className="home-container">
            <h1>
                Estas en home
            </h1>
            <Link to="/GithubProfiles" className="button">GithubProfiles</Link>
        </div>
      )
  }
}

const HOC = (comp) => {
  return (
    <div className="debug">
      <Home />
    </div>
  )
}

export default HOC;