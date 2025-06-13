import { configureStore } from "@reduxjs/toolkit"
import userReducer from './moudules/user'
const store = configureStore({
    reducer: {
        user: userReducer
    }
})
export default store