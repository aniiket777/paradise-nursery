import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Subscribe to store changes to save cart items to localStorage seamlessly
store.subscribe(() => {
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state.cart.items);
    localStorage.setItem('paradiseNurseryCart', serializedState);
  } catch (err) {
    // Gracefully handle any write errors
  }
});

export default store;
