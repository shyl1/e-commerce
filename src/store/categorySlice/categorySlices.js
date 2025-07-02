import { createSlice } from '@reduxjs/toolkit';
import fetchGateoryProducts from './thunk/actionGetCategoryProducts';

// Initial State
const initialState = {
  items: [],
  loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Slice
const productSlice = createSlice({
  name: 'categoryProducts',
  initialState,
  reducers: {
    // تقدر تضيف أي reducers خاصة بالتحديث أو الفلترة هنا لو حبيت
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGateoryProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGateoryProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchGateoryProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export {fetchGateoryProducts};
export default productSlice.reducer;

