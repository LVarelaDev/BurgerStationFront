"use client";
import { useState } from "react";
import ButtonMenuItem from "./partials/ButtonMenuItem";

const NavigationMenuComponent = () => {
  const [active, setActive] = useState<string | null>(null);

  const INIT_MENU = [{ name: "Inicio", path: "/" }];

  return (
    <ul className="flex lg:flex-row flex-col lg:gap-4 lg:justify-between lg:items-center lg:p-4">
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
