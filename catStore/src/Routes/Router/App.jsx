import { RouterProvider } from "react-router-dom";
import { Router } from "src/Routes/Router/Router.jsx";

export const App = () => {
  return <RouterProvider router={Router} />;
};
