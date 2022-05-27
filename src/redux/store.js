import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "../reducers/authentication"
import categoriesReducer from "../reducers/categorySlice"
import productsSlice from "../reducers/productsSlice"

export const store = configureStore({
    reducer: {
       authentication: authenticationReducer,
       categories: categoriesReducer,
       products: productsSlice
    }
})