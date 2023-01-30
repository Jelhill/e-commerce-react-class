import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [] 
}
const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        setCartItem(state, action) {
          let product = action.payload
          state.cartItems.push(product)
        },
    }
})

export const { setCartItem} = productReducer.actions
export default productReducer.reducer