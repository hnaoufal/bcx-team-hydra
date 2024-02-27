import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/prompt/promptSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,

    },
});
