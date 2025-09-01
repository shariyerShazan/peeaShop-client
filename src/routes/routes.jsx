import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";

export const Router = createBrowserRouter([
    {
        path: "/" ,
        element: <MainLayout /> ,
        errorElement: <ErrorPages /> ,
        children: [
            {
                index: true ,
                element: <Home />
            }
        ]
    }
])