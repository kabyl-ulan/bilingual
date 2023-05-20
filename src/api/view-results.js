import { baseAxios } from "./axios-config";

export const deleteViewResults = async (id) => {
    baseAxios.delete(`/result/client-results/${id}`);
};

export const getViewResults = async () => {
    const response = await baseAxios.get("/result/view-results");
    return response.data;
};
