import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  }
})

//Експортуємо `RootState` та `AppDispatch` із Store для коректної роботи типізації
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch