import {  createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./thunk/actionGetHomeProducts";

const initialState = {
  products: [],
  loading: "idle",
  error: null,
};


const homeCategorySlice = createSlice({
  name: "homeproducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = 'pending';
      state.error =null;
      });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading ="failed";
      // a guard to make sure that the action.payload is a string
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
      });
  },
});

export {fetchProducts};

export default homeCategorySlice.reducer;