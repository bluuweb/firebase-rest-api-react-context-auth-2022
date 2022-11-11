import { createBrowserRouter } from "react-router-dom";

import LayoutRoot from "../layout/LayoutRoot";
import LayoutPrivate from "../layout/LayoutPrivate";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/dashboard",
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ],
            },
        ],
    },
]);
