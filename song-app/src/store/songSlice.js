import { createSlice } from '@reduxjs/toolkit'
import moment from "moment"

const initialState = {
    songData: [],
}

const songSlice = createSlice({
    name: 'songSlice',
    initialState: initialState,
    reducers: {
        removeInvalidDateAndStoreSongData(state, action) {
            const inputData = action.payload
            const validatedSongData = inputData.filter(data => moment(data.songReleaseDate, 'MM/DD/YYYY', true).isValid() || moment(data.songReleaseDate, 'MM/DD/YY', true).isValid())
            state.songData = validatedSongData
        },

    }
});

export const songSliceActions = songSlice.actions;
export const songSliceReducers = songSlice.reducer