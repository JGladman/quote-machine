import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    quote: "Click the button to fetch a quote!",
    first: "Jacob",
    last: "Gladman",
    status: 'idle',
    error: null
}

export const fetchQuote = createAsyncThunk('quotes/fetchQuote', async () => {
    const apiUrl = 'http://localhost:3001/quote'
    const response = await axios.get(apiUrl)
    const { content, character } = response.data
    return { content, character }
})

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchQuote.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchQuote.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.quote = action.payload.content
            state.first = action.payload.character.firstname
            state.last = action.payload.character.lastname
            console.log(action.payload)
        },
        [fetchQuote.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const { quoteChanged } = quotesSlice.actions

export default quotesSlice.reducer

export const selectQuote = state => state.quote.quote

export const selectAuthor = state => `- ${state.quote.first} ${state.quote.last}`

export const selectStatus = state => state.quote.status

export const selectError = state => state.quote.error