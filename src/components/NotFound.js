import React, { Component } from "react";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
      return(
        <div className="home-container">
            <h1>
                Se equivocó de ruta
            </h1>
        </div>
      )
  }
}

export default NotFound;