import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions";

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
            <button onClick={this.props.handleLogoutDispatch}>Logout</button>
        </div>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogoutDispatch: () => {
      return dispatch(logout());
    },
  };
}

export default connect(null, mapDispatchToProps) (Logout);