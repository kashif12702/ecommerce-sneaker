import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Load items from session storage if needed
const loadCartFromSessionStorage = () => {
  const cartItems = localStorage.getItem('cart');
  return cartItems ? JSON.parse(cartItems) : [];
};

const initialState = {
  items: loadCartFromSessionStorage(), // Load from session storage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save to session storage
      toast.success("Item added to cart!");
    },

    removeItemFromCart: (state, action) => {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      state.items = updatedItems;
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save to session storage
      toast.success("Item removed from cart!");
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart'); // Clear from session storage
      toast.success("Cart cleared!");
    },

    updateQuantityOfCartItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.items)); // Save to session storage
        toast.success("Item quantity updated!");
      }
    },

    loadCartItems: (state) => {
      state.items = loadCartFromSessionStorage(); // Load items from session storage
    },
  },
});

// Export actions and reducer
export const { addItemToCart, removeItemFromCart, clearCart, updateQuantityOfCartItem, loadCartItems } = cartSlice.actions;
export default cartSlice.reducer;
