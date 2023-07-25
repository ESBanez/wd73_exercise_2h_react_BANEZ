import { createSlice } from "@reduxjs/toolkit";
//listahan to ng fx
export const cartItemCountSlice = createSlice({
  name: "cartItemCount",
  initialState: 0, //isa lang siya sa marami
  reducers: {
    addToCart: (state, action) => {
      //addToCart: key ng fx
      return state + action.payload;
    }, //si state irereturn natin yung gusto nating maging bagong value accoring sa fx
  },
});

export const { addToCart } = cartItemCountSlice.actions; //action name add to cart balik sa productname dahil doon magaganap yung action.
