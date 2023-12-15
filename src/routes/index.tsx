import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { About, Home } from "../views";

export const webRouter = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/sobre',
                element: <About />
            }
        ]
    }
])