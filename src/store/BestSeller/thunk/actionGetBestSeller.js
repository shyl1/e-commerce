import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchBestSeller = createAsyncThunk("bestSeller/fetchBestSeller" , async(_ , thunkAPI)=> {

  const {rejectWithValue} = thunkAPI;

  try {
    const response = await axios.get('https://dummyjson.com/products');
    return  response.data.products;
  } catch (error) {
    if (axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        /* the error is not http error */
        return rejectWithValue("an Unexpected error")
      } 
  }
});

export default fetchBestSeller;