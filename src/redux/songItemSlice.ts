import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { songRes } from "../types/songItem";
import axios from 'axios'

interface ISongItem {
    status: string,
    data: songRes | null
}

const initialState: ISongItem = {
    status: '',
    data: null
}

export const fetchSongItem = createAsyncThunk<songRes, number>(
    'songItem/fetchSongStatus',
    async (songId) => {
        const response = await axios.get(`https://genius.p.rapidapi.com/songs/${songId}`,
            {
                headers: {
                    'X-RapidAPI-Key': '9116c3a87emshfec611e63d0fad6p1520a3jsn6f820602d13b',
                    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
                }
            })
        return response.data
    })

const songItemSlice = createSlice({
    name: 'songItem',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongItem.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchSongItem.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchSongItem.rejected, state => {
                state.status = 'error'
            })
    }
})

export const { } = songItemSlice.actions
export default songItemSlice.reducer