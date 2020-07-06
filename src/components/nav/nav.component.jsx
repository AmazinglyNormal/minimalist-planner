import React from "react";
import "./nav.styles.scss";

import NavItem from "../nav-item/nav-item.component";

export default function Nav() {
  return (
    <nav className="nav-list">
      <NavItem title={"Dashboard"} />
      <NavItem title={"Profile"} />
      <NavItem title={"Statistics"} />
    </nav>
  );
}
