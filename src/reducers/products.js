import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getCategories = createAsyncThunk(
    'categories',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const formattedResponse = await response.json()
        return formattedResponse
    }
)

const categories = createSlice({
    name: 'categories',
    initialState: {
        isLoading: false,
        categories: []
    },
    extraReducers: {
        [getCategories.pending]: (state) => {
            console.log('loading')
            state.isLoading = true
        },
        [getCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
            state.isLoading = false
        },
        [getCategories.rejected]: (state) => {
            state.isLoading = false
            console.log('error')
        }
    }
})

export default categories.reducer