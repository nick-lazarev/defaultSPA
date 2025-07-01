import type { RouteObject } from "react-router";

import { IndexPage } from "../../pages";

export const config: RouteObject[] = [
    {
        path: "/",
        element: <IndexPage />
    }
]; 