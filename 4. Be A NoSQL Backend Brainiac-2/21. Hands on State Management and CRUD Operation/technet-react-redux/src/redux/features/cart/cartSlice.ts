/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
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

      state.total = state.total + action.payload.price;
    },

    decreaseProductQuantity: (state, action: PayloadAction<IProduct>) => {
      const findProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (findProduct && findProduct.quantity! > 1) {
        findProduct.quantity = findProduct.quantity! - 1;
        state.total = state.total - action.payload.price;
      }
    },

    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.total -= action.payload.price * action.payload.quantity!;

      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, decreaseProductQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
