import { combineReducers } from 'redux'
import toDosReducer from './toDosReducer'
import authenticationReducer from './authenticationReducer'

const rootReducer = combineReducers({
  authenticationReducer,
  toDosReducer, 
})

// Lo anterior es lo mismo que esto:
// const rootReducer = (state = {}, action) => {
//   return {
//     auth: auth(state.auth, action),
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }



export default rootReducer;