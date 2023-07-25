import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartItemCountSlice } from "./cartItemCountReducer";
import { cartSlice } from "./cartReducer";

const rootReducer = combineReducers({
  //nandito lahar ng reducer JS fx
  cartItemCount: cartItemCountSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
