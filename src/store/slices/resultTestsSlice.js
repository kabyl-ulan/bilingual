import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getResultTests } from "api/result-tests";

const initialState = {
    resultTests: [],
};

export const resultTestsSlice = createAsyncThunk("tests/resultTestsSlice", async () => {
    try {
        const tests = await getResultTests();
        return tests;
    } catch (error) {
        return error.message;
    }
});

export const testsSlice = createSlice({
    name: "tests",
    initialState,
    reducers: {},
    extraReducers: {
        [resultTestsSlice.fulfilled]: (state, action) => {
            state.resultTests = action.payload;
        },
    },
});
