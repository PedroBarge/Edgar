// eslint-disable-next-line no-unused-vars
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";

const Router = createBrowserRouter([
    { path:"/", component:<Home/>}
]);

export default Router;