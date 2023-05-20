import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RoutesUrl } from "./constants";

const PrivateRoute = ({ expectedRoles, children }) => {
    const user = useSelector((state) => state.auth.data);
    if (user !== null) {
        if (expectedRoles.includes(user?.role) && user?.token) {
            return children;
        }
        return <Navigate to={`${RoutesUrl.SignIn}`} />;
    }
};

export default PrivateRoute;
