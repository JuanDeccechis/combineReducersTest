import React, { Component } from "react";
import App from './App'
import "./App.css";

class LoginManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    }

    handleLogin(event) {
        event.preventDefault();
        console.log(this.state.age);
        this.setState({ logged: true });
    }

    handleLogout() {
        this.setState({ logged: false });
    }

    handleChangeInputValue(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <p>Bienvenido</p>
                {this.state.logged ?
                    <div>
                        <button onClick={this.handleLogout}>Logout</button>
                        <App onLogout={this.handleLogout} user={this.state.name} age={this.state.age} />
                    </div>
                    :
                    <div>
                        <input id="name" name="name" placeholder="nombre" value={this.state.name} onChange={this.handleChangeInputValue} />
                        <input id="age" name="age" placeholder="edad" value={this.state.age} onChange={this.handleChangeInputValue} />
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                }

            </div>
        );
    }
}

export default LoginManager;
