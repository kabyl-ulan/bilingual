import { BASE_URL } from "./baseUrl";

const fileUpload = axios.create({ baseURL: BASE_URL });
fileUpload.interceptors.request.use((config) => {
    const updatedConfig = { ...config };
    return updatedConfig;
});
fileUpload.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default fileUpload;
