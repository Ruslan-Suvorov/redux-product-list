import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Product = {
  id: string,
  title: string,
  amount: number,
  completed: boolean,
}

export interface ProductsState {
  list: Product[];
}

const initialState: ProductsState = {
  list: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<{ title: string }>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        amount: 1,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<{ id: number }>) {
      const toggledProduct = state.list.find(product => product.id === action.payload);
      if (toggledProduct) {
        toggledProduct.completed = !toggledProduct.completed
      };
    },
    removeProduct(state, action: PayloadAction<{ id: number }>) {
      state.list = state.list.filter(product => product.id !== action.payload)
    },
    updateAmount(state, action: PayloadAction<{ id: number, amount: number }>) {
      const item = state.list.find(product => product.id === action.payload.id);

      if(item && action.payload.amount > 0) {
        item.amount = action.payload.amount;
      }
    }
  },
});

export const {addProduct, toggleComplete, removeProduct, updateAmount} = productSlice.actions;
export default productSlice.reducer;