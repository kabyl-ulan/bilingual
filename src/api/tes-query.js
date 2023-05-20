import { baseAxios } from "./axios-config";

export const postQuestionsQuery = (value) => {
    const response = baseAxios.post("/test", value);
    return response.data;
};

export const getTestQuery = async () => {
    const response = await baseAxios.get("/test");
    return response.data;
};

export const getTestQueryId = async (id) => {
    const response = await baseAxios.get(`/test/${id}`);
    return response.data;
};

export const updateTestById = async (id, updatedTest) => {
    const response = await baseAxios.put(`/test/${id}`, updatedTest);
    return response;
};

export const deleteById = async (id) => {
    await baseAxios.delete(`/test/${id}`);
};

export const switcherById = async (id) => {
    const response = await baseAxios.put(`/test/enable-disable/${id}`);
    return response.data;
};
