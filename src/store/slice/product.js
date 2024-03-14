import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    amount: 0,
    method: [],
  },
  reducers: {
    addproduct(state, action) {
      state.product = action.payload.product;
      state.amount = action.payload.amount;
      state.method = action.payload.method;
    },

    updateQuantity(state, action) {
      const { price, index, sign } = action.payload;
      if (sign === "+") {
        state.product[index].quantity += 1;
        state.amount = state.amount + price;
      } else {
        if (state.product[index].quantity > 1) {
          state.product[index].quantity -= 1;
          state.amount = state.amount - price;
        }
      }
      state.amount = state.amount.toFixed(3);
    },
  },
});

export default productSlice.reducer;
export const { addproduct, updateQuantity } = productSlice.actions;
