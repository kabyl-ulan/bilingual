import { store } from "store";

import { JWT_TOKEN_KEY } from "utils/constants/General";

export const getToken = () => {
    return store.getState().auth.user.token;
};

export const logout = () => {
    localStorage.removeItem(JWT_TOKEN_KEY);
};

export function readFileDataAsBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            resolve(event.target.result);
        };

        reader.onerror = (err) => {
            reject(err);
        };

        reader.readAsDataURL(file);
    });
}
