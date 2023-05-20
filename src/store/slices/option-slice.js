import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseAxios } from "api/axios-config";

export const deleteOption = createAsyncThunk("question/deleteOption", async (id) => {
    const info = await baseAxios.delete(`/option/${id}`);
    return info;
});
