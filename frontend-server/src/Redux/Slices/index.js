import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  error: false
}

const prodSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    fetchProd: (state, action) => {
      state.products = action.payload;
    },
    errFlag: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {fetchProd, errFlag} = prodSlice.actions;
export default prodSlice.reducer;