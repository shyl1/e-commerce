import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchProducts = createAsyncThunk("homeproducts/fetchProducts" , async(_ , thunlAPI)=> {

  const {rejectWithValue} = thunlAPI;

  try{
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products.slice(0, 20);
  } catch (error){
    if (axios.isAxiosError(error)){
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("an Unexpected error")
    }
  }
});

export default fetchProducts;