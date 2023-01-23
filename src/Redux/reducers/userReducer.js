import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
    showLoginOrPassword: false
}
const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        setEmail(state, action) {
        
        },
        setPassword(state, action) {

        },
        setShowLoginOrPassword(state, action) {
            state.showLoginOrPassword = action.payload
        }
    }
})

export const { setEmail, setPassword, setShowLoginOrPassword } = userReducer.actions
export default userReducer.reducer