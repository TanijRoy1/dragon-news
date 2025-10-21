import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "category/:id",
                Component: CategoryNews,
                loader: () => fetch("../news.json"),
                hydrateFallbackElement: <div className="flex items-center justify-center py-10"><span className="loading loading-bars loading-xl"></span></div>,
            },
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                index: true,
                path: "/auth/login",
                Component: Login,
            },
            {
                path: "/auth/register",
                Component: Register,
            },
        ]
    },
    {
        path: "/details",
        element: <h1>Details</h1>
    },
    {
        path: "*",
        element: <h1>404 page error</h1>
    },
])

export default router;