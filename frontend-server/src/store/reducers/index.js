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

export default reducer;