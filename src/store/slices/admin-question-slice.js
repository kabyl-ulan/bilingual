import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestion } from "api/test-question";

export const getQuestionTest = createAsyncThunk("/question", async () => {
    try {
        const allTest = await getQuestion();
        return allTest;
    } catch (error) {
        return error.message;
    }
});
