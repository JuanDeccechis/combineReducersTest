import { generateId } from "../helpers";
import { types } from "../actions";

const initialState = {
    isLoggedIn: false,
    username: '',
    age: ''
  };
  
const reducer = (state = initialState, action) => {
    if (action.type === types.LOGOUT) {
        return { ...state, isLoggedIn: initialState.isLoggedIn, age: initialState.age, username: initialState.username };
      } 
      if (action.type === types.LOGIN) {
          console.log(action.payload.username);
        return { ...state, isLoggedIn: true, username: action.payload.username, age: action.payload.age };
      }
    
    return state;
};
    
export default reducer;
    