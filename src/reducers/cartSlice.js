import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCarts = createAsyncThunk(
    'products',
    async () => {
        const url = `https://fakestoreapi.com/carts/user/2`
        const response = await fetch(url)
        console.log(url)
        const formattedResponse = await response.json()
        return formattedResponse
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        cartItems: []
    },
    extraReducers: {
        [getCarts.pending]: (state) => {
            console.log('loading')
            state.isLoading = true
        },
        [getCarts.fulfilled]: (state, action) => {
            state.cartItems = action.payload
            state.isLoading = false
        },
        [getCarts.rejected]: (state) => {
            state.isLoading = false
            console.log('error')
        }
    }
})

export default cartSlice.reducer