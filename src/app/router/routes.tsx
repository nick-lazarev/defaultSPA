import type { RouteObject } from "react-router";

import { IndexPage, AuthPage } from "../../pages";

export const config: RouteObject[] = [
    {
        path: "/authorization",
        element: <AuthPage />
    },
    {
        path: "/",
        element: <IndexPage />
    }
]; 