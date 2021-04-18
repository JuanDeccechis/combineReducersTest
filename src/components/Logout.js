import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <div className="home-container">
            <h1>
                Logout
            </h1>
            <button onClick={this.props.onLogout}>Logout</button>
        </div>
      )
  }
}

export default Logout;