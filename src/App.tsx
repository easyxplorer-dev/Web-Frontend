import Navbar from "@components/Navbar";
import { NavItems } from "./data/NavItems";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";
import { Stars } from "@components/Stars";
import { Background } from "@components/background";
import { Meteors } from "@components/MeteorLanguages";

function Layout() {
  return (
    <main className="overflow-x-hidden relative">
      <Stars />
      <Meteors />
      <Background />
      <section className="bg-transparent min-h-screen overflow-hidden relative">
        <Navbar data={NavItems} />

        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
