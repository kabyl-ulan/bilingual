import axios from "axios";
import { logout } from "utils/helpers/helpers";

import { BASE_URL } from "./baseUrl";

let store;

export const injectStore = (_store) => {
    store = _store;
};

const headers = {
    "Content-Type": "application/json",
};

const baseAxios = axios.create({ baseURL: BASE_URL, headers });

baseAxios.interceptors.request.use((config) => {
    const updatedConfig = { ...config };
    const { token } = store.getState().auth.data || {};
    if (token) {
        updatedConfig.headers.Authorization = `Bearer ${token}`;
    }
    return updatedConfig;
});

baseAxios.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
        if (error.response?.status === 401) {
            logout();
        }
        return Promise.reject(error);
    }
);

export { baseAxios };
