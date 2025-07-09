import type { RouteObject } from "react-router";

import { IndexPage, AuthPage } from "../../pages";
import { routes } from "@shared/libs";
import { NonAuthLayout, AuthLayout } from "@app/layouts";

export const routesConfig: RouteObject[] = [
    {
        element: <NonAuthLayout />,
        children: [
            {
                path: routes.authorization,
                element: <AuthPage />
            },
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <IndexPage />
            },
        ]
    }
]; 