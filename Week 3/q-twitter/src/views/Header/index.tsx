"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { BsStars } from "react-icons/bs";
function Header() {
  const location = usePathname();
  const path = location.split("/")[1];
  return (
    <header className="header flex items-center justify-between ">
      <h3>{path.charAt(0).toUpperCase() + path.slice(1)}</h3>
      <BsStars />
    </header>
  );
}

export default Header;
