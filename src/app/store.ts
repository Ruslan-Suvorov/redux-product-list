import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    counter: counterReducer,
  }
})

//Експортуємо `RootState` та `AppDispatch` із Store для коректної роботи типізації
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch