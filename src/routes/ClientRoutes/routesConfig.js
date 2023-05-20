import React from "react";

import { HomeOne, HomeTwo, MyResult, NotFound } from "containers";
import Tests from "containers/Client/pages/Tests";
import { Navigate } from "react-router-dom";
import { CLIENT_CONST_URL } from "routes/constants";

export const CLIENT_ROUTES_CONFIG = [
    {
        path: "/",
        element: <Navigate to="/home/tests" />,
    },
    {
        path: CLIENT_CONST_URL["/"],
        element: <HomeOne />,
    },
    {
        path: CLIENT_CONST_URL.TESTS,
        element: <HomeTwo />,
    },
    {
        path: CLIENT_CONST_URL.TESTS + CLIENT_CONST_URL.SELECT_TESTS,
        element: <Tests />,
    },
    {
        path: CLIENT_CONST_URL.RESULTS,
        element: <MyResult />,
    },

    {
        path: "*",
        element: <NotFound />,
    },
];
