"use client";

import { usePathname } from "next/navigation";
import sidebarLinks from "@/utils/menuItems";
import Link from "next/link";
import UserNameCard from "@/views/UserNameCard";
import UserNameModal from "@/views/UserNameModal";
import { useState } from "react";

function Menu() {
  const pathWithoutParams = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className="sidebar-left flex justify-between">
      {sidebarLinks.map((link, linkIdx) => (
        <Link
          className={`sidebar-left__link sidebar-left__link--${link.class} ${
            pathWithoutParams.split("/")[1] === link.path.split("/")[1] &&
            pathWithoutParams !== "tweet"
              ? "active"
              : null
          }`}
          key={linkIdx}
          href={link.class === "profile" ? link.path + "meem" : link.path}
        >
          {link.icon !== "" && <link.icon className="sidebar-left__icon" />}
          <p className="sidebar-left__text">{link.text}</p>
        </Link>
      ))}
      <UserNameCard onClick={() => setIsOpen((preState) => !preState)} />
      <UserNameModal isOpen={isOpen} />
    </aside>
  );
}

export default Menu;
