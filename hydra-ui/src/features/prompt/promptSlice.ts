// src/features/counter/promptSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchTextData = createAsyncThunk(
    'prompt',
    async (arg: string, {dispatch, getState}: any) => {
        const response = await fetch('/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include other headers as needed
            },
            body: JSON.stringify({message: arg})
        });
        const data = await response.json();
        // You can dispatch other actions here if needed
        return data;
    }
);

export const promptSlice = createSlice({
    name: 'prompt',
    initialState: {
        text: '',
        loading: false,
        error: '',
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTextData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTextData.fulfilled, (state, action) => {
                state.loading = false;
                state.text = action.payload;
                alert(JSON.stringify(action.payload));
            })
            .addCase(fetchTextData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            });
    },
});

export const {setText} = promptSlice.actions;

export default promptSlice.reducer;
