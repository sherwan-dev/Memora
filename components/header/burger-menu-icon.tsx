import { useState } from "react";
type BurgerMenuIconProps = {
  onClick: () => void;
  open: boolean;
};
export default function BurgerMenuIcon({ onClick, open }: BurgerMenuIconProps) { 

  return (
    <button
      aria-label="Menu"
      onClick={onClick}
      className="relative w-8 h-8 flex items-center justify-center"
    >
      <span
        className={`
          absolute h-0.5 w-6 bg-(--primery-black) transition-all duration-300
          ${open ? "rotate-45 translate-y-0" : "-translate-y-2"}
        `}
      />
      <span
        className={`
          absolute h-0.5 w-6 bg-(--primery-black) transition-all duration-300
          ${open ? "opacity-0" : "opacity-100"}
        `}
      />
      <span
        className={` 
          absolute h-0.5 w-6 bg-(--primery-black) transition-all duration-300
          ${open ? "-rotate-45 translate-y-0" : "translate-y-2"}
        `}
      />
    </button>
  );
}
