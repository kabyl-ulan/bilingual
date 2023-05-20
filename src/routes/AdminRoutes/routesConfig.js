import React from "react";

import { NotFound } from "containers";
import { CheckMain } from "containers/Admin/check/CheckMain";

import AdminTest from "containers/Admin/pages/AdminTest";

import CreateQuestion from "containers/Admin/pages/CreateQuestion";
import CreateTest from "containers/Admin/pages/CreateTest";
import EveluatingCheck from "containers/Admin/pages/EveluatingCheck";
import NewTest from "containers/Admin/pages/NewTest";
import QuestionToTest from "containers/Admin/pages/QuestionToTest";
import SubmitedResult from "containers/Admin/pages/SubmitedResult.jsx";

import { Navigate } from "react-router-dom";

import { ADMIN_ROUTES_URL } from "./adminRoutesUrl";

export const ADMIN_ROUTES_CONFIG = [
    // {
    //     path: ADMIN_ROUTES_URL["/"],
    //     element: <Navigate replace to="tests" />,
    // },
    {
        path: ADMIN_ROUTES_URL.TEST,
        element: <AdminTest />,
    },
    {
        path: ADMIN_ROUTES_URL.CREATE_TEST,
        element: <CreateTest />,
    },
    {
        path: ADMIN_ROUTES_URL.UPDATE,
        element: <NewTest />,
    },
    {
        path: ADMIN_ROUTES_URL.QUESTION_TO_TEST,
        element: <QuestionToTest />,
    },
    {
        path: ADMIN_ROUTES_URL.CREATE_QUESTION,
        element: <CreateQuestion />,
    },
    {
        path: ADMIN_ROUTES_URL.UPDATE_QUESTION,
        element: <CreateQuestion />,
    },
    {
        path: ADMIN_ROUTES_URL.SUBMITED_TEST,
        element: <SubmitedResult />,
    },
    {
        path: ADMIN_ROUTES_URL.CHECK,
        element: <EveluatingCheck />,
    },
    {
        path: ADMIN_ROUTES_URL.CHECK_ANSWER,
        element: <CheckMain />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
