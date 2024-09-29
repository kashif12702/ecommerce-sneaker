import { configureStore } from "@reduxjs/toolkit";
import productReducer from './products/index';
import cartReducer from './cart/index';
import authReducer from './user/index';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
