import { createBrowserRouter, RouterProvider } from "react-router";
import { config } from "./routes";

const router = createBrowserRouter(config);

export const Router = () => {
    return (
        <RouterProvider router={router} />
    );
}