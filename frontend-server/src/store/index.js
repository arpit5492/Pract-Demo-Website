import {applyMiddleware, createStore} from "redux"; 
import { thunk } from "redux-thunk";

const initData = {
  products: [],
  error: false
}

const reducer = (state = initData, action) => {
  if(action.type === "Fetch Products"){
    return {
      ...state,
      products: action.payload
    }
  } else if(action.type === "Server Error") {
    return {
      ...state,
      error: true
    }
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;