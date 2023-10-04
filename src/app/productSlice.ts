import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: string,
  title: string,
  counter: number,
  completed: boolean,
}

type ProductsState = {
  list: Product[];
}

const initialState: ProductsState = {
  list: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        counter: 1,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledProduct = state.list.find(product => product.id === action.payload);
      if (toggledProduct) {
        toggledProduct.completed = !toggledProduct.completed
      };
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.list = state.list.filter(product => product.id !== action.payload)
    }
  },
});

export const {addProduct, toggleComplete, removeProduct} = productSlice.actions;
export default productSlice.reducer;