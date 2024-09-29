import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const loadProductsFromLocalStorage = () => {
  const products = localStorage.getItem('products');
  if (products) {
    return JSON.parse(products);
  }
  return [];
};

const saveProductsToLocalStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

const initialState = loadProductsFromLocalStorage();

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = { 
        id: Date.now(), 
        title: action.payload.title, 
        price: action.payload.price,
        type: action.payload.type,
        description: action.payload.description 
      };
      state.push(newProduct);
      toast.success('Product added successfully!');
      saveProductsToLocalStorage(state);
    },

    // Delete a product
    deleteProduct: (state, action) => {
      const updatedProducts = state.filter((product) => product.id !== action.payload);
      saveProductsToLocalStorage(updatedProducts);
      return updatedProducts;
    },

    // Update a product
    updateProduct: (state, action) => {
      const { id, title, price, type, description } = action.payload; 
      const product = state.find((product) => product.id === id);
      if (product) {
        product.title = title;
        product.price = price;
        product.type = type;
        product.description = description;
        saveProductsToLocalStorage(state);
      }
    },

    // Get all products
    loadProducts: (state) => {
      return loadProductsFromLocalStorage();
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, loadProducts } = productSlice.actions;
export default productSlice.reducer;
