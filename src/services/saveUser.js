import Cookies from "js-cookie";

export const setUserToCookies = (userInfo) => {
    if (userInfo) {
        Cookies.set("user", JSON.stringify({ role: userInfo.role, token: userInfo.token }));
    }
};

export const getUserFromCookies = () => {
    const res = Cookies.get("user");
    if (res) {
        const user = JSON.parse(res);
        return user;
    }
    return res;
};
