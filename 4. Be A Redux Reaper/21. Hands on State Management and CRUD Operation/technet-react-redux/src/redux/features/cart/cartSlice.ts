/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
}

const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      //* Find the product
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    decreaseProductQuantity: (state, action: PayloadAction<IProduct>) => {
      const findProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (findProduct && findProduct.quantity! > 1) {
        findProduct.quantity = findProduct.quantity! - 1;
      }
    },

    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, decreaseProductQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
