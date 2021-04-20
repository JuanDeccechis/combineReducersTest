import { generateId } from "../helpers";
import { types } from "../actions";

var CryptoJS = require("crypto-js");
const initialState = {
    isLoggedIn: false,
    username: '',
    pass: '',
    encryptedPass: ''
  };
  
const reducer = (state = initialState, action) => {
    if (action.type === types.LOGOUT) {
        return { ...state, isLoggedIn: initialState.isLoggedIn, pass: initialState.pass, username: initialState.username, encryptedPass: initialState.encryptedPass };
      } 
      if (action.type === types.LOGIN) {
        let encrypted = CryptoJS.AES.encrypt(JSON.stringify(action.payload.pass), "Secret key").toString();
        console.log(encrypted);
        return { ...state, isLoggedIn: true, username: action.payload.username, pass: action.payload.pass, encryptedPass: encrypted };
      }
    
    return state;
};
    
export default reducer;
    