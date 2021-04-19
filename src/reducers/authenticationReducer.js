import { generateId } from "../helpers";
import { types } from "../actions";

const initialState = {
    isLoggedIn: false,
    username: '',
    pass: ''
  };
  
const reducer = (state = initialState, action) => {
    if (action.type === types.LOGOUT) {
        return { ...state, isLoggedIn: initialState.isLoggedIn, pass: initialState.pass, username: initialState.username };
      } 
      if (action.type === types.LOGIN) {
          console.log(action.payload.username);
        return { ...state, isLoggedIn: true, username: action.payload.username, pass: action.payload.pass };
      }
    
    return state;
};
    
export default reducer;
    