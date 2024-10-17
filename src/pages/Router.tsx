import { createBrowserRouter } from "react-router-dom";
import Layout from "src/App";
import Home from "./Home";
import Packages from "./Packages";
import Contacts from "./Contacts";
import About from "./About";
import PackageDetail from "./Packages/Detail/PackageDetail";
import ErrorPage from "./ErrorPage";
import UnderMaintenace from "./UnderMaintenace";

const maintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === "true";

const childrens = [
  { index: true, element: <Home /> },
  { path: "/about-us", element: <About /> },
  { path: "/packages", element: <Packages /> },
  { path: "/packages/:id", element: <PackageDetail /> },
  { path: "/contacts", element: <Contacts /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: maintenanceMode ? <UnderMaintenace /> : <Layout />,
    errorElement: <ErrorPage />,
    children: maintenanceMode ? [] : childrens,
  },
]);

export default router;
