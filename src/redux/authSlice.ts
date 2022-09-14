import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginType } from "../types/auth";

interface loginPayload {
    token: string
    currentUser: {
        id: number,
        username: string
    }
}

interface IAuth {
    status: string;
    token: string;
    isAuth: boolean;
    currentUser: {};
    error: string;
}

const initialState: IAuth = {
    status: '',
    token: '',
    isAuth: false,
    currentUser: {},
    error: ''
}

export const loginPost = createAsyncThunk<loginPayload, [any, any]>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:5000/auth/login',
                {
                    username: data[0],
                    password: data[1]
                }
            )
            localStorage.setItem('token', res.data.token)
            return await res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const auth = createAsyncThunk<loginPayload, never>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://localhost:5000/auth/auth',
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
            return await res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem('token')
            state.isAuth = false
            state.currentUser = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginPost.pending, state => {
                state.status = 'loading'
            })
            .addCase(loginPost.fulfilled, (state, action) => {
                state.status = 'success'
                state.token = action.payload.token
                state.isAuth = true
                state.currentUser = action.payload.currentUser
                console.log('PAYLOAD1: ', action.payload)
            })
            .addCase(loginPost.rejected, (state, action) => {
                state.status = 'error'
                // state.error = action.payload
                // console.log(action.payload)
            })
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer