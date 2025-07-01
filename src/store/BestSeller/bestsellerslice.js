import { createSlice }  from "@reduxjs/toolkit";
import fetchBestSeller from "./thunk/actionGetBestSeller";


const initialState = {
  products: [],
  loading: 'idle',
  error: null,
}

const bestSellerSlice = createSlice({
  name: 'bestSeller',
  initialState,
  extraReducers: (builder) => {
    builder.addCase (fetchBestSeller.pending , (state)=> {
      state.loading = "pending";
      state.error = null;
    }); 
    builder.addCase(fetchBestSeller.fulfilled , (state, action)=>{
      state.loading = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(fetchBestSeller.rejected , (state , action)=> {
      state.loading ="failed";
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload;
      }
    });
  },
});


export {fetchBestSeller};

export default bestSellerSlice.reducer;