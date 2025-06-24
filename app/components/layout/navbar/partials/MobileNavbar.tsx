import NavigationMenuComponent from "@/components/ui/layout/NavigationMenu";
import { Menu, X } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../../public/burgerlogo.svg";
import ProfileMenu from "../ProfileMenu";

interface DesktopNavbarProps {
  data: Session | null;
}

const MobileNavbar = ({ data }: DesktopNavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Burger Station Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
          />
          <h1 className="text-base sm:text-lg font-bold">The Burger Station</h1>
        </div>

        <div className="flex items-center space-x-2">
          <ProfileMenu name={data?.user?.name ?? ""} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t bg-white px-4 py-4">
          <NavigationMenuComponent />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
