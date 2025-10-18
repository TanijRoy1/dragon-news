import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/pages/Home";
import CategoryNews from "../components/CategoryNews";

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
                loader: () => fetch("../../public/news.json"),
            },
        ]
    },
    {
        path: "/auth",
        element: <h1>Auth</h1>
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