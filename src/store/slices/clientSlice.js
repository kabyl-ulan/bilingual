import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { questionForClient, questionForClientById } from "api/question-for-client";
import produce from "immer";

const initialState = {
    answer: {
        testId: 0,
        questionsAnswers: [],
    },
    questions: [],
    questionById: {},
};

export const getQuestionForClient = createAsyncThunk(
    "client/getQestionForClient",
    async ({ dispatch, clearData }) => {
        try {
            const response = await questionForClient();
            dispatch(clearData());
            return response;
        } catch (error) {
            return error.message;
        }
    }
);

export const getQuestionForClientById = createAsyncThunk(
    "client/getQuestionForClientById",
    async (id) => {
        try {
            const response = await questionForClientById(id);
            return response;
        } catch (error) {
            return error.message;
        }
    }
);

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        addAnswer: (state, action) => {
            const base = current(state.answer.questionsAnswers);
            const findItem = base.findIndex((item) => {
                return item.questionId === action.payload.options.questionId;
            });
            let newState;
            if (findItem >= 0) {
                newState = produce(base, (draft) => {
                    draft[findItem].optionAnswerId = [...action.payload.options.optionAnswerId];
                    draft[findItem].answer = action.payload.options.answer;
                });
            } else {
                newState = produce(base, (draft) => {
                    draft.push(action.payload.options);
                });
            }
            state.answer = {
                testId: action.payload.testId,
                questionsAnswers: newState,
            };
        },
        clearData: (state) => {
            state.answer = initialState.answer;
        },
    },
    extraReducers: {
        [getQuestionForClient.fulfilled]: (state, action) => {
            state.questions = action.payload;
            state.questionById = initialState.questionById;
            state.answer = initialState.answer;
        },
        [getQuestionForClientById.fulfilled]: (state, action) => {
            state.questionById = action.payload;
        },
    },
});

export const { addAnswer, clearData } = clientSlice.actions;
