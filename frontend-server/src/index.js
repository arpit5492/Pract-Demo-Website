import React from 'react';
import {applyMiddleware, combineReducers, createStore} from "redux"; 
import { thunk } from "redux-thunk";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reducer from './store/reducers';

const prodReducer = combineReducers({
  pr: reducer
});

const store = createStore(prodReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
