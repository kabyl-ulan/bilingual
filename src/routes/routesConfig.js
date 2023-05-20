import React from "react";

import HomePage from "components/HomePage/HomePage";
import { SignIn, SignUp, NotFound } from "containers";

import Layout from "layout/Layout";
import { Navigate } from "react-router-dom";
import { getUserFromCookies } from "services/saveUser";

import AdminRoutes from "./AdminRoutes/index";
import ClientRoutes from "./ClientRoutes";
import { RoutesUrl, UsersRole } from "./constants";
import PrivateRoute from "./PrivateRoute";

// TODO need to clean cookies or use localestorage
const user = getUserFromCookies();
const isAuth = (PrivateComponent) => {
    if (user?.role === UsersRole.client) {
        return <Navigate to="/home" replace />;
    }
    if (user?.role === UsersRole.admin) {
        return <Navigate to="/admin/tests" replace />;
    }
    return PrivateComponent;
};

export const routesConfig = [
    {
        path: RoutesUrl["/"],
        element: <HomePage />,
    },

    {
        path: RoutesUrl.Home,
        element: (
            <PrivateRoute expectedRoles={[UsersRole.client]}>
                <ClientRoutes />
            </PrivateRoute>
        ),
    },

    {
        path: RoutesUrl.Admin,
        element: (
            <PrivateRoute expectedRoles={[UsersRole.admin]}>
                <Layout>
                    <AdminRoutes />
                </Layout>
            </PrivateRoute>
        ),
    },

    {
        path: RoutesUrl.SignUp,
        element: isAuth(<SignUp />),
    },

    {
        path: RoutesUrl.SignIn,
        element: isAuth(<SignIn />),
    },

    {
        path: "*",
        element: <NotFound />,
    },
];
