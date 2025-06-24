import { Session } from "next-auth";
import Image from "next/image";
import Logo from "../../../../public/burgerlogo.svg";
import ProfileMenu from "../ProfileMenu";

interface DesktopNavbarProps {
  data: Session | null;
}

const DesktopNavbar = ({ data }: DesktopNavbarProps) => {
  return (
    <div className="hidden lg:flex justify-between items-center w-full px-4 xl:px-20 py-3">
      <div className="flex items-center space-x-2 min-w-fit">
        <Image
          src={Logo || "/placeholder.svg"}
          alt="Burger Station Logo"
          className="h-10 w-10 xl:h-12 xl:w-12 rounded-full"
        />
        <h1 className="text-lg xl:text-2xl font-bold whitespace-nowrap">
          The Burger Station
        </h1>
      </div>
      <div className="flex items-center space-x-4 min-w-fit">
        <ProfileMenu name={data?.user?.name ?? ""} />
      </div>
    </div>
  );
};

export default DesktopNavbar;
