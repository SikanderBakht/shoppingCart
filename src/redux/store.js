import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "../reducers/authentication"
import categoriesReducer from "../reducers/categorySlice"
import productsSlice from "../reducers/productsSlice"
import cartSlice from '../reducers/cartSlice'

export const store = configureStore({
    reducer: {
       authentication: authenticationReducer,
       categories: categoriesReducer,
       products: productsSlice,
       cart: cartSlice
    }
})