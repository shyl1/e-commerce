import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch products by category and filter by price manually
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params = { category: 'groceries', minPrice: 0, maxPrice: 100 }, thunkAPI) => {
    const { category, minPrice, maxPrice } = params;

    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      // Manual filter and map
      return data.products
        .filter(p => p.price >= minPrice && p.price <= maxPrice)
        .map(product => ({
          ...product,
          quantity: 0,
          onSale: product.discountPercentage > 10, // Add onSale flag
          inStock: product.stock > 0               // Add inStock flag
        }));

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    cart: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      state.cart[id] = (state.cart[id] || 0) + quantity;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      delete state.cart[id];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity > 0) {
        state.cart[id] = quantity;
      } else {
        delete state.cart[id];
      }
    },
    clearCart: (state) => {
      state.cart = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch';
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = productsSlice.actions;

export default productsSlice.reducer;
