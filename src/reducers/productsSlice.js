import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getProductByCategory  = createAsyncThunk(
    'products',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const formattedResponse = await response.json()
        return formattedResponse
    }
)


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: []
    },
    extraReducers: {
        [getProductByCategory.pending]: (state) => {
            console.log('loading')
            state.isLoading = true
        },
        [getProductByCategory.fulfilled]: (state, action) => {
            state.products = action.payload
            state.isLoading = false
        },
        [getProductByCategory.rejected]: (state) => {
            state.isLoading = false
            console.log('error')
        }
    }
})

export default productsSlice.reducer