import React from "react";
import "./topbar.styles.scss";

import { Menu } from "react-feather";

export default function TopBar() {
  return (
    <div className="topbar">
      <button className="menu-btn">
        <Menu size={30} />
      </button>
      <p className="topbar-title">Minimalist Planner</p>
    </div>
  );
}
