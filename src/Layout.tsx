import { useEffect, useState } from "react";
import Navbar from "@components/Navbar";
import { NavItems } from "./data/NavItems";
import Footer from "@components/Footer";
import Home from "./pages/Home";

function Layout() {
  const [currentNavItem, setCurrentNavItem] = useState(NavItems[0]);
  const [isVisible, setIsVisible] = useState(false);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="bg-[#000000e8] min-h-screen overflow-hidden relative">
        <Navbar
          data={NavItems}
          currentItem={currentNavItem}
          handleClick={setCurrentNavItem}
        />

        <Home isVisible={isVisible} />

        <Footer />
      </section>
    </>
  );
}

export default Layout;
