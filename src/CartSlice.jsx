import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const { id, name, cost , image } = action.payload;

    const existingItem = state.items.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if item already exists
    } else {
      state.items.push({ id, name,image, cost, quantity: 1 }); // Add new item with quantity 1
    }
  },
  removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      state.it
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
