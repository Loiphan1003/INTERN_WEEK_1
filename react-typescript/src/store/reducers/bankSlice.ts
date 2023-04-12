import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { ActionType } from "../action-types";
import { log } from "console";

interface BankState{
    value: number,
}

const initialState: BankState = {
    value: 0,
}

type Action = {
    type: string,
    payload: number,
}

export const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        deposit: (state, action) => {
            state.value += action.payload
        },
        withdraw: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const { deposit, withdraw } = bankSlice.actions;

export default bankSlice.reducer;