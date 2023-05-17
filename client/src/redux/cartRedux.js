import { createSlice } from "@reduxjs/toolkit";

//CART - ADD A PRODUCT
const cartSlice = createSlice({
  name: "cart",

  //INITIAL STATE
  initialState: {
    products: [],
    quantity: 0,
    total: 0, //total price
  },

  //STATE CONTROL IN REDUCER WITH STATE AND ACTION
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //WHEN WE CLICK +
      state.products.push(action.payload); //UPDATE PRODUCTS WHERE PAYLOAD IS THE NEW PRODUCT
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer; //DEFAULT SINCE WE WILL USE IN STORE
