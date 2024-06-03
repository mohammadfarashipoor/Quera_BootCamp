import React from "react";
import TrendsCard from "@/components/TrendsCard";
function SidebarRight() {
  return (
    <aside className="sidebar-right ">
      <input type="search" placeholder="جست و جو" />
      <div className="trends">
        <h3>داغ ترین ها برای تو 🔥</h3>
        <TrendsCard />
        <a>نمایش بیشتر</a>
      </div>
    </aside>
  );
}

export default SidebarRight;
