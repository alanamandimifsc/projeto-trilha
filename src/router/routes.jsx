import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import PaginaCadastroTrilha from "./pages/PaginaCadastroTrilha";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaListaTrilhas from "./pages/PaginaListaTrilhas";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <PaginaInicial />,
            },
            {
                path: '/cadastroTrilha',
                element: <PaginaCadastroTrilha />,
            },
            {
                path: '/listaTrilhas',
                element: <PaginaListaTrilhas />,
            }
        ],
    }
]);

export default routes;