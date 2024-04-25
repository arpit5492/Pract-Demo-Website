import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: false
}

const prodSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProd: (state, action) => {
      // console.log(action);
      state.products = action.payload;
    },
    errorFlag: (state, action) => {
      // console.log(action);
      state.error = action.payload;
    }
  }
});

export const {fetchProd, errorFlag} = prodSlice.actions;
export default prodSlice.reducer;