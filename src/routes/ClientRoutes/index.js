import { useRoutes } from "react-router-dom";

import { CLIENT_ROUTES_CONFIG } from "./routesConfig";

const ClientRoutes = () => {
    const routes = useRoutes(CLIENT_ROUTES_CONFIG);
    return routes;
};

export default ClientRoutes;
