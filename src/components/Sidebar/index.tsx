import React from "react";
import SidebarPT from "./Presenter";

function Sidebar({ children }: { children: React.ReactNode }) {
  return <SidebarPT>{children}</SidebarPT>;
}

export default Sidebar;
