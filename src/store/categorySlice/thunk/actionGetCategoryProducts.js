import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Thunk
const fetchGateoryProducts = createAsyncThunk(
  'products/fetchGateoryProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://dummyjson.com/products?limit=30');
      return res.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export default fetchGateoryProducts;
