import { combineReducers } from 'redux';
import bankReducer from "./bankSlice";
import userReducer from './userSlice';

const reducers = combineReducers({
    bank: bankReducer,
    user: userReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>