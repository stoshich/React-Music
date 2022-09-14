import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import musicBox from '../musicBoxSlice'
import auth from '../authSlice'

export const store = configureStore({
    reducer: {
        musicBox,
        auth
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch