import { createBrowserRouter } from "react-router";
import ProjectDetails from "../Pages/ProjectDetails";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project-details/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);
export default router;
