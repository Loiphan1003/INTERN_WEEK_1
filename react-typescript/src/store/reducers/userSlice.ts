import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../model/user";

interface UserState {
    users: Array<User> | null | undefined,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
}

const initialState: UserState = {
    users: null,
    status: 'idle',
}

export const getListUser = createAsyncThunk("get list user", async () => {
    const response = await fetch('http://localhost:5000/user/');
    const data = await response.json();
    return data;
});


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getListUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getListUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(getListUser.rejected, (state, action) => {
                state.status = 'failed';
            });
    }
})

export default userSlice.reducer