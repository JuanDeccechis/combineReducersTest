import React, { Component } from "react";
import App from './App'
import "./App.css";
import { connect } from "react-redux";
import { login } from "./actions";

class LoginManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    }

    handleLogin(event) {
        event.preventDefault();
        if(this.state.pass != '' && this.state.username != '') {
            this.props.handleLoginDispatch(this.state.username, this.state.pass);
          }
        else {
            alert('You need to complete the information');
            console.log(this.state.pass);
            console.log(this.state.username);
        }

    }

    handleChangeInputValue(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value });
    }

    render() {
        const { stateLoggedIn } = this.props;
        return (
            <div className="container">
                <p>Bienvenido</p>
                {stateLoggedIn ?
                    <App />
                    :
                    <div>
                        <input id="username" name="username" placeholder="nombre" value={this.state.username} onChange={this.handleChangeInputValue} />
                        <input id="pass" name="pass" placeholder="edad" value={this.state.pass} onChange={this.handleChangeInputValue} />
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stateLoggedIn: state.authenticationReducer.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
      handleLoginDispatch: (username, pass) => {
        return dispatch(login(username, pass));
      },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginManager);
