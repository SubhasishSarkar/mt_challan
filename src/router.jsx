import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Challan from "./pages/Challan";
import PageNotFound from "./pages/PageNotFound";
import Authorize from "./pages/Authorize";

const router = createBrowserRouter([
    {
        path: "*",
        element: <PageNotFound />,
    },

    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },

            {
                path: "/challan/rungta",
                element: <Challan />,
            },

            {
                path: "/authorize",
                element: <Authorize />,
            },
        ],
    },
]);

export default router;
