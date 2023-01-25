import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    showLoginOrPassword: false
}
const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        setName(state, action) {
          state.name = action.payload  
        },
        setEmail(state, action) {
         state.email = action.payload
        },
        setPassword(state, action) {
         state.password = action.payload
        },
        setShowLoginOrPassword(state, action) {
            state.showLoginOrPassword = action.payload
        }
    }
})

export const { setName, setEmail, setPassword, setShowLoginOrPassword } = userReducer.actions
export default userReducer.reducer