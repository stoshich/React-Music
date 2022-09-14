import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { songsDataRes } from "../types/songs";

export interface IMusicBox {
    status: string;
    items: songsDataRes | null
}

export const fetchSongs = createAsyncThunk<songsDataRes, number>(
    'musicBox/fetchMusicStatus',
    async (artistId) => {
        const response = await axios.get(`https://genius.p.rapidapi.com/artists/${artistId}/songs`,
            {
                headers: {
                    'X-RapidAPI-Key': '9116c3a87emshfec611e63d0fad6p1520a3jsn6f820602d13b',
                    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
                }
            })
        return response.data
    })

const initialState: IMusicBox = {
    status: '',
    items: null
}

const musicBoxSlice = createSlice({
    name: 'musicBox',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, state => {
                state.status = 'loading'
                state.items = null
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.status = 'success'
                state.items = action.payload
            })
            .addCase(fetchSongs.rejected, state => {
                state.status = 'error'
                state.items = null
            })
    }

})

export const { } = musicBoxSlice.actions
export default musicBoxSlice.reducer