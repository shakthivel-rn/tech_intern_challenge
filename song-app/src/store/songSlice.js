import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    songData: [],
}

const songSlice = createSlice({
    name: 'songSlice',
    initialState: initialState,
    reducers: {
       setSongData(state, action) {
            state.songData = action.payload
        },
    }
});

export const songSliceActions = songSlice.actions;
export const songSliceReducers = songSlice.reducer