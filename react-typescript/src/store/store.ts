import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import reducers from "./reducers";

const store = configureStore({
    reducer: reducers,
    middleware: [thunkMiddleware]
})

export default store;