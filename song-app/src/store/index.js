import { configureStore } from '@reduxjs/toolkit'
import { songSliceReducers } from './songSlice'

const store = configureStore({
    reducer: { songSlice: songSliceReducers }
})

export default store;