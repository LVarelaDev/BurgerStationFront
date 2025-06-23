"use client";

import Image from "next/image";
import Logo from "../../../public/burgerlogo.svg";
import NavigationMenuComponent from "../../ui/layout/NavigationMenu";
import { useSession } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const { data } = useSession();
  return (
    <div className="flex justify-between items-center w-full px-20 bg-white shadow">
      <div className="flex items-center space-x-2">
        <Image
          src={Logo}
          alt="Burger Station Logo"
          className="h-12 w-12 rounded-full"
        />
        <h1 className="text-2xl font-bold text-center">The Burger Station</h1>
      </div>
      <NavigationMenuComponent />
      <div className="flex items-center space-x-4">
        <ProfileMenu name={data?.user.name ?? ""} />
      </div>
    </div>
  );
};

export default Navbar;
