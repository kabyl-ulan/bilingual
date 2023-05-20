import { baseAxios } from "./axios-config";

export const getResultTests = async () => {
    const response = await baseAxios.get("/result");
    return response.data;
};

export const checkAnswerById = async (id) => {
    const { data } = await baseAxios.get(`/result/view-client-answer/${id}`);
    return data;
};
