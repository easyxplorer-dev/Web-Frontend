import { useState } from "react";
import Navbar from "@components/Navbar";
import { NavItems } from "./data/NavItems";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [currentNavItem, setCurrentNavItem] = useState(NavItems[0]);

  return (
    <>
      <section className="bg-[#000000e8] min-h-screen overflow-hidden relative">
        <Navbar
          data={NavItems}
          currentItem={currentNavItem}
          handleClick={setCurrentNavItem}
        />

        <Outlet />

        <Footer />
      </section>
    </>
  );
}

export default Layout;
