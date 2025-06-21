import Link from "next/link";
import React from "react";
import { Button } from "../../button";

interface ButtonMenuItemProps {
  index: number;
  item: any;
  active: string | null;
  setActive: (name: string) => void;
}

const ButtonMenuItem = ({
  active,
  index,
  item,
  setActive,
}: ButtonMenuItemProps) => {
  const resolverClassActive = "bg-gray-200 ";

  return (
    <Button
      variant="link"
      key={index}
      onClick={() => setActive(item.name)}
      className={`p-2 ${
        active === item.name ? resolverClassActive : ""
      } rounded-md hover:bg-gray-200 transition-colors duration-300 font-semibold`}
    >
      <Link href={item.path}>{item.name}</Link>
    </Button>
  );
};

export default ButtonMenuItem;
