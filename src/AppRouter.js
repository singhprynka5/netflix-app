import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";

const AppRouter = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRoutes} />;
};

export default AppRouter;
