import { HOME, CREATE, EMPTY } from "./Paths";
import App from "../App";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        /* Default route */
        path: EMPTY,
        element: <Navigate to={HOME} />,
      },
      {
        /* Home page */
        path: HOME,
        element: <HomePage />,
      },
      {
        path: CREATE,
        element: <CreatePage />,
      },
      {
        /* Page not found */
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
