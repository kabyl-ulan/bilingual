import { baseAxios } from "./axios-config";

export const getViewResultsQuestions = async (id) => {
    const response = await baseAxios.get(`/result/view-result-questions/${id}`);
    return response.data;
};
