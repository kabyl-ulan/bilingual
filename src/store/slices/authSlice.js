import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
};
const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        },
    },
});
export default authSlice;
export const { setUser } = authSlice.actions;
