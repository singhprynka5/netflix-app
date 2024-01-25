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

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default AppRouter;
