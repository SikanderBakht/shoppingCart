import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const login = createAsyncThunk(
    'login',
    async (params) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        }

        const response = await fetch('https://fakestoreapi.com/auth/login', requestOptions)
        const formattedResponse = await response.json()
        return formattedResponse
    }
)
const authentication = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        token: ''
    },
    extraReducers: {
        [login.pending]: (state) => {
            console.log('loading')
            state.isLoading = true
        },
        [login.fulfilled]: (state, action) => {
            state.token = action.payload
            state.isLoading = false
        },
        [login.rejected]: (state) => {
            state.isLoading = false
            console.log('error')
        }
    }
})

export default authentication.reducer