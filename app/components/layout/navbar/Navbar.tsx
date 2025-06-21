import Image from "next/image";
import NavigationMenuComponent from "../../ui/layout/NavigationMenu";
import Logo from "../../../public/burgerlogo.svg";
import { Button } from "@/components/ui/button";

const Navbar = () => {
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
        <Button>Sign In</Button>
        <Button variant={"outline"}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
