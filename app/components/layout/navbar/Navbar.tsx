"use client";
import { useSession } from "next-auth/react";
import DesktopNavbar from "./partials/DesktopNavbar";
import MobileNavbar from "./partials/MobileNavbar";

const Navbar = () => {
  const { data } = useSession();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <DesktopNavbar data={data} />
      <MobileNavbar data={data} />
    </nav>
  );
};

export default Navbar;
