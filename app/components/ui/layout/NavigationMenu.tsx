"use client";
import { useState } from "react";
import ButtonMenuItem from "./partials/ButtonMenuItem";

const NavigationMenuComponent = () => {
  const [active, setActive] = useState<string | null>(null);
  const rol = "admin";

  const INIT_MENU = [
    { name: "Inicio", path: "/" },
    {
      name: "Categorias",
      path: "/categories",
    },
  ];

  return (
    <ul className="flex gap-4 justify-between items-center p-4">
      {INIT_MENU.map((item, index) => (
        <ButtonMenuItem
          key={index}
          index={index}
          item={item}
          active={active}
          setActive={setActive}
        />
      ))}
    </ul>
  );
};

export default NavigationMenuComponent;
