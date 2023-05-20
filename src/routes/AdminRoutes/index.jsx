import { useRoutes } from "react-router-dom";

import { ADMIN_ROUTES_CONFIG } from "./routesConfig";

const AdminRoutes = () => {
    const routes = useRoutes(ADMIN_ROUTES_CONFIG);
    return routes;
};

export default AdminRoutes;
