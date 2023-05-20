import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    getTestQuery,
    postQuestionsQuery,
    updateTestById,
    getTestQueryId,
    deleteById,
    switcherById,
} from "api/tes-query";

const initialState = {
    tests: [],
    singleTest: [],
    isLoading: false,
};

export const getTests = createAsyncThunk("test/getTests", async () => {
    try {
        const allTests = await getTestQuery();
        return allTests;
    } catch (error) {
        return error.message;
    }
});

export const getTestById = createAsyncThunk("test/getTestById", async (id, { rejectWithValue }) => {
    try {
        const testById = await getTestQueryId(id);
        return testById;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const postQuestions = createAsyncThunk(
    "test/postQuestions",
    async (value, { rejectWithValue, dispatch }) => {
        try {
            const response = await postQuestionsQuery(value);
            dispatch(getTests());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateTest = createAsyncThunk(
    "test/updateTest",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const updateTestData = await updateTestById(data.id, data.newInputValue);
            dispatch(getTests());
            return updateTestData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const isTestActive = createAsyncThunk("test/isTestActive", async (id) => {
    try {
        const response = await switcherById(id);
        return response;
    } catch (error) {
        return error.message;
    }
});

export const deleteTest = createAsyncThunk("test/deleteTest", async (id, { dispatch }) => {
    await deleteById(id);
    dispatch(getTests());
});

export const testsPostSlice = createSlice({
    name: "test",
    initialState,
    reducers: {},
    extraReducers: {
        [getTests.pending]: (state) => {
            state.isLoading = true;
        },
        [getTests.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.tests = action.payload;
        },
        [getTests.rejected]: (state) => {
            state.isLoading = false;
        },
        [getTestById.fulfilled]: (state, action) => {
            state.singleTest = [action.payload];
        },
    },
});
