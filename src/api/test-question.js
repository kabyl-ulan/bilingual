import { baseAxios } from "./axios-config";

export const getQuestion = async () => {
    const response = await baseAxios.get("/question");
    return response.data;
};
