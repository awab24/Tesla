import {configureStore} from '@reduxjs/toolkit';
import carReducer from "./Feature/Car/CarSlice"

export const store = configureStore({
    reducer: {
        car: carReducer
    }
})