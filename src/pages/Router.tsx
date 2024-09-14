import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "./Home";
import Packages from "./Packages";
import Contacts from "./Contacts";
import About from "./About";
import PackageDetail from "./Packages/PackageDetail";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/packages", element: <Packages /> },
      { path: "/packages/:id", element: <PackageDetail /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);

export default router;
