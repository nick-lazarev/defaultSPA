import { createBrowserRouter, RouterProvider } from "react-router";
import { routesConfig } from "./routesConfig";

const router = createBrowserRouter(routesConfig);

export const Router = () => {
    return (
        <RouterProvider router={router} />
    );
}