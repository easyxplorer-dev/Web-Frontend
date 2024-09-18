import Navbar from "@components/Navbar";
import { NavItems } from "./data/NavItems";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <section className="bg-[#1c2229] min-h-screen overflow-hidden relative">
        <Navbar data={NavItems} />

        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default Layout;
