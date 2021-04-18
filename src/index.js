import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginManager from './LoginManager';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Esto es para habilitar Redux Dev Tools

ReactDOM.render(
  <Provider store={store}>
    <LoginManager />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default store;