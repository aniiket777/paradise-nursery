import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('paradiseNurseryCart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    // Fall back to empty array if data is invalid or corrupted
    return []; 
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(), // Initialize items from localStorage
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) {
        state.items.push({ id, name, price, image, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
