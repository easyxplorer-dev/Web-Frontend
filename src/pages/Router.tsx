import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "./Home";
import Packages from "./Packages";
import Contacts from "./Contacts";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>Error</>,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/packages", element: <Packages /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);

export default router;
