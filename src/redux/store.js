import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "../reducers/authentication"
import productsReducer from "../reducers/products"

export const store = configureStore({
    reducer: {
       authentication: authenticationReducer,
       products: productsReducer
    }
})