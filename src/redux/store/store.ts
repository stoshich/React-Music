import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import musicBox from '../musicBoxSlice'
import auth from '../authSlice'
import songItem from '../songItemSlice'

export const store = configureStore({
    reducer: {
        musicBox,
        auth,
        songItem
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch