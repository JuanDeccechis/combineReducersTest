import React, { Component } from "react";
import { connect } from "react-redux";

class GithubProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      password: ''
    };
    this.showPasswords = this.showPasswords.bind(this);
  }

  showPasswords() {
    const { pass, encryptedPass } = this.props;
    /*//desencriptar la pass encriptada
    let key = {
      publicKey: "public",
      privateKey: "private"
    }
    let publicKeyFromFront = "public";
    let password = "asd";
    if (key.publicKey == publicKeyFromFront){
      password = encryptedPass.substring(0, encryptedPass.indexOf(key.privateKey));
    }

    //password = window.atob(encryptedPass);
*/
let CryptoJS = require("crypto-js");
    let bytes = CryptoJS.AES.decrypt(encryptedPass, 'Secret key');
    let password = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (pass == password){
      alert("exito!");
      this.setState({ showPass: true, password: password });
    }
  }

  render() {
    const { pass, encryptedPass } = this.props;
    const { showPass, password } = this.state;
    return (
      <div>
        <div className="row"> GITHUB PROFILES</div>
        <button onClick={this.showPasswords}>Ver Contraseñas</button>
        {showPass &&
          <div className="container-passwords">
            <span>Pass tipeada: </span>
            <p className="origin-password"> {pass} </p>
            <span>Pass codificada: </span>
            <p className="encrypted-password"> {encryptedPass} </p>
            <span>Pass decodificada: </span>
            <p className="decrypted-password"> {password} </p>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      pass: state.authenticationReducer.pass,
      encryptedPass: state.authenticationReducer.encryptedPass
  }
}

export default connect(mapStateToProps) (GithubProfiles);
