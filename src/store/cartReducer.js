import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      const newState = [...state];
      const product = action.payload;

      // let duplicateIndex;
      // newState.forEach((item, index) => {
      //     if(item.id===product.id) {
      //         duplicateIndex -index
      //     }
      // })

      //finding i product already exist in the array
      const duplicateIndex = newState.findIndex(
        (item) => item.id === product.id
      );
      // if does not exist
      if (duplicateIndex === -1) {
        product.count = 1;
        newState.push(product);
      } else {
        // newState[duplicateIndex].count = newState[duplicateIndex].count + 1
        //di pwede yung taas dahil sa error kaya ii-spread nalang

        newState[duplicateIndex] = {
          ...newState[duplicateIndex], //spread operator = ...
          count: newState[duplicateIndex].count + 1,
        };
      }
      return newState;
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
