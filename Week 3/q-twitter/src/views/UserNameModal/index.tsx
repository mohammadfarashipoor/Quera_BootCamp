import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
function SidebarModal({ isOpen }) {
  const data = true;

  return data ? (
    <div className={`sidebar-left__modal ${isOpen && "opened"} flex flex-col`}>
      <button>
        <Link href="/edit">Edit profile</Link>
      </button>
      <button>Sign out</button>
    </div>
  ) : (
    redirect("/signin")
  );
}

export default SidebarModal;
